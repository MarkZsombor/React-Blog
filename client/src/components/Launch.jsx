import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Launch extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6"><Link to="/users/all">Users List</Link></div>
        <div className="col s6"><Link to="/posts/all">Posts List</Link></div>
        
      </div>
    );
  }
}

export default Launch;
