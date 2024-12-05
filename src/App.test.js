import { calculateScore } from './controllers/ScoringController';

test('calculateScore should return correct score', () => {
  const questions = [
    { correctAnswer: 'A' },
    { correctAnswer: 'B' },
    { correctAnswer: 'C' },
  ];
  const userAnswers = ['A', 'B', 'D'];
  const score = calculateScore(questions, userAnswers);
  expect(score).toBe(2); // Two correct answers
});
