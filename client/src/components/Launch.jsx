import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Launch extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3 offset-s3"><Link to="/users/all" className="white-text btn purple">Users List</Link></div>
        <div className="col s3"><Link to="/posts/all" className="white-text btn purple">Posts List</Link></div>
        
      </div>
    );
  }
}

export default Launch;
