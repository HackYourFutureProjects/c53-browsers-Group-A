/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      id: 'q1',
      text: 'According to the Agile Manifesto, what is valued more than processes and tools?',
      answers: {
        a: 'Comprehensive documentation',
        b: 'Individuals and interactions',
        c: 'Contract negotiation',
        d: 'Following a plan',
      },
      correct: 'b',
      selected: null,
      links: [],
    },
    {
      id: 'q2',
      text: 'What is the primary measure of progress in Agile?',
      answers: {
        a: 'Working software',
        b: 'Lines of code',
        c: 'Documentation pages',
        d: 'Story points',
      },
      correct: 'a',
      selected: null,
      links: [],
    },
    {
      id: 'q3',
      text: 'In Scrum, who is responsible for maximizing value and managing the Product Backlog?',
      answers: {
        a: 'Stakeholders',
        b: 'Scrum Master',
        c: 'Development Team',
        d: 'Product Owner',
      },
      correct: 'd',
      selected: null,
      links: [],
    },
    {
      id: 'q4',
      text: 'How long is a typical Scrum Sprint?',
      answers: {
        a: '12 weeks',
        b: '6 months',
        c: '1 day',
        d: '2-4 weeks',
      },
      correct: 'd',
      selected: null,
      links: [],
    },
    {
      id: 'q5',
      text: 'The daily meeting where team members share progress and blockers is called:',
      answers: {
        a: 'Daily Scrum',
        b: 'Sprint Review',
        c: 'Retrospective',
        d: 'Backlog Refinement',
      },
      correct: 'a',
      selected: null,
      links: [],
    },
    {
      id: 'q6',
      text: 'What document lists all desired features and fixes for a product in Scrum?',
      answers: {
        a: 'Project Charter',
        b: 'Sprint Backlog',
        c: 'Product Backlog',
        d: 'Definition of Done',
      },
      correct: 'c',
      selected: null,
      links: [],
    },
    {
      id: 'q7',
      text: 'Agile welcomes changes even late in development because:',
      answers: {
        a: 'Contracts require it',
        b: 'Change provides competitive advantage',
        c: 'Developers prefer it',
        d: 'Documentation discourages it',
      },
      correct: 'b',
      selected: null,
      links: [],
    },
    {
      id: 'q8',
      text: 'Which principle promotes a sustainable pace for sponsors, developers, and users?',
      answers: {
        a: 'Agile promotes sustainable development',
        b: 'Individuals and interactions',
        c: 'Responding to change',
        d: 'Maximizing work not done',
      },
      correct: 'a',
      selected: null,
      links: [],
    },
    {
      id: 'q9',
      text: 'Who facilitates Scrum events and removes impediments?',
      answers: {
        a: 'User',
        b: 'Product Owner',
        c: 'Project Manager',
        d: 'Scrum Master',
      },
      correct: 'd',
      selected: null,
      links: [],
    },
    {
      id: 'q10',
      text: 'After each Sprint, the team reflects on how to improve during the:',
      answers: {
        a: 'Sprint Retrospective',
        b: 'Sprint Planning',
        c: 'Daily Scrum',
        d: 'Sprint Review',
      },
      correct: 'a',
      selected: null,
      links: [],
    },
  ],
};
