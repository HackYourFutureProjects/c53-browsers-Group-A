import {
  USER_INTERFACE_ID,
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
} from '../constants.js';

import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createProgressBar } from '../views/progressBar.js';
import { quizData } from '../data.js';
import { showResult } from '../views/showResult.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import { skipButton } from '../views/skipButton.js';

export const initQuestionPage = () => {
  const totalQuestions = quizData.questions.length;
  const currentIndex = quizData.currentQuestionIndex;
  const currentQuestion = quizData.questions[currentIndex];

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // Create and append progress bar showing current question out of total
  const progressBarElement = createProgressBar(
    currentIndex + 1,
    totalQuestions
  );
  userInterface.appendChild(progressBarElement);

  // Placeholder: score is stored here (can be shown or used later)
  if (quizData.score === undefined) {
    quizData.score = 0;
  }

  // Question element
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  // Make content
  const answersListElement = document.createElement('ul');
  answersListElement.id = ANSWERS_LIST_ID;
  userInterface.appendChild(answersListElement);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  const nextButton = document.createElement('button');
  nextButton.id = NEXT_QUESTION_BUTTON_ID;
  nextButton.textContent = 'Next';
  userInterface.appendChild(nextButton);

  const skipButton = document.createElement('button');
  skipButton.id = SKIP_QUESTION_BUTTON_ID;
  skipButton.textContent = 'Skip';
  userInterface.appendChild(skipButton);

  // Add event listener to the "Next Question" button
  nextButton.addEventListener('click', () => {
    quizData.currentQuestionIndex++;

    if (quizData.currentQuestionIndex < quizData.questions.length) {
      initQuestionPage();
    } else {
      const result = showResult();
      result.resetButton.addEventListener('click', () => {
        quizData.currentQuestionIndex = 0;
        quizData.questions.forEach((question) => {
          question.answers = false;
          question.selected = null;
        });
        initWelcomePage();
      });
    }
  });

  // skip button logic (from external file)
  skipButton(skipButton, nextButton, answersListElement, currentQuestion);
};
