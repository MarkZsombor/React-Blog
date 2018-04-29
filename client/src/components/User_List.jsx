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
    console.log('props in render user', this.props);
    return _.map(this.props.users, (user) => {
      return (
        <li key={user._id} className="list-group-item">
          {/* <Link to={`/users/${user._id}`}> */}
          {user.userHandle}
          {/* </Link> */}
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
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);
