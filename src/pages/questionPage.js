import {
  USER_INTERFACE_ID,
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createProgressBar } from '../views/progressBar.js';
import { quizData } from '../data.js';

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

  // Create and append the question element
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  // Create and append all answer buttons
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  // Add event listener to the "Next Question" button
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};
