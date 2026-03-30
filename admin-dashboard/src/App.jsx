import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import AlertsPage from './pages/AlertsPage';
import UsersPage from './pages/UsersPage';
import MapMonitor from './pages/MapMonitor';
import './App.css';

// A simple layout wrapper for authenticated pages
const AppLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        
        {/* Protected Routes (mock layout) */}
        <Route path="/" element={<AppLayout><Navigate to="/dashboard" replace /></AppLayout>} />
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/alerts" element={<AppLayout><AlertsPage /></AppLayout>} />
        <Route path="/users" element={<AppLayout><UsersPage /></AppLayout>} />
        <Route path="/map" element={<AppLayout><MapMonitor /></AppLayout>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
