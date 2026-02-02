import cultivars from './cultivars.json';

function assertNonEmptyString(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${label} 必須是非空字串`);
  }
}

function validateCultivars(data) {
  if (data == null || typeof data !== 'object') throw new Error('cultivars 必須是物件');

  const { largeLeafCultivars, majorCultivars, otherSmallLeaf } = data;
  if (!Array.isArray(largeLeafCultivars)) throw new Error('cultivars.largeLeafCultivars 必須是陣列');
  if (!Array.isArray(majorCultivars)) throw new Error('cultivars.majorCultivars 必須是陣列');
  if (!Array.isArray(otherSmallLeaf)) throw new Error('cultivars.otherSmallLeaf 必須是陣列');

  largeLeafCultivars.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`largeLeafCultivars[${index}] 必須是物件`);
    assertNonEmptyString(item.name, `largeLeafCultivars[${index}].name`);
    assertNonEmptyString(item.desc, `largeLeafCultivars[${index}].desc`);
  });

  majorCultivars.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`majorCultivars[${index}] 必須是物件`);
    assertNonEmptyString(item.name, `majorCultivars[${index}].name`);
    assertNonEmptyString(item.desc, `majorCultivars[${index}].desc`);
  });

  otherSmallLeaf.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`otherSmallLeaf[${index}] 必須是物件`);
    assertNonEmptyString(item.name, `otherSmallLeaf[${index}].name`);
    assertNonEmptyString(item.desc, `otherSmallLeaf[${index}].desc`);
  });
}

validateCultivars(cultivars);

export default cultivars;
export const { largeLeafCultivars, majorCultivars, otherSmallLeaf } = cultivars;

