// Questions for the quiz
const quizData = [

    
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
