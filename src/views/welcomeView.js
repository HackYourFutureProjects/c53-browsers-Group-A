import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add('welcome-container');

  element.innerHTML = String.raw`
  <h1 class="welcome-title">Welcome to JS Quiz!</h1>
  <p class="welcome-description">
  Test your JavaScript knowledge - answer questions and find out how pro you are!
    </p>
    <button id="${START_QUIZ_BUTTON_ID}" class="start-button">start quiz</button>
  `;
  return element;
};
