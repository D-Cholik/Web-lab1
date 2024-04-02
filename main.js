class Model {
    constructor(questions) {
        this.questions = questions;
    }

    calculateScore(answers) {
        let score = 0;
        const wrongAnswers = []; 
        for (let i = 0; i < this.questions.length; i++) {
            if (answers[i] === this.questions[i].correctAnswer) {
                score++;
            } else {
                wrongAnswers.push(i + 1); 
            }
        }
        return { score, wrongAnswers }; 
    }
}

class Controller {
    constructor(model) {
        this.model = model;
        this.init();
    }

    init() {
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.addEventListener('click', this.onSubmit.bind(this));
    }

    onSubmit(event) {
        event.preventDefault();
        const userAnswers = [];
        const options = document.querySelectorAll('input[type="radio"]:checked');
        options.forEach(option => {
            userAnswers.push(option.nextElementSibling.textContent);
        });
        if (userAnswers.length < this.model.questions.length) {
            alert("Please answer all questions before submitting.");
            return;
        }
        const { score, wrongAnswers } = this.model.calculateScore(userAnswers);
        let message;
        if (score <= 3) {
            message = `Your result is ${score}/5. Try better!`;
        } else {
            message = `Your result is ${score}/5. Well done!`;
        }
        if (wrongAnswers.length > 0) {
            message += `\n\nYou made mistakes in the following questions: ${wrongAnswers.join(', ')}`;
        }
        alert(message);
    }
}

class View {
    constructor(controller) {
        this.controller = controller;
    }

    init() {
        this.controller.init();
    }
}

const questions = [
    {
        question: "What is the correct plural form of 'child'?",
        options: ["Childs", "Childes", "Children", "Childers"],
        correctAnswer: "Children"
    },
    {
        question: "Identify the adverb in the sentence: \"The cat sleeps peacefully.\"",
        options: ["Cat", "Sleeps", "Peacefully", "The"],
        correctAnswer: "Peacefully"
    },
    {
        question: "Which of the following sentences is in the past perfect tense?",
        options: ["She will finish her work tomorrow.", "They are swimming in the pool.", "He had already eaten when I arrived.", "I have been working all day."],
        correctAnswer: "He had already eaten when I arrived."
    },
    {
        question: "What is the correct comparative form of \"good\"?",
        options: ["Gooder", "Better", "Best", "Goodest"],
        correctAnswer: "Better"
    },
    {
        question: "Choose the correct phrasal verb: \"He decided to ______ the project because of financial issues.\"",
        options: ["Break up", "Break down", "Break into", "Break off"],
        correctAnswer: "Break up"
    }
];

const modelInstance = new Model(questions);
const controllerInstance = new Controller(modelInstance);
const viewInstance = new View(controllerInstance);
