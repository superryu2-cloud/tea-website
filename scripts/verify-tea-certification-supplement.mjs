import fs from 'node:fs';
import assert from 'node:assert/strict';
const [source, batch = 'batch-003.json'] = process.argv.slice(2);
const html = fs.readFileSync(source, 'utf8');
const raw = JSON.parse(html.match(/const QUESTIONS\s*=\s*(\[[\s\S]*?\]);/)[1]);
const imported = JSON.parse(fs.readFileSync(`public/data/tea-certification/${batch}`, 'utf8'));
for (const q of imported) {
  const original = raw.find(item => item.id === q.sourceNumber);
  assert(original, `Missing source ${q.sourceNumber}`);
  assert.equal(q.stem, original.q_tc);
  assert.equal(q.topicLabel, original.category);
  assert.equal(q.sourceAnswer, original.answer);
  assert.equal(q.sourceNote, original.note || '');
  const keys = original.type === '判断题' ? ['A','B'] : ['A','B','C','D'];
  assert.deepEqual(q.choices, keys.map(key => original.opts_tc[key] || '〔原始資料缺少此選項〕'));
  if (q.missingChoices.length || !original.answer) {
    assert.equal(q.answerIndex, null);
    assert.equal(q.answerIndices, undefined);
  } else if (q.questionType === '複選題') {
    assert.deepEqual(q.answerIndices, [...original.answer].map(key => keys.indexOf(key)));
  } else {
    assert.equal(q.answerIndex, keys.indexOf(original.answer));
  }
}
console.log(`Verified all ${imported.length} supplemental stems, choices, source answers, types and missing-data handling.`);
