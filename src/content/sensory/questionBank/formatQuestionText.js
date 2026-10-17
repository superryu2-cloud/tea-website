// Use a readable answer line instead of cramped empty parentheses.
export const formatQuestionText = value => typeof value === 'string'
  ? value.replace(/[（(][\s\u3000]*[）)]/g, '＿＿＿')
  : value;
