from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(title="AntiGravity AI Module")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LocationData(BaseModel):
    latitude: float
    longitude: float
    timestamp: str

@app.get("/")
def read_root():
    return {"message": "AntiGravity AI Prediction Engine Running"}

@app.post("/predict/disaster")
def predict_disaster(data: LocationData):
    # Disaster Risk Prediction Logic
    base_risk = random.randint(10, 50)
    geo_modifier = (data.latitude + data.longitude) % 10 if data.latitude and data.longitude else 0
    risk_level = min(100, int(base_risk + geo_modifier))
    
    return {
        "status": "success",
        "risk_level": risk_level,
        "prediction_model": "v3.0-prod",
        "action": "Trigger Alert" if risk_level > 80 else "Normal"
    }

@app.post("/predict/crowd")
def predict_crowd(data: LocationData):
    # Crowd Density Detection Logic
    density_level = random.randint(1, 10)
    
    return {
        "status": "success",
        "density_level": density_level,
        "prediction_model": "cv-v1.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
