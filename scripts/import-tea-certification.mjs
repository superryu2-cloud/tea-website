import fs from 'node:fs';
import assert from 'node:assert/strict';

// Parse only the JSON data, never execute the supplied HTML or scripts.
const [source, batch = 'batch-001'] = process.argv.slice(2);
assert(source, 'Usage: node scripts/import-tea-certification.mjs <source.html> [batch-id]');
assert(/^[a-z0-9-]+$/.test(batch), 'Invalid batch id');
const html = fs.readFileSync(source, 'utf8');
const match = html.match(/const QUESTIONS\s*=\s*(\[[\s\S]*?\]);/);
assert(match, 'Missing QUESTIONS JSON');
const raw = JSON.parse(match[1]);
const questions = raw.map(q => {
  assert(Number.isInteger(q.id) && q.id > 0 && q.q_tc && q.category);
  assert(/^[ABCD]$/.test(q.answer));
  const choices = ['A', 'B', 'C', 'D'].map(key => q.opts_tc[key]);
  assert(choices.every(value => typeof value === 'string' && value.length));
  return {
    id: `tea-cert-${batch}-${q.id}`,
    bank: 'tea_certification', bankLabel: '茶藝師檢定',
    topic: `tea-cert-${q.category}`, topicLabel: q.category,
    sourceNumber: q.id, batch, stem: q.q_tc, choices,
    answerIndex: 'ABCD'.indexOf(q.answer), note: q.note || '',
  };
});
assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
const dir = 'public/data/tea-certification';
fs.mkdirSync(dir, { recursive: true });
const destination = `${dir}/${batch}.json`;
assert(!fs.existsSync(destination), 'Batch already exists; review before replacing existing IDs');
fs.writeFileSync(destination, JSON.stringify(questions, null, 2) + '\n');
console.log(`${questions.length} questions, ${new Set(questions.map(q => q.topic)).size} topics imported to ${destination}`);
console.log('Source notes:', questions.filter(q => q.note).map(q => ({id:q.sourceNumber,note:q.note})));
