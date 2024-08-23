// Initial datasets
const datasets = {
    1: {
        bar: [65, 59, 80, 81, 56, 55, 40],
        line: [28, 48, 40, 19, 86, 27, 90],
        pie: [10, 20, 30, 40]
    },
    2: {
        bar: [45, 79, 60, 91, 36, 75, 60],
        line: [38, 58, 50, 29, 76, 37, 100],
        pie: [15, 25, 35, 25]
    }
};

// Function to generate random colors for pie chart
function getRandomColors(length) {
    const colors = [];
    for (let i = 0; i < length; i++) {
        colors.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`);
    }
    return colors;
}

// Chart configuration
const config = {
    bar: {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Bar Chart Data',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
                data: datasets[1].bar,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    },
    line: {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Line Chart Data',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(153, 102, 255, 0.4)',
                hoverBorderColor: 'rgba(153, 102, 255, 1)',
                data: datasets[1].line,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    },
    pie: {
        type: 'pie',
        data: {
            labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
            datasets: [{
                label: 'Pie Chart Data',
                backgroundColor: getRandomColors(4),
                data: datasets[1].pie,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
};

// Render the charts
let barChart, lineChart, pieChart;

window.onload = function() {
    const barCtx = document.getElementById('barChart').getContext('2d');
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    
    barChart = new Chart(barCtx, config.bar);
    lineChart = new Chart(lineCtx, config.line);
    pieChart = new Chart(pieCtx, config.pie);
};

// Function to switch datasets
function switchDataset(datasetNumber) {
    barChart.data.datasets[0].data = datasets[datasetNumber].bar;
    barChart.update();
    
    lineChart.data.datasets[0].data = datasets[datasetNumber].line;
    lineChart.update();
    
    pieChart.data.datasets[0].data = datasets[datasetNumber].pie;
    pieChart.data.datasets[0].backgroundColor = getRandomColors(datasets[datasetNumber].pie.length);
    pieChart.update();
}

