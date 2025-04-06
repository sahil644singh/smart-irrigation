        // Initialize Chart
        const ctx = document.getElementById('waterUsageChart').getContext('2d');
        let waterUsageChart;
        
        function initChart() {
            waterUsageChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Water Usage (Gallons)',
                        data: [12, 19, 8, 15, 12, 13, 9],
                        backgroundColor: '#4CAF50',
                        borderColor: '#2E7D32',
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
        }

        // Toggle Zone Active State
        function toggleZone(element, zoneId) {
            const zones = document.querySelectorAll('.zone');
            zones.forEach(zone => {
                zone.classList.remove('active');
            });
            element.classList.add('active');
            showNotification(`Zone ${zoneId} selected`);
        }

        // Update Chart Data
        function updateChart(timeframe) {
            let labels, data;
            
            if (timeframe === 'daily') {
                labels = ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM', '11PM'];
                data = [2, 1, 5, 3, 8, 4, 2];
            } else if (timeframe === 'weekly') {
                labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                data = [12, 19, 8, 15, 12, 13, 9];
            } else if (timeframe === 'monthly') {
                labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
                data = [45, 52, 38, 41];
            }
            
            waterUsageChart.data.labels = labels;
            waterUsageChart.data.datasets[0].data = data;
            waterUsageChart.update();
            showNotification(`Chart updated to ${timeframe} view`);
        }

        // Update Moisture Levels
        function updateMoistureLevels() {
            const moistureBars = document.querySelectorAll('.moisture-level');
            const moistureValues = document.querySelectorAll('.moisture-zone span:last-child');
            
            moistureBars.forEach((bar, index) => {
                const randomValue = Math.floor(Math.random() * 30) + 40; // Random between 40-70%
                bar.style.width = `${randomValue}%`;
                moistureValues[index].textContent = `${randomValue}%`;
            });
            
            showNotification('Moisture data refreshed');
        }

        // Show Notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationMessage = document.getElementById('notification-message');
            
            notificationMessage.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initChart();
            
            // Simulate random data updates
            setInterval(() => {
                const randomZoneIndex = Math.floor(Math.random() * 4);
                const moistureBars = document.querySelectorAll('.moisture-level');
                const moistureValues = document.querySelectorAll('.moisture-zone span:last-child');
                
                const currentValue = parseInt(moistureValues[randomZoneIndex].textContent);
                const change = Math.floor(Math.random() * 5) - 2; // Random change between -2 and +2
                const newValue = Math.max(30, Math.min(95, currentValue + change));
                
                moistureBars[randomZoneIndex].style.width = `${newValue}%`;
                moistureValues[randomZoneIndex].textContent = `${newValue}%`;
            }, 5000);
        });
  