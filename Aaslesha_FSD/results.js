// Get the score, total, and percentage from URL parameters
const params = new URLSearchParams(window.location.search);
const score = parseInt(params.get('score'));
const total = parseInt(params.get('total'));
const percentage = parseFloat(params.get('percentage'));

// Display the score and percentage
document.getElementById('score').innerText = `Score: ${score} / ${total}`;
document.getElementById('percentage').innerText = `Percentage: ${percentage}%`;

// Display a badge based on the percentage
let badge = '';
if (percentage >= 80) {
    badge = '🥇 Excellent!';
} else if (percentage >= 50) {
    badge = '🥈 Good Job!';
} else {
    badge = '🥉 Keep Trying!';
}
document.getElementById('badge').innerText = `Badge: ${badge}`;

// Creating the bar chart using Chart.js
const ctx = document.getElementById('scoreGraph').getContext('2d');

// Data for the bar chart
const chartData = {
    labels: ['Your Score'],
    datasets: [{
        label: 'Score',
        data: [score],
        backgroundColor: ['rgba(46, 189, 89, 0.2)'],
        borderColor: ['rgb(3, 54, 54)'],
        borderWidth: 1
    }]
};

// Create the chart
const scoreChart = new Chart(ctx, {
    type: 'bar', // The chart type (bar chart)
    data: chartData, // The data to display
    options: {
        scales: {
            y: {
                beginAtZero: true, // Ensures the y-axis starts at zero
                max: total, 
            }
        }
    }
});