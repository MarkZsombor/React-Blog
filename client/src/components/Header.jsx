import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key="add-post"><Link to="/posts/new">Add a Post</Link></li>,
          <li key="logout"><a href="/api/logout">Logout</a></li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="blue nav-wrapper">
          <Link className="left brand-logo" to="/">  Blogtastic</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
