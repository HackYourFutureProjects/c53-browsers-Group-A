import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { createProgressBar } from '../views/progressBar.js';
import { quizData } from '../data.js';

export const initWelcomePage = () => {
  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  return initQuestionPage;
};

const startQuiz = () => {
  loadPage(initQuestionPage);
};
