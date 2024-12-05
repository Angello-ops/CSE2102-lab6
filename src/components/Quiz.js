import React from 'react';
import quizPageStyle from '../QuizPageStyle';
import my_questions from '../model/basic_questions.json';
import { incrementScore, dontIncrementScore } from '../controllers/ScoringController';

class Quiz extends React.Component {
    state = {
        score: 0,
        responses: {} // To track selected responses
    };

    handleScoreUpdate = (isCorrect, questionId) => {
        this.setState((prevState) => ({
            ...prevState,
            responses: { ...prevState.responses, [questionId]: isCorrect },
        }));
        this.setState((prevState) =>
            isCorrect ? incrementScore(prevState) : dontIncrementScore(prevState)
        );
    };

    //made the current scoring popup less annoying to click so i made it more functional :)
    handleSubmit = () => {
        const { score } = this.state;
        const totalQuestions = my_questions.length; // Total number of questions

        // Show the final score
        alert("Total score: " + score + "/" + totalQuestions);

        // Reset the quiz
        this.setState({
            score: 0,
            responses: {}
        });
    };

    render() {
        return (
            <div style={quizPageStyle}>
                <h1>My Questions</h1>
                {my_questions.map((quest) => (
                    <div key={quest.id}>
                        <h2>{quest.question}</h2>
                        {quest.answers.map((ans) => (
                            <div key={ans.answer}>
                                <label>
                                    <input
                                        type="radio"
                                        name={quest.id}
                                        checked={this.state.responses[quest.id] === ans.isCorrect}
                                        onChange={() => this.handleScoreUpdate(ans.isCorrect, quest.id)}
                                    />
                                    {ans.answer}
                                </label>
                                <br />
                            </div>
                        ))}
                    </div>
                ))}
                <br />
                <button onClick={this.handleSubmit} style={doneButtonStyle}>
                    Done
                </button>
            </div>
        );
    }
}

// Style for the "Done" button
const doneButtonStyle = {
    backgroundColor: '#ffffff', // White background
    color: '#007bff',           // Blue text
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '5px',
};


export default Quiz;

