document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Send login details to the backend
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) 
        {
        // Success: Hide the login form and show success card
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('successCard').style.display = 'block';
    } 
    else 
    {
        // Failure: Show error message
        const result = await response.json();
        errorMessage.textContent = result.message;
        errorMessage.style.display = 'block';
    }

    document.getElementById('quiz').addEventListener('click', function() {
        // Redirect to the quiz page
        window.location.href = 'courses.html'; // Change 'quiz.html' to the actual quiz page URL
    });
});

