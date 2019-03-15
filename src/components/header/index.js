import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <NavLink className="navbar-brand" to='/'>Schedule an Event</NavLink>
        <NavLink className="navbar-brand" to='/events'>Display Events</NavLink>
      </nav>
    );
  }
}

export default Header;
