export const createProgressBar = (currentQuestion, totalQuestions) => {
  // Calculate progress percentage
  const percentage = (currentQuestion / totalQuestions) * 100;

  // Create the visual progress bar
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  bar.style.width = `${percentage}%`;

  // Wrap it in a container
  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progressBarContainer';
  progressBarContainer.appendChild(bar);

  // Return the complete component
  return progressBarContainer;
};
