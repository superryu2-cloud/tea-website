import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { CHAPTER_GROUPS, availableGroups, chooseGroup, chooseChapter, landingRotation } from '../src/utils/taoWheel.js';

const chapters = JSON.parse(readFileSync(new URL('../src/data/taoChapters.json', import.meta.url), 'utf8'));
assert.deepEqual(chapters.map(chapter => chapter.id), Array.from({ length: 81 }, (_, i) => i + 1));
assert.equal(new Set(chapters.map(chapter => chapter.title)).size, 81);
for (const chapter of chapters) {
  assert.equal(chapter.readings.length, chapter.text.length, `第 ${chapter.id} 章注音對齊`);
  for (const field of ['text', 'title', 'explanation', 'wisdom', 'question', 'practice']) {
    assert.ok(chapter[field]?.length >= (['explanation', 'wisdom'].includes(field) ? 50 : 4), `第 ${chapter.id} 章缺少 ${field}`);
  }
  for (let i = 0; i < chapter.text.length; i++) {
    assert.match(chapter.readings[i], /^(?:[ㄅ-ㄩ]+[ˊˇˋ˙]?)?$/u);
    assert.equal(Boolean(chapter.readings[i]), /\p{Script=Han}/u.test(chapter.text[i]), `第 ${chapter.id} 章「${chapter.text[i]}」注音覆蓋`);
  }
}

assert.equal(CHAPTER_GROUPS.length, 8);
assert.equal(CHAPTER_GROUPS.at(-1).label, '71–81');
assert.deepEqual(CHAPTER_GROUPS.flatMap(group => group.chapters), chapters.map(chapter => chapter.id));
assert.equal(CHAPTER_GROUPS.at(-1).chapters.length, 11);
assert.equal(chooseChapter(CHAPTER_GROUPS.at(-1), 10.5 / 11), 81);

// 窮舉第一輪的 81 個等機率位置：前七組各 10 份，最後一組 11 份。
const groupCounts = new Map();
for (let slot = 0; slot < 81; slot++) {
  const group = chooseGroup(CHAPTER_GROUPS, (slot + .5) / 81);
  groupCounts.set(group.id, (groupCounts.get(group.id) ?? 0) + 1);
}
for (const group of CHAPTER_GROUPS) {
  assert.equal(groupCounts.get(group.id), group.chapters.length);
  const probability = groupCounts.get(group.id) / 81 / group.chapters.length;
  assert.ok(Math.abs(probability - 1 / 81) < 1e-14);
}

// 不重複模式能走完 81 章；每一步移除已抽章號，空組不再參與第一輪。
const used = [];
for (let step = 0; step < 81; step++) {
  const groups = availableGroups(used);
  assert.equal(groups.flatMap(group => group.chapters).length, 81 - step);
  const group = chooseGroup(groups, (step % 7 + .5) / 7);
  const picked = chooseChapter(group, .999);
  assert.ok(!used.includes(picked));
  used.push(picked);
}
assert.equal(new Set(used).size, 81);
assert.deepEqual(availableGroups(used), []);
assert.equal(chooseGroup([]), null);

// 轉盤上選中的格子中心最終對準頂端指針。
for (const count of [1, 8, 10, 11]) {
  for (let index = 0; index < count; index++) {
    const rotation = landingRotation(2317, index, count);
    const error = ((rotation + index * 360 / count) % 360 + 360) % 360;
    assert.ok(Math.min(error, 360 - error) < 1e-9);
    assert.ok(rotation >= 2317 + 1800);
  }
}

function readingAt(id, phrase, character) {
  const chapter = chapters[id - 1];
  const start = chapter.text.indexOf(phrase);
  assert.ok(start >= 0);
  return chapter.readings[start + phrase.indexOf(character)];
}
for (const [id, phrase, character, expected] of [
  [6, '玄牝', '牝', 'ㄆㄧㄣˋ'], [5, '橐籥', '籥', 'ㄩㄝˋ'],
  [10, '長而不宰', '長', 'ㄓㄤˇ'], [7, '天長地久', '長', 'ㄔㄤˊ'],
  [26, '萬乘', '乘', 'ㄕㄥˋ'], [36, '歙之', '歙', 'ㄒㄧˋ'],
  [49, '歙歙', '歙', 'ㄒㄧˋ'], [43, '無間', '間', 'ㄐㄧㄢˋ'],
  [51, '畜之', '畜', 'ㄒㄩˋ'], [70, '被褐', '被', 'ㄆㄧ'],
  [70, '被褐', '褐', 'ㄏㄜˊ'], [80, '什伯', '伯', 'ㄅㄛˊ'],
]) assert.equal(readingAt(id, phrase, character), expected);

console.log('通過：81 章完整內容與逐字注音、8 組範圍、71–81 共 11 章、等機率、不重複全輪及指針落點。');
