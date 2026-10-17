import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = path => JSON.parse(fs.readFileSync(path, 'utf8'));
const manifest = read('public/data/tea-certification/manifest.json');
const batches = manifest.batches.map(file => read(`public/data/tea-certification/${file}`));
const questions = batches.flat();
assert.equal(new Set(questions.map(q => q.sourceNumber)).size, questions.length, 'Duplicate source numbers');
const existing = read('public/data/sensoryQuestionBank.json');
const ids = [...existing, ...questions].map(q => q.id);
assert.equal(new Set(ids).size, ids.length, 'IDs must not collide with existing banks');
for (const q of questions) {
  assert(q.bank === 'tea_certification' && q.stem && q.topicLabel);
  assert([2, 4].includes(q.choices.length));
  assert(q.choices.every(c => typeof c === 'string' && c.length));
  assert(q.answerIndex == null || (Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < q.choices.length));
  if (q.answerIndices) assert(q.answerIndices.every(i => Number.isInteger(i) && i >= 0 && i < q.choices.length));
}
if (process.argv[2]) {
  const html = fs.readFileSync(process.argv[2], 'utf8');
  const source = JSON.parse(html.match(/const QUESTIONS\s*=\s*(\[[\s\S]*?\]);/)[1]);
  assert.equal(source.length, questions.length);
  source.forEach((q) => {
    const imported = questions.find(item => item.sourceNumber === q.id);
    assert(imported, `Missing source question ${q.id}`);
    assert.equal(imported.stem, q.q_tc);
    assert.deepEqual(imported.choices, ['A','B','C','D'].map(k => q.opts_tc[k]));
    assert.equal(imported.answerIndex, 'ABCD'.indexOf(q.answer));
    assert.equal(imported.note, (q.note || '').replaceAll('般来说', '般來說')
      .replaceAll('般认为', '般認為').replaceAll('经济效益和经济效益', '經濟效益和經濟效益'));
    assert.equal(imported.topicLabel, q.category);
  });
}
console.log(`Verified ${questions.length} questions, ${new Set(questions.map(q => q.topic)).size} topics, ${questions.filter(q => q.note).length} source notes; no ID collisions.`);
