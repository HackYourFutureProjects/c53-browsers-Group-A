/**
 * Create an Answer element
 * @returns {Element}
 */

import { saveUserAnswer } from './localStorage.js';
import { highlightAnswer } from './highlightAnswer.js';

export const createAnswerElement = (
  key,
  answerText,
  correctKey,
  questionId
) => {
  const element = document.createElement('li');
  element.innerHTML = `${key}: ${answerText}`;
  element.classList.add('answer-option'); // Show the correct answer in green when the user presses the Skip button

  element.addEventListener('click', () => {
    highlightAnswer(key, correctKey);
    saveUserAnswer(questionId, key);
  });

  return element;
};
