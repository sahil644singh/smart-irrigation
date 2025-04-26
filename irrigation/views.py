# views.py

from django.shortcuts import render
import json
from .dsa.queue import SensorDataQueue
from .dsa.linked_list import LinkedList

def dashboard(request):
    # Simulated data load (replace with your actual data processing logic)
    data_list = [  # Example data
        {"timestamp": "2025-04-15", "temperature": 29, "humidity": 30, "soil_moisture": 38, "weather": "Sunny", "irrigation_zone": "Zone A"},
        {"timestamp": "2025-04-16", "temperature": 30, "humidity": 32, "soil_moisture": 40, "weather": "Cloudy", "irrigation_zone": "Zone A"},
        {"timestamp": "2025-04-17", "temperature": 28, "humidity": 35, "soil_moisture": 41, "weather": "Cloudy", "irrigation_zone": "Zone B"},
        {"timestamp": "2025-04-18", "temperature": 27, "humidity": 37, "soil_moisture": 42, "weather": "Sunny", "irrigation_zone": "Zone B"},
        {"timestamp": "2025-04-19", "temperature": 31, "humidity": 33, "soil_moisture": 39, "weather": "Windy", "irrigation_zone": "Zone C"},
    ]
    
    # Extract labels and temperature data for the chart
    labels = [entry['timestamp'] for entry in data_list]
    temperature = [entry['temperature'] for entry in data_list]

    # Pass the JSON serialized data to the template
    context = {
        'data': data_list[-1],  # Pass the latest data for summary display
        'labels_json': json.dumps(labels),  # Convert labels list to JSON
        'temperature_json': json.dumps(temperature),  # Convert temperature list to JSON
    }

    return render(request, 'dashboard.html', context)
