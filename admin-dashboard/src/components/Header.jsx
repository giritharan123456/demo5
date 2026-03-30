import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header glass-panel">
      <div className="header-left">
        <button className="icon-button mobile-menu-btn">
          <Menu size={24} />
        </button>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search alerts, areas, users..." />
        </div>
      </div>
      
      <div className="header-right">
        <button className="icon-button notification-btn">
          <Bell size={22} />
          <span className="pulse-dot"></span>
        </button>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="avatar" />
          <div className="user-info">
            <span className="user-name">Alex M.</span>
            <span className="user-role glow-text-cyan">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
