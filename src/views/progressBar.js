export const createProgressBar = (totalQuestions) => {
  const container = document.createElement('div');
  container.className = 'progressBarContainer';

  const label = document.createElement('div');
  label.className = 'progressBarLabel';
  label.innerText = `Question 1 of ${totalQuestions}`;

  const bar = document.createElement('div');
  bar.className = 'progressBar';
  bar.style.width = '0%';

  container.appendChild(label);
  container.appendChild(bar);

  return {
    element: container,
    update(currentQuestionIndex) {
      const current = currentQuestionIndex + 1;
      const percentage = (current / totalQuestions) * 100;
      bar.style.width = `${percentage}%`;
      label.innerText = `Question ${current} of ${totalQuestions}`;
    }
  };
}