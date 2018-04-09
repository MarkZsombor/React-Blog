import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-fixed-top">
        <Link to="/">A Blog Site</Link>
      </div>
    );
  }
}

export default NavBar;
