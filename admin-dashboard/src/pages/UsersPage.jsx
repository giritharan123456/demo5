import React from 'react';

const UsersPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="page-title">User <span className="glow-text-cyan">Management</span></h1>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Users table implementation goes here...</p>
      </div>
    </div>
  );
};

export default UsersPage;
