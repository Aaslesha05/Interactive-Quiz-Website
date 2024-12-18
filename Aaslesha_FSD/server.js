const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock user database
const users = [
    { username: 'Tejesh', password: 'Tejesh@2005' },
    { username: 'admin', password: 'admin123' }
];

// Route to handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        res.status(200).json({ message: 'Login Successful!' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Route to handle sign-up
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        res.status(400).json({ message: 'Username already taken.' });
    } else {
        users.push({ username, password });
        res.status(200).json({ message: 'Sign-up successful!' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
