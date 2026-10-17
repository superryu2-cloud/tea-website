// Keep source wording intact; standardize empty answer blanks for display.
export const formatQuestionText = value => typeof value === 'string'
  ? value.replace(/\([\s\u3000]*\)/g, '（）')
  : value;
