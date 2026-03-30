import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Users, AlertTriangle, CloudRain } from 'lucide-react';
import './Dashboard.css';

const data = [
  { name: '10:00', risk: 20 },
  { name: '11:00', risk: 40 },
  { name: '12:00', risk: 35 },
  { name: '13:00', risk: 50 },
  { name: '14:00', risk: 65 },
  { name: '15:00', risk: 45 },
  { name: '16:00', risk: 30 }
];

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
  <div className={`stat-card glass-panel ${colorClass}`}>
    <div className="stat-header">
      <h3 className="stat-title">{title}</h3>
      <div className="stat-icon-wrapper">
        <Icon size={24} className="stat-icon" />
      </div>
    </div>
    <div className="stat-value">{value}</div>
    <div className="stat-subtext">{subtext}</div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="page-title">Global <span className="glow-text-cyan">Overview</span></h1>
        <p className="page-subtitle">Real-time disaster and crowd monitoring</p>
      </div>

      <div className="stats-grid">
        <StatCard title="Active Alerts" value="12" subtext="+2 since last hour" icon={AlertTriangle} colorClass="red-glow" />
        <StatCard title="Total Users" value="1,240" subtext="Online now: 452" icon={Users} colorClass="cyan-glow" />
        <StatCard title="System Load" value="45%" subtext="Healthy status" icon={Activity} colorClass="green-glow" />
        <StatCard title="Weather Risk" value="High" subtext="Monsoon detected" icon={CloudRain} colorClass="yellow-glow" />
      </div>

      <div className="charts-grid">
        <div className="chart-card glass-panel">
          <h3 className="chart-card-title">Prediction Risk Index (24h)</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8a2be2" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8a2be2" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15,15,23,0.9)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: '12px' }} 
                  itemStyle={{ color: '#00f0ff' }}
                />
                <Area type="monotone" dataKey="risk" stroke="#8a2be2" strokeWidth={3} fillOpacity={1} fill="url(#colorRisk)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card glass-panel">
          <h3 className="chart-card-title">Recent Activity Feed</h3>
          <ul className="activity-list">
            <li className="activity-item">
              <span className="activity-time">10:42 AM</span>
              <span className="activity-dot red"></span>
              <p className="activity-text">AI module detected crowd anomaly in Zone A.</p>
            </li>
            <li className="activity-item">
              <span className="activity-time">10:15 AM</span>
              <span className="activity-dot yellow"></span>
              <p className="activity-text">System sent automated warning to 54 users.</p>
            </li>
            <li className="activity-item">
              <span className="activity-time">09:30 AM</span>
              <span className="activity-dot cyan"></span>
              <p className="activity-text">Daily snapshot backed up to AWS.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
