export function saveUserAnswer(questionId, selectedKey) {
  const saved = JSON.parse(localStorage.getItem('userAnswers')) || {};
  saved[questionId] = selectedKey;
  localStorage.setItem('userAnswers', JSON.stringify(saved));
}

export function getUserAnswer(questionId) {
  const saved = JSON.parse(localStorage.getItem('userAnswers')) || {};
  return saved[questionId];
}
