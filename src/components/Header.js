import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="container">
      <div className="header-left">
        <i className="fas fa-bars"></i>
        <h2>Google Tasks</h2>
      </div>
      <div className="header-right">
        <div className="input-wrp">
          <i class="fas fa-search"></i>
          <input className="search-input" placeholder="Search in task list" />
        </div>
        <div className="user-avatar">
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
