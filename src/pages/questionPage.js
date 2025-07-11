import {
  USER_INTERFACE_ID,
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  RESET_QUESTION_BUTTON_ID,
} from '../constants.js';

import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createProgressBar, updateProgressBar } from '../views/progressBar.js';
import { quizData } from '../data.js';
import { showResult } from '../views/showResult.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import { SkipButton } from '../views/SkipButton.js';
import { getUserAnswer } from '../views/localStorage.js';
import { highlightAnswer } from '../views/highlightAnswer.js';
import { originalQuizData } from '../data.js';

let isFirstInit = true;
let progressBarElement = null;

export const initQuestionPage = () => {
  if (isFirstInit) {
    localStorage.removeItem('userAnswers');
    isFirstInit = false;
  }

  const totalQuestions = quizData.questions.length;
  const currentIndex = quizData.currentQuestionIndex;
  const currentQuestion = quizData.questions[currentIndex];
  const savedAnswer = getUserAnswer(currentQuestion.id);

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // Create and append progress bar showing current question out of total
  if (!progressBarElement) {
    progressBarElement = createProgressBar();
    userInterface.appendChild(progressBarElement);
  } else {
    userInterface.appendChild(progressBarElement);
  }

  requestAnimationFrame(() => {
    updateProgressBar(currentIndex, totalQuestions);
  });

  // Placeholder: score is stored here (can be shown or used later)
  if (quizData.score === undefined) {
    quizData.score = 0;
  }

  // Create and append the question element
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  // Create and append all answer buttons
  const nextButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  const skipButton = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(
      key,
      answerText,
      currentQuestion.correct,
      currentQuestion.id
    );
    answersListElement.appendChild(answerElement);
  }
  if (savedAnswer) {
    highlightAnswer(savedAnswer, currentQuestion.correct);
  }

  // Add event listener to the "Next Question" button
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
      quizData.currentQuestionIndex++;

      if (quizData.currentQuestionIndex < quizData.questions.length) {
        initQuestionPage();
      } else {
        const result = showResult();

        result.resetButton.addEventListener('click', () => {
          Object.assign(quizData, structuredClone(originalQuizData));
          localStorage.removeItem('userAnswers');
          initWelcomePage();
          isFirstInit = true;

          progressBarElement = null;
        });
      }
    });
  // skip button logic (from external file)
  SkipButton(skipButton, nextButton, answersListElement, currentQuestion);

  const resetButton = document.getElementById(RESET_QUESTION_BUTTON_ID);
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      Object.assign(quizData, structuredClone(originalQuizData));
      localStorage.removeItem('userAnswers');
      initWelcomePage();
      isFirstInit = true;

      progressBarElement = null;
    });
  }
};
