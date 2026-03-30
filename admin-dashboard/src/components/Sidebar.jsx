import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, AlertCircle, Users, Map, LogOut } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-brand">
        <div className="brand-logo">
          <span className="logo-icon glow-text-cyan">△</span>
        </div>
        <h2 className="brand-name">AntiGravity <span className="glow-text-cyan">AI</span></h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/alerts" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <AlertCircle size={20} />
              <span>Alerts</span>
              <span className="badge badge-red">3</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <Users size={20} />
              <span>Users</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/map" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <Map size={20} />
              <span>Map Monitor</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/login" className="nav-link logout-link">
          <LogOut size={20} />
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
