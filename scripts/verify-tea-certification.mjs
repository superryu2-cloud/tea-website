import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = path => JSON.parse(fs.readFileSync(path, 'utf8'));
const manifest = read('public/data/tea-certification/manifest.json');
const batches = manifest.batches.map(file => read(`public/data/tea-certification/${file}`));
const questions = batches.flat();
const existing = read('public/data/sensoryQuestionBank.json');
const ids = [...existing, ...questions].map(q => q.id);
assert.equal(new Set(ids).size, ids.length, 'IDs must not collide with existing banks');
for (const q of questions) {
  assert(q.bank === 'tea_certification' && q.stem && q.topicLabel);
  assert.equal(q.choices.length, 4);
  assert(q.choices.every(c => typeof c === 'string' && c.length));
  assert(Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < 4);
}
if (process.argv[2]) {
  const html = fs.readFileSync(process.argv[2], 'utf8');
  const source = JSON.parse(html.match(/const QUESTIONS\s*=\s*(\[[\s\S]*?\]);/)[1]);
  assert.equal(source.length, batches[0].length);
  source.forEach((q, i) => {
    const imported = batches[0][i];
    assert.equal(imported.stem, q.q_tc);
    assert.deepEqual(imported.choices, ['A','B','C','D'].map(k => q.opts_tc[k]));
    assert.equal(imported.answerIndex, 'ABCD'.indexOf(q.answer));
    assert.equal(imported.note, q.note || '');
    assert.equal(imported.topicLabel, q.category);
  });
}
console.log(`Verified ${questions.length} questions, ${new Set(questions.map(q => q.topic)).size} topics, ${questions.filter(q => q.note).length} source notes; no ID collisions.`);
