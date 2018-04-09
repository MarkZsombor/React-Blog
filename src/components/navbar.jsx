import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-fixed-top">
        <Link to="/">My Blog Site</Link>
      </div>
    );
  }
}

export default NavBar;
