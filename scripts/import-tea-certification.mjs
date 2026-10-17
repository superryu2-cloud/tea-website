import fs from 'node:fs';
import assert from 'node:assert/strict';

// Parse only the JSON data, never execute the supplied HTML or scripts.
const [source, batch = 'batch-001'] = process.argv.slice(2);
const newOnly = process.argv.includes('--new-only');
assert(source, 'Usage: node scripts/import-tea-certification.mjs <source.html> [batch-id]');
assert(/^[a-z0-9-]+$/.test(batch), 'Invalid batch id');
const html = fs.readFileSync(source, 'utf8');
const match = html.match(/const QUESTIONS\s*=\s*(\[[\s\S]*?\]);/);
assert(match, 'Missing QUESTIONS JSON');
const raw = JSON.parse(match[1]);
const dir = 'public/data/tea-certification';
const manifestPath = `${dir}/manifest.json`;
const existing = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')).batches.flatMap(file =>
    JSON.parse(fs.readFileSync(`${dir}/${file}`, 'utf8')))
  : [];
assert.equal(new Set(raw.map(q => q.id)).size, raw.length, 'Duplicate source numbers');
const questions = raw.filter(q => !newOnly || !existing.some(item => item.sourceNumber === q.id)).map(q => {
  assert(Number.isInteger(q.id) && q.id > 0 && q.q_tc && q.category);
  assert(/^[ABCD]*$/.test(q.answer));
  const isTrueFalse = q.type === '判断题';
  const isMultiple = q.type === '多选题' || q.answer.length > 1;
  const keys = isTrueFalse ? ['A', 'B'] : ['A', 'B', 'C', 'D'];
  const missingChoices = keys.filter(key => !q.opts_tc[key]?.trim());
  const choices = keys.map(key => q.opts_tc[key] || '〔原始資料缺少此選項〕');
  const complete = missingChoices.length === 0 && q.answer.length > 0;
  const warnings = [missingChoices.length ? `原始資料缺少選項 ${missingChoices.join('、')}，暫不計分。` : '', !q.answer ? '原始資料未提供答案，暫不計分。' : ''].filter(Boolean);
  return {
    id: `tea-cert-${batch}-${q.id}`,
    bank: 'tea_certification', bankLabel: '茶藝師檢定（國考）',
    topic: `tea-cert-${q.category}`, topicLabel: q.category,
    sourceNumber: q.id, batch, stem: q.q_tc, choices,
    questionType: isTrueFalse ? '是非題' : isMultiple ? '複選題' : '單選題',
    sourceAnswer: q.answer, sourceNote: q.note || '', missingChoices,
    answerIndices: isMultiple && complete ? [...q.answer].map(key => keys.indexOf(key)) : undefined,
    answerIndex: !isMultiple && complete ? keys.indexOf(q.answer) : null,
    note: [q.note || '', ...warnings].filter(Boolean).join(' ')
      .replaceAll('般来说', '般來說').replaceAll('般认为', '般認為')
      .replaceAll('经济效益和经济效益', '經濟效益和經濟效益'),
  };
}).filter(q => {
  const previous = existing.find(item => item.sourceNumber === q.sourceNumber);
  if (!previous) return true;
  for (const field of ['stem', 'choices', 'answerIndex', 'note', 'topicLabel']) {
    assert.deepEqual(q[field], previous[field], `Existing question ${q.sourceNumber} changed: ${field}; review before importing`);
  }
  return false;
});
assert(questions.length > 0, 'No new questions to import');
assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
fs.mkdirSync(dir, { recursive: true });
const destination = `${dir}/${batch}.json`;
assert(!fs.existsSync(destination), 'Batch already exists; review before replacing existing IDs');
fs.writeFileSync(destination, JSON.stringify(questions, null, 2) + '\n');
console.log(`${questions.length} questions, ${new Set(questions.map(q => q.topic)).size} topics imported to ${destination}`);
console.log('Source notes:', questions.filter(q => q.note).map(q => ({id:q.sourceNumber,note:q.note})));
