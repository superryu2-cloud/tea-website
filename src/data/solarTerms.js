import solarTerms from './solarTerms.json';

function assertNonEmptyString(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${label} 必須是非空字串`);
  }
}

function validateSolarTerms(data) {
  if (!Array.isArray(data)) throw new Error('solarTerms 必須是陣列');

  data.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`solarTerms[${index}] 必須是物件`);
    assertNonEmptyString(item.term, `solarTerms[${index}].term`);
    assertNonEmptyString(item.date, `solarTerms[${index}].date`);
    assertNonEmptyString(item.desc, `solarTerms[${index}].desc`);
  });
}

validateSolarTerms(solarTerms);

export default solarTerms;

