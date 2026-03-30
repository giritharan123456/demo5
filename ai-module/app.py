from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from models.disaster_prediction import get_disaster_risk
from models.crowd_detection import get_crowd_density

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
    result = get_disaster_risk(data.latitude, data.longitude)
    return {
        "status": "success",
        "risk_level": result["risk_level"],
        "prediction_model": result["prediction_model"],
        "action": "Trigger Alert" if result["risk_level"] > 80 else "Normal"
    }

@app.post("/predict/crowd")
def predict_crowd(data: LocationData):
    result = get_crowd_density(data.latitude, data.longitude)
    return {
        "status": "success",
        "density_level": result["density_level"],
        "prediction_model": result["prediction_model"]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
