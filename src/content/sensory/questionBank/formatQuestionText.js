// Display empty answer blanks with fullwidth parentheses and an underline.
export const formatQuestionText = value => typeof value === 'string'
  ? value.replace(/[（(][\s\u3000]*[）)]/g, '（＿）')
    .replace(/[「“”"‘’']\s*（＿）\s*[」“”"‘’']/g, '（＿）')
  : value;
