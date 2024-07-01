document.addEventListener('DOMContentLoaded', function() {
    // Sample data for each chart
    const productCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
    const productSalesData = [50, 60, 70, 80, 90];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const revenueData = [1000, 1200, 1100, 1300, 1400, 1500];

    const marketShareLabels = ['Category A', 'Category B', 'Category C'];
    const marketShareData = [40, 30, 30];

    // Bar chart: Product Sales
    const productSalesCtx = document.getElementById('productSalesChart').getContext('2d');
    new Chart(productSalesCtx, {
        type: 'bar',
        data: {
            labels: productCategories,
            datasets: [{
                label: 'Product Sales',
                data: productSalesData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
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
    });

    // Line chart: Revenue Trends
    const revenueTrendsCtx = document.getElementById('revenueTrendsChart').getContext('2d');
    new Chart(revenueTrendsCtx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Revenue Trends',
                data: revenueData,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Pie chart: Market Share Distribution
    const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
    new Chart(marketShareCtx, {
        type: 'pie',
        data: {
            labels: marketShareLabels,
            datasets: [{
                label: 'Market Share',
                data: marketShareData,
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
