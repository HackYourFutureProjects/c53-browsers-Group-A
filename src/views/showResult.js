import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import { getUserAnswer } from '../views/localStorage.js';

export const showResult = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const score = quizData.questions.filter((question) => {
    const userAnswer = getUserAnswer(question.id);
    return userAnswer === question.correct;
  }).length;

  const scoreElement = document.createElement('div');
  scoreElement.innerHTML = `<h2>Your Score: ${score} / ${quizData.questions.length}</h2>`;
  userInterface.appendChild(scoreElement);

  const resetButton = document.createElement('button');
  resetButton.id = 'reset-button';
  resetButton.textContent = 'Reset';
  userInterface.appendChild(resetButton);

  return {
    scoreElement,
    resetButton,
  };
};
