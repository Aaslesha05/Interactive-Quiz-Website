// Questions for the quiz
const quizData = [
    {
        question: "Which property is used to add spacing between the content and the border of an element?",
        options: ["margin", "padding", "border-spacing","content-spacing"],
        correctAnswer: 1
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["JavaScript", "CSS", "HTML"],
        correctAnswer: 1
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets","Cascading Style Sheets","Creative Style Sheets","Colorful Style Sheets"],
        correctAnswer: 1
    },
    {
        question: "Which HTML tag is used to apply an external CSS file?",
        options: ["<script>","<style>","<link>","<css>"],
        correctAnswer: 2
    },
    {
        question: "How can you make an element's corners rounded?",
        options: ["border-style", "corner-style", "border-radius","corner-radius"],
        correctAnswer: 2
    },
    {
        question: "Which property is used to control the transparency of an element?",
        options: ["visibility", "opacity", "display","transparency"],
        correctAnswer: 1
    },
    {
        question: "How do you add a background color in CSS?",
        options: ["background-color: blue", "bgcolor: blue", "color: blue","background: blue"],
        correctAnswer: 0
    },
    {
        question: "Which property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color","text-style"],
        correctAnswer: 1
    },
    {
        question: "Which property is used to change the font of an element?",
        options: ["font-style","font-weight","font-family","font-type"],
        correctAnswer: 2
    },
    {
        question: "What is the correct syntax for a CSS comment?",
        options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->","# This is a comment"],
        correctAnswer: 1
    }
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
