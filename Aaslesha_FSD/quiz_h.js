// Questions for the quiz
const quizData = [
    {
        question: "What is HTML?",
        options: ["A markup language", "A programming language", "A database"],
        correctAnswer: 0
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>","<hyper>"],
        correctAnswer: 0
    },
    {
        question: "Which tag is used to define the largest heading?",
        options: ["<h1>", "<head>", "<heading>","<h6>"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of adding <title> tag in HTML?",
        options: ["To add a heading to a webppage","To set the title of the webpage displayed in the browser's title bar","To create a footer for the webpage","To style the webpage"],
        correctAnswer: 1
    },
    {
        question: "What does the alt attribute in the <img> tag specify?",
        options: ["The image's URL","The alternative text if the image fails to load","The alignment of the image","The title of the image"],
        correctAnswer: 1
    },
    {
        question: "Which attribute is used to uniquely identify an HTML element?",
        options: ["class","id","style","name"],
        correctAnswer: 1
    },
    {
        question: "Which HTML tag is used to create a form?",
        options: ["<input>","<form>","<textarea>","<button>"],
        correctAnswer: 1
    },
    {
        question: "What is the correct input type to create a password field in a form?",
        options: ["text","password","hidden","secure"],
        correctAnswer: 1
    },
    {
        question: "Which tag is used to embed a video in HTML?",
        options: ["<movie>","<video>","<embed>","<source>"],
        correctAnswer: 1
    },
    {
        question: "What does the <audio> tag in HTML do?",
        options: ["Adds to a text description","Embeds an audio file into the webpage","Creates an image with sound","Generates background music for the webpage"],
        correctAnswer: 1
    },
];

// Function to load quiz content dynamically
function loadQuiz() {
    const quizForm = document.getElementById('quizForm');
    
    quizData.forEach((questionData, index) => {
        // Create a div for each question
        const questionElement = document.createElement('div');
        questionElement.classList.add('question')
        
        // Add the question text
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${questionData.question}`;
        questionElement.appendChild(questionText);

        // Add the options
        questionData.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `q${index}`;
            optionInput.value = i;
            optionLabel.textContent = option;
            questionElement.appendChild(optionInput);
            questionElement.appendChild(optionLabel);
            questionElement.appendChild(document.createElement('br'));
        });

        // Append the question to the form
        quizForm.appendChild(questionElement);
    });
}

// Function to calculate the score
function calculateScore() {
    let score = 0;
    
    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === questionData.correctAnswer) {
            score++;
        }
    });

    return score;
}

// Event listener for the Submit button
document.getElementById('submitBtn').addEventListener('click', function() {
    const score = calculateScore();
    const totalQuestions = quizData.length;
    const percentage = (score / totalQuestions) * 100;

    // Display the result
    alert(`Your score: ${score} / ${totalQuestions} (${percentage}%)`);

    // Redirect to results page with score data
    window.location.href = `results.html?score=${score}&total=${totalQuestions}&percentage=${percentage}`;
});

// Load the quiz when the page is loaded
window.onload = loadQuiz;
