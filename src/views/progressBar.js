let bar = null;

export const createProgressBar = () => {
  const container = document.createElement('div');
  container.className = 'progressBarContainer';

  bar = document.createElement('div');
  bar.className = 'progressBar';
  bar.style.width = '0%';

  container.appendChild(bar);
  return container;
};

export const updateProgressBar = (currentIndex, totalQuestions) => {
  if (!bar) return;
  const percent = ((currentIndex + 1) / totalQuestions) * 100;
  bar.style.width = `${percent}%`;
};
