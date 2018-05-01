import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/index';
import UserPosts from './User_Posts';

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUpdateButton(user) {
    const { auth } = this.props;
    if (auth) {
      if (auth._id === user._id) {
        return (
          <Link
            className="btn blue darken-2"
            to={`/users/update/${user._id}`}
          >
            Update User Info
          </Link>
        );
      }
    }
  }

  render() {
    const { users } = this.props;
    const { id } = this.props.match.params;
    let user = [];
    let profilePicture = '';
    if (users) {
      user = users[id];
      if (!user.picture) {
        profilePicture = 'https://i.pinimg.com/originals/0e/ca/cf/0ecacf1245c5e8c723414ea1a19407cf.jpg';
      } else {
        profilePicture = user.picture;
      }
    }
    if (!user) {
      return <div>...Loading...</div>;
    }
    return (
      <div>
        <h1>{user.userHandle}</h1>
        <img src={profilePicture} alt="User Profile" style={{ height: '150px' }} />
        <p>{user.userInfo}</p>
        {this.renderUpdateButton(user)}
        <UserPosts authorId={id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users, auth: state.auth };
}

export default connect(mapStateToProps, { fetchUsers })(UserProfile);
