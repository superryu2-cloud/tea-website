import historyCulture from './historyCulture.json';

function assertNonEmptyString(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${label} 必須是非空字串`);
  }
}

function validateTeaNameEtymology(data) {
  if (!Array.isArray(data)) throw new Error('historyCulture.teaNameEtymology 必須是陣列');
  data.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`teaNameEtymology[${index}] 必須是物件`);
    assertNonEmptyString(item.name, `teaNameEtymology[${index}].name`);
    assertNonEmptyString(item.desc, `teaNameEtymology[${index}].desc`);
  });
}

function validateTeaNicknames(data) {
  if (!Array.isArray(data)) throw new Error('historyCulture.teaNicknames 必須是陣列');
  data.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`teaNicknames[${index}] 必須是物件`);
    assertNonEmptyString(item.name, `teaNicknames[${index}].name`);
    assertNonEmptyString(item.desc, `teaNicknames[${index}].desc`);
  });
}

function validateChineseTeaDynasties(data) {
  if (!Array.isArray(data)) throw new Error('historyCulture.chineseTeaDynasties 必須是陣列');
  data.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`chineseTeaDynasties[${index}] 必須是物件`);
    assertNonEmptyString(item.dynasty, `chineseTeaDynasties[${index}].dynasty`);
    if (!Array.isArray(item.content) || item.content.some((p) => typeof p !== 'string')) {
      throw new Error(`chineseTeaDynasties[${index}].content 必須是 string[]`);
    }
  });
}

function validateDongdingTimeline(data) {
  if (!Array.isArray(data)) throw new Error('historyCulture.dongdingTimeline 必須是陣列');
  data.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`dongdingTimeline[${index}] 必須是物件`);
    assertNonEmptyString(item.year, `dongdingTimeline[${index}].year`);
    assertNonEmptyString(item.desc, `dongdingTimeline[${index}].desc`);
  });
}

function validateHistoryCulture(data) {
  if (data == null || typeof data !== 'object') throw new Error('historyCulture 必須是物件');
  validateTeaNameEtymology(data.teaNameEtymology);
  validateTeaNicknames(data.teaNicknames);
  validateChineseTeaDynasties(data.chineseTeaDynasties);
  validateDongdingTimeline(data.dongdingTimeline);
}

validateHistoryCulture(historyCulture);

export default historyCulture;
export const { teaNameEtymology, teaNicknames, chineseTeaDynasties, dongdingTimeline } = historyCulture;

