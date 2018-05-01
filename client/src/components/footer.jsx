import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="row" style={{ margin: '10px' }}>
        <div className="col s3 offset-s3"><Link to="/users/all" className="white-text btn blue darken-2">Users List</Link></div>
        <div className="col s3"><Link to="/posts/all" className="white-text btn blue darken-2">Posts List</Link></div>
      </div>
    );
  }
}

export default Footer;
