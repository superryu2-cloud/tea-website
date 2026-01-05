import sensoryQuestionBankRaw from './sensoryQuestionBank.json?raw';

const sensoryQuestionBank = (() => {
  const parsed = JSON.parse(String(sensoryQuestionBankRaw));
  if (!Array.isArray(parsed)) throw new Error('sensoryQuestionBank 必須是陣列');
  return parsed.map((question) => {
    if (question == null || typeof question !== 'object') return question;
    const hasBank = typeof question.bank === 'string' && question.bank.trim().length > 0;
    const hasBankLabel = typeof question.bankLabel === 'string' && question.bankLabel.trim().length > 0;
    if (hasBank || hasBankLabel) return question;
    return { ...question, bank: 'tea_tech_c', bankLabel: '製茶技術丙級' };
  });
})();

function assertNonEmptyString(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${label} 必須是非空字串`);
  }
}

function validateQuestionBank(bank) {
  if (!Array.isArray(bank)) throw new Error('sensoryQuestionBank 必須是陣列');

  const seenIds = new Set();
  bank.forEach((question, index) => {
    if (question == null || typeof question !== 'object') {
      throw new Error(`sensoryQuestionBank[${index}] 必須是物件`);
    }

    assertNonEmptyString(question.id, `sensoryQuestionBank[${index}].id`);
    assertNonEmptyString(question.topic, `sensoryQuestionBank[${index}].topic`);
    assertNonEmptyString(question.topicLabel, `sensoryQuestionBank[${index}].topicLabel`);
    assertNonEmptyString(question.stem, `sensoryQuestionBank[${index}].stem`);

    if (question.bank != null || question.bankLabel != null) {
      assertNonEmptyString(question.bank, `sensoryQuestionBank[${index}].bank`);
      assertNonEmptyString(question.bankLabel, `sensoryQuestionBank[${index}].bankLabel`);
    }

    if (seenIds.has(question.id)) throw new Error(`sensoryQuestionBank 出現重複 id: ${question.id}`);
    seenIds.add(question.id);

    if (!Array.isArray(question.choices) || question.choices.length !== 4) {
      throw new Error(`sensoryQuestionBank[${index}].choices 必須是長度 4 的陣列`);
    }
    question.choices.forEach((choice, choiceIndex) => {
      assertNonEmptyString(choice, `sensoryQuestionBank[${index}].choices[${choiceIndex}]`);
    });

    if (question.answerIndex != null) {
      if (typeof question.answerIndex !== 'number' || !Number.isInteger(question.answerIndex)) {
        throw new Error(`sensoryQuestionBank[${index}].answerIndex 必須是整數`);
      }
      if (question.answerIndex < 0 || question.answerIndex > 3) {
        throw new Error(`sensoryQuestionBank[${index}].answerIndex 必須介於 0~3`);
      }
    }
  });
}

validateQuestionBank(sensoryQuestionBank);

export default sensoryQuestionBank;
export { sensoryQuestionBank };
