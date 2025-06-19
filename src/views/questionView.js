import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  RESET_QUESTION_BUTTON_ID,
} from '../constants.js';

export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>

    <button id="${SKIP_QUESTION_BUTTON_ID}">
      Skip & Show Answer
    </button>

    <button id="${RESET_QUESTION_BUTTON_ID}">
      Reset
    </button>
  `;

  return element;
};

