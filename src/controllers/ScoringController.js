// ScoringController.js

/**
 * Calculates the total score based on the user's answers.
 *
 * @param {Array} questions - Array of question objects, each with a `correctAnswer`.
 * @param {Array} userAnswers - Array of user-submitted answers.
 * @returns {number} - The total score based on correct answers.
 */
export function calculateScore(questions, userAnswers) {
    let score = 0;

    // Iterate through the questions and check against user answers
    questions.forEach((question, index) => {
        if (question.correctAnswer === userAnswers[index]) {
            score += 1; // Increment the score for each correct answer
        }
    });

    return score;
}

/**
 * Updates the state when the user selects a correct answer.
 *
 * @param {Object} state - The current state of the quiz.
 * @returns {Object} - Updated state with incremented score and count.
 */
export function incrementScore(state) {
    return {
        score: state.score + 1,
        count: state.count + 1,
    };
}

/**
 * Updates the state when the user selects an incorrect answer.
 *
 * @param {Object} state - The current state of the quiz.
 * @returns {Object} - Updated state with incremented count only.
 */
export function dontIncrementScore(state) {
    return {
        count: state.count + 1,
    };
}
