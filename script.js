document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('soilChart').getContext('2d');
    const soilChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['pH', 'Nitrogen', 'Phosphorus', 'Potassium'],
            datasets: [{
                label: 'Soil Quality',
                data: [6.5, 0.5, 0.3, 2.0], // Example data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
document.getElementById('soil-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const soilName = document.getElementById('soil-name').value;
    const soilType = document.getElementById('soil-type').value;
    const atmosphericPressure = document.getElementById('atmospheric-pressure').value;
    const moistureContent = document.getElementById('moisture-content').value;
    const nitrogenChecked = document.getElementById('nitrogen').checked;
    const phosphorusChecked = document.getElementById('phosphorus').checked;
    const potassiumChecked = document.getElementById('potassium').checked;

    // Process and display the results
    const results = {
        soilName: soilName,
        soilType: soilType,
        atmosphericPressure: atmosphericPressure,
        moistureContent: moistureContent,
        elements: {
            nitrogen: nitrogenChecked,
            phosphorus: phosphorusChecked,
            potassium: potassiumChecked
        }
    };

    console.log(results);

    // Update the chart with new data
    updateChart(results);
});

function updateChart(data) {
    const ctx = document.getElementById('soilChart').getContext('2d');
    const soilChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nitrogen', 'Phosphorus', 'Potassium'],
            datasets: [{
                label: 'Soil Quality',
                data: [data.elements.nitrogen ? 1 : 0, data.elements.phosphorus ? 1 : 0, data.elements.potassium ? 1 : 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
});