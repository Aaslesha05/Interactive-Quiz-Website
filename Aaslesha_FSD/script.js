document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username && password) {
      alert('Login Successful! Redirecting to Quiz...');
      window.location.href = 'quiz.html';
  } else {
      alert('Please fill in both fields!');
  }
});
