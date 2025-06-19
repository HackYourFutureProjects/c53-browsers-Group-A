/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = `${key}: ${answerText}`;
  element.classList.add('answer-option'); // Show the correct answer in green when the user presses the Skip button

  return element;
};
