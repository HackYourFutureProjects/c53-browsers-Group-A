export function highlightAnswer(userKey, correctKey) {
  if (!userKey || !correctKey) return;

  document.querySelectorAll('.answer-option').forEach((option) => {
    const key = option.textContent.split(':')[0].trim();

    option.classList.add('disabled');

    if (key === correctKey) {
      option.classList.add('correct');
    }

    if (key === userKey && key !== correctKey) {
      option.classList.add('wrong');
    }
  });
}
