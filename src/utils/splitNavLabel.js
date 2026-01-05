export function splitNavLabel(label) {
  const text = String(label ?? '');
  if (!text) return { prefix: '', rest: '' };

  const chapterPrefixMatch = text.match(
    /^([一二三四五六七八九十百千零〇兩壹貳參肆伍陸柒捌玖拾]+)(\s*[：:．.、)）\]]\s*)/u,
  );
  if (chapterPrefixMatch) {
    const prefix = chapterPrefixMatch[0];
    const rest = text.slice(prefix.length);
    if (rest) return { prefix, rest };
  }

  const isContentChar = (char) => /\p{Script=Han}|\p{L}/u.test(char);

  let prefix = '';
  let restStart = 0;

  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    if (isContentChar(char)) {
      restStart = index;
      break;
    }
    prefix += char;
    restStart = index + 1;
  }

  const rest = text.slice(restStart);
  if (!rest) return { prefix: '', rest: text };
  return { prefix, rest };
}
