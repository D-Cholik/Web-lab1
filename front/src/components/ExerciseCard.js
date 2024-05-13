import React from 'react';

const ExerciseCard = ({ question, options }) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                {question}
            </div>
            <div className="card-body">
                <form>
                    {options.map((option, index) => (
                        <div key={index} className="form-check">
                            <input className="form-check-input" type="radio" name={`option-${index}`} id={`option-${index}`} value={option} />
                            <label className="form-check-label" htmlFor={`option-${index}`}>{option}</label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default ExerciseCard;
