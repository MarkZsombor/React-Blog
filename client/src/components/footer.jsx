import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row footer-btn">
          <div className="col s4 offset-s2"><Link to="/users/all" className="white-text btn-large blue darken-2">Users List</Link></div>
          <div className="col s4"><Link to="/posts/all" className="white-text btn-large blue darken-2">Posts List</Link></div>
        </div>
      </div>
    );
  }
}

export default Footer;
