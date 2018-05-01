import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers } from '../actions/index';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const { currentUser } = this.props;
    return _.map(this.props.users, (user) => {
      let cardClass = 'list-group-item card blue';
      if (user._id === currentUser._id) {
        cardClass += ' lighten-2';
      }
      return (
        <li key={user._id} className={cardClass}>
          <div className="card-content">
            <h5><Link to={`/users/${user._id}`} className="white-text">{user.userHandle}</Link></h5>
            <p className="white-text">{user.userInfo}</p>
          </div>
          <div className="card-action">
            <Link to={`/users/${user._id}`} className="black-text">User Posts and Profile</Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        <ul className="list-group">
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users, currentUser: state.auth };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);
