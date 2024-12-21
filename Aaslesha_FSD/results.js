const params = new URLSearchParams(window.location.search);
const score = parseInt(params.get('score'));
const total = parseInt(params.get('total'));
const percentage = parseFloat(((score / total) * 100).toFixed(2));

// Calculate correct and incorrect answers
const correct = score;
const incorrect = (total - score); // Either from params or calculated


// Display the score and percentage
document.getElementById('score').innerText = `Score: ${score} / ${total}`;
document.getElementById('percentage').innerText = `Percentage: ${percentage}%`;
document.getElementById('correct-incorrect').innerText = `Correct: ${score}, Incorrect: ${incorrect}`;

// Dynamic badges
let badgeIcon = '';
let badgeText = '';
let badgeMessage = '';

if (percentage >= 80) {
    badgeIcon = 'gold1.png';
    badgeText = '🥇 Excellent!';
    badgeMessage = 'You’re a star performer! Keep up the fantastic work.';
} else if (percentage >= 50) {
    badgeIcon = 'silver1.png';
    badgeText = '🥈 Good Job!';
    badgeMessage = 'Well done! With a little more effort, you’ll ace it.';
} else {
    badgeIcon = 'bronze1.png';
    badgeText = '🥉 Keep Trying!';
    badgeMessage = 'Don’t give up! Practice makes perfect.';
}

// Set badge content
document.getElementById('badge-icon').src = badgeIcon;
document.getElementById('badge').innerText = badgeText;
document.getElementById('badge-message').innerText = badgeMessage;

// Score Bar Chart
const ctxBar = document.getElementById('scoreGraph').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Your Score'],
        datasets: [{
            label: 'Score',
            data: [score],
            backgroundColor: 'rgba(46, 189, 89, 0.6)',
            borderColor: 'rgb(3, 54, 54)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: total
            }
        }
    }
});

// Percentage Pie Chart
const ctxPie = document.getElementById('percentageGraph').getContext('2d');
new Chart(ctxPie, {
    type: 'doughnut',
    data: {
        labels: ['Correct', 'Incorrect'],
        datasets: [{
            data: [correct, incorrect],
            backgroundColor: ['#2ebd59', '#e63946'],
        }]
    }
});
