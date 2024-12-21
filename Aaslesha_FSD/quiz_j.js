// Questions for the quiz
const quizData = [
    {
        question: "What is the output of the following code?",
        options: ["4", "22", "NaN","Error"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is the correct way to declare a variable in JavaScript?",
        options: ["var myVar", "variable myVar", "let myVar","both A and C"],
        correctAnswer: 3
    },
    {
        question:"What does the this keyword refer to in JavaScript?",
        options:["The global object","The function's argument","The object on which the method was called","It is undefined"],
        correctAnswer:2
    },
    {
        question:"What will be the result of the following code?\n javascript\n Copy code\n console.log([]+[]);",
        options:["0","NaN","\"\"","[]"],
        correctAnswer:2
    },
    {
        question:"What is the correct syntax for creating a function in JavaScript?",
        options:["function = myFunction() {}","function myFunction() {}","def myFunction() {}","func myFunction() {}"],
        correctAnswer:1
    },
    {
        question:"Which of the following data types are immutable in JavaScript?",
        options:["Array","Object","String","Function"],
        correctAnswer:2
    },
    {
        question:"What is the purpose of the bind() method in JavaScript?",
        options:["To bind two variables","To attach a function to a specific object",") To create a new object","To make a function asynchronous"],
        correctAnswer:1
    },
    {
        question:"What will be the result of the following code?\n javascript\n Copy code\n console.log(1=='1');",
        options:["true","false","Error","NaN"],
        correctAnswer:0
    },
    {
        question:"Which of the following is NOT a valid JavaScript loop structure?",
        options:["for","while","until","do...while"],
        correctAnswer:2
    },
    {
        question:"What is the purpose of the localStorage object in JavaScript?",
        options:["To store data for the duration of the session","To store data that is accessible across all tabs in the browser","To store data locally in the browser indefinitely","To store data for the entire website"],
        correctAnswer:2
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
