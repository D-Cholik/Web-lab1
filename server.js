const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/submit-answers', (req, res) => {
    const answers = req.body.answers;

    let score = 0;
    const wrongAnswers = [];
    const correctAnswers = ["Children", "Peacefully", "He had already eaten when I arrived.", "Better", "Break up"];
    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        } else {
            wrongAnswers.push(index + 1);
        }
    });

    res.json({ score, wrongAnswers });
});
app.get('/submit-answers', (req, res) => {
    res.status(404).send('This route does not support GET requests. Please use a POST request instead.');
});


const questions = [
    {
        question: "What is the correct plural form of 'child'?",
        options: ["Childs", "Childes", "Children", "Childers"],
        correctAnswer: "Children"
    },
    {
        question: "Identify the adverb in the sentence: 'The cat sleeps peacefully.'",
        options: ["Cat", "Sleeps", "Peacefully", "The"],
        correctAnswer: "Peacefully"
    },
    {
        question: "Which of the following sentences is in the past perfect tense?",
        options: ["She will finish her work tomorrow.", "They are swimming in the pool.", "He had already eaten when I arrived.", "I have been working all day."],
        correctAnswer: "He had already eaten when I arrived."
    },
    {
        question: "What is the correct comparative form of 'good'?",
        options: ["Gooder", "Better", "Best", "Goodest"],
        correctAnswer: "Better"
    },
    {
        question: "Choose the correct phrasal verb: 'He decided to ______ the project because of financial issues.'",
        options: ["Break up", "Break down", "Break into", "Break off"],
        correctAnswer: "Break up"
    }
];

app.get('/questions', (req, res) => {
    res.json(questions);
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
