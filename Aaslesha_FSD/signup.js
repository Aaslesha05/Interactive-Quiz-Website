document.getElementById('signupForm').addEventListener('submit', async function(event) 
{
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!newUsername || !newPassword) {
        errorMessage.textContent = 'Please fill in both fields!';
        errorMessage.style.display = 'block';
        return;
    }

    try 
    {
        // Send sign-up details to the backend
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: newUsername, password: newPassword })
        });

        if (response.ok) 
        {
            // Redirect to the login page after successful sign-up
            window.location.href = 'index.html';
        } 
        else 
        {
            // Show error message if sign-up fails
            const result = await response.json();
            errorMessage.textContent = result.message;
            errorMessage.style.display = 'block';
        }
    } 
    catch (error) 
    {
        errorMessage.textContent = 'Error connecting to server. Please try again later.';
        errorMessage.style.display = 'block';
    }
});
