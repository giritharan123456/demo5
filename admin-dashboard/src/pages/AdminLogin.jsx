import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
      <div className="glass-panel" style={{ padding: '3rem', width: '400px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '2rem' }}>AntiGravity <span className="glow-text-cyan">AI</span></h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input type="text" placeholder="Username" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'rgba(0,0,0,0.3)', color: 'var(--text-primary)' }} required />
          <input type="password" placeholder="Password" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'rgba(0,0,0,0.3)', color: 'var(--text-primary)' }} required />
          <button type="submit" style={{ padding: '1rem', borderRadius: '8px', background: 'var(--accent-cyan)', color: 'var(--bg-primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
