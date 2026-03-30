import random

def get_disaster_risk(lat: float, lon: float):
    # This is a stub for real ML prediction.
    # We factor in lat/lon in a dummy way.
    base_risk = random.randint(10, 50)
    # Just a fake multiplier for visualization
    geo_modifier = (lat + lon) % 10 if lat and lon else 0
    risk = min(100, int(base_risk + geo_modifier))
    
    return {
        "risk_level": risk,
        "prediction_model": "v3.0-prod",
        "timestamp": "2026-03-30T09:20:00Z" # Mock timestamp
    }
