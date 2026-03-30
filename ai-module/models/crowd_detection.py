import random

def get_crowd_density(lat: float, lon: float):
    # Dummy crowd detection.
    density = random.randint(1, 10) # people per sqm
    
    return {
        "density_level": density,
        "prediction_model": "cv-v1.0",
        "timestamp": "2026-03-30T09:20:00Z" # Mock timestamp
    }
