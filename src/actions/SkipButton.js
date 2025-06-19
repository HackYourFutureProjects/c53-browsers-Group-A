export const SkipButton = (
  skipButton,
  nextButton,
  answersListElement,
  currentQuestion
) => {
  // Create a function to avoid code repetition
  const ButtonVisibility = () => {
    skipButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
  };

  skipButton.addEventListener('click', () => {
    currentQuestion.selected = null;
    currentQuestion.answers = true;

    // Disable answers and highlight correct one
    const answerItems = Array.from(answersListElement.children);

    answerItems.forEach((item) => {
      item.classList.add('disabled');

      // Build the correct answer prefix like "A:" or "B:"
      const correctText = currentQuestion.correct + ':';

      if (item.textContent.startsWith(correctText)) {
        item.classList.add('correct');
      }
    });

    ButtonVisibility();
  });
  Array.from(answersListElement.children).forEach((answer) => {
    answer.addEventListener('click', () => {
      // Hide the "Skip" button and show the "Next" button by calling a function
      ButtonVisibility();
    });
  });
};
