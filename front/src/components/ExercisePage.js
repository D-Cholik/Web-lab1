import React, { useEffect, useState } from 'react';
import Footer from "./Footer";
import Nav from "./Nav";
import ExerciseCard from "./ExerciseCard";
import { Link } from "react-router-dom";
import back from '../img/back.png';
import axios from "axios";
import QuizResults from "./QuizResults";

const ExercisePage = () => {
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);

    const handleCloseResults = () => {
        setShowResults(false);
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await axios.get('http://localhost:5000/questions');
                setQuestions(res.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerChange = (questionIndex, selectedOption) => {
        setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:5000/submit-answers', { answers: Object.values(userAnswers) });
            setScore(res.data.score);
            setWrongAnswers(res.data.wrongAnswers);
            setShowResults(true);
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'scroll' }}>
            <Nav />

            <section id="working-page" className="mb-16" >
                <h2 className="text-uppercase text-center text-secondary">Different exercises for B1 level</h2>
                <div className="container mt-5">
                    {questions.map((question, index) => (
                        <ExerciseCard
                            key={index}
                            question={question.question}
                            options={question.options}
                            onAnswerChange={(selectedOption) => handleAnswerChange(index, selectedOption)}
                        />
                    ))}
                </div>
            </section>

            <div className="d-flex justify-content-between px-3">
                <Link to="/about"><img src={back} alt="Back" width="40" height="40" className="rounded" /></Link>
                <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
            </div>

            {showResults && <QuizResults score={score} wrongAnswers={wrongAnswers} onClose={handleCloseResults} />}

            <div className="m-5"></div>
            <Footer />
        </div>
    );
};

export default ExercisePage;
