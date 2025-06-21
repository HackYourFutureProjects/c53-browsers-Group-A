export function saveUserAnswer(questionId, selectedKey) {
  try {
    const saved = JSON.parse(localStorage.getItem('userAnswers')) || {};
    saved[questionId] = selectedKey;
    localStorage.setItem('userAnswers', JSON.stringify(saved));
  } catch (error) {
    // console.error('Failed to save user answer:', error);
  }
}

export function getUserAnswer(questionId) {
  try {
    const saved = JSON.parse(localStorage.getItem('userAnswers')) || {};
    return saved[questionId];
  } catch (error) {
    // console.error('Failed to load user answer:', error);
    return null;
  }
}
