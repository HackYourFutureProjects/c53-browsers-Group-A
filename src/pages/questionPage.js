import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';

import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { showResult } from '../views/showResult.js';
import { createProgressBar } from '../views/progressBar.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import { SkipButton } from '../views/SkipButton.js';

export const initQuestionPage = () => {
  const totalQuestions = quizData.questions.length;
  const currentIndex = quizData.currentQuestionIndex;
  const currentQuestion = quizData.questions[currentIndex];

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  /// Create and append progress bar showing current question out of total
  const progressBarElement = createProgressBar(
    currentIndex + 1,
    totalQuestions
  );
  userInterface.appendChild(progressBarElement);

  // Placeholder: score is stored here (can be shown or used later)
  if (quizData.score === undefined) {
    quizData.score = 0;
  }

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  // Create and append all answer buttons
  const nextButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  const skipButton = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
      quizData.currentQuestionIndex++;

      if (quizData.currentQuestionIndex < quizData.questions.length) {
        initQuestionPage();
      } else {
        const result = showResult();

        result.resetButton.addEventListener('click', () => {
          quizData.currentQuestionIndex = 0;

          quizData.questions.forEach((question) => {
            question.selected = null;
          });

          initWelcomePage();
        });
      }
    });
  // skip button logic (from external file)
  SkipButton(skipButton, nextButton, answersListElement, currentQuestion);
};
