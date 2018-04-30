import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/index';
import UserPosts from './User_Posts';

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    const { id } = this.props.match.params;
    let user = [];
    if (users) {
      user = users[id];
      // console.log('user', user, typeof user, Object.keys(user));
    }
    if (!user) {
      return <div>...Loading...</div>;
    }
    return (
      <div>
        <h1>{user.userHandle}</h1>
        <UserPosts authorId={id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserProfile);
