import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Mock Routes
app.use('/api/auth', (req, res) => res.json({ msg: "Auth Router" }));
app.use('/api/users', (req, res) => res.json({ msg: "Users Router" }));
app.use('/api/alerts', (req, res) => res.json({ msg: "Alerts Router" }));
app.use('/api/location', (req, res) => res.json({ msg: "Location Router" }));
app.use('/api/ai', (req, res) => res.json({ msg: "AI Predict Router" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on port ${PORT}`);
});
