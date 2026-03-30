import React from 'react';

const AlertsPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="page-title">Real-time <span className="glow-text-red">Alerts</span></h1>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Alerts table implementation goes here...</p>
      </div>
    </div>
  );
};

export default AlertsPage;
