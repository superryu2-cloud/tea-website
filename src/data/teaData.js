import teaData from './teaData.json';

function assertNonEmptyString(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${label} 必須是非空字串`);
  }
}

function validateTeaData(data) {
  if (!Array.isArray(data)) throw new Error('teaData 必須是陣列');

  const seenIds = new Set();

  data.forEach((tea, index) => {
    if (tea == null || typeof tea !== 'object') {
      throw new Error(`teaData[${index}] 必須是物件`);
    }

    if (typeof tea.id !== 'number' || !Number.isFinite(tea.id)) {
      throw new Error(`teaData[${index}].id 必須是 number`);
    }

    if (seenIds.has(tea.id)) {
      throw new Error(`teaData 出現重複 id: ${tea.id}`);
    }
    seenIds.add(tea.id);

    assertNonEmptyString(tea.name, `teaData[${index}].name`);
    assertNonEmptyString(tea.engName, `teaData[${index}].engName`);

    if (typeof tea.seconds !== 'number' || !Number.isFinite(tea.seconds)) {
      throw new Error(`teaData[${index}].seconds 必須是 number`);
    }

    if (tea.taste != null) {
      if (!Array.isArray(tea.taste) || tea.taste.some((t) => typeof t !== 'string')) {
        throw new Error(`teaData[${index}].taste 必須是 string[]`);
      }
    }
  });
}

validateTeaData(teaData);

export default teaData;
export { teaData };
