import React from 'react';
import Avatar from '../assets/images/user.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-logo text-decoration-none" href="#home">TransMonitor</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <div className="navbar-search-form">
          <form action="" className="searh">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="search" name="search" id="search" placeholder="Search..." />
          </form>
        </div>
        <div className="navbar-link">
          <a href="#support">Support</a>
          <a href="#faq">FAQ</a>
          <a href="#bell">
            <i className="fa fa-bell-o" aria-hidden="true"></i>
            <span className="badge">8</span>
          </a>
        </div>
        <div className="navbar-user">
          <h4 className="navbar-user-name">
            <span>Hello</span>
            <span>Oluwaleke Ojo</span>
          </h4>
          <img src={Avatar} alt="Oluwaleke Ojo" />
        </div>
      </div>
    </nav>
  )
}

export default Header;
