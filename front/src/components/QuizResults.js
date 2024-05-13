import React from 'react';
import '../style/style.css'

const QuizResults = ({ score, wrongAnswers, onClose }) => (
    <div className="quiz-results-container">
        <div className="quiz-results">
            <p>Your result is {score}/5. {score <= 3 ? "Try better!" : "Well done!"}</p>
            {wrongAnswers.length > 0 && <p>You made mistakes in the following questions: {wrongAnswers.join(', ')}</p>}
            <button className="close-btn" onClick={onClose}>Close</button>
        </div>
    </div>
);

export default QuizResults;

