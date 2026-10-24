export const CHAPTER_GROUPS = Array.from({ length: 8 }, (_, index) => {
  const start = index * 10 + 1;
  const end = index === 7 ? 81 : start + 9;
  return { id: index, start, end, label: `${start}–${end}`, chapters: Array.from({ length: end - start + 1 }, (_, i) => start + i) };
});

export function availableGroups(used = []) {
  return CHAPTER_GROUPS.map(group => ({ ...group, chapters: group.chapters.filter(id => !used.includes(id)) }))
    .filter(group => group.chapters.length > 0);
}

// 按剩餘章數加權，確保兩輪合併後每章的機率相同。
export function chooseGroup(groups, random = Math.random()) {
  let position = Math.floor(random * groups.reduce((sum, group) => sum + group.chapters.length, 0));
  for (const group of groups) {
    if (position < group.chapters.length) return group;
    position -= group.chapters.length;
  }
  return null;
}

export function landingRotation(current, index, count) {
  const target = (360 - index * 360 / count) % 360;
  const normalized = ((current % 360) + 360) % 360;
  return current + 360 * 5 + (target - normalized + 360) % 360;
}

export function chooseChapter(group, random = Math.random()) {
  return group.chapters[Math.floor(random * group.chapters.length)];
}

export function chapterFromSearch(search) {
  const value = new URLSearchParams(search).get('chapter');
  if (!value || !/^\d{1,2}$/.test(value)) return null;
  const id = Number(value);
  return id >= 1 && id <= 81 ? id : null;
}

export function chapterShareUrl(href, id) {
  const url = new URL(href);
  url.search = new URLSearchParams({ tab: 'tao_wheel', chapter: String(id) }).toString();
  url.hash = '';
  return url.toString();
}
