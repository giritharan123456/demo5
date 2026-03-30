# AntiGravity AI

MERN Stack Mobile Application Structure + AI Predictor.

## Components
1. **mobile-app/**: React Native Frontend (Expo)
2. **admin-dashboard/**: React.js Web Admin Panel (Vite + Recharts)
3. **backend/**: Node.js + Express Backend
4. **ai-module/**: Python FastAPI AI Component

## Flow
1. Mobile App sends user location to Backend API.
2. Backend queries the AI prediction module at `/predict/disaster`.
3. AI returns a calculated risk level.
4. Admin Dashboard monitors live data and active alerts.
