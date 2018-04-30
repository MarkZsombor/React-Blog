import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index';

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPostsList() {
    const { posts } = this.props;
    const { authorId } = this.props;
    const userPosts = [];
    if (posts) {
      for (let post in posts) {
        if (posts[post].authorId === authorId) {
          userPosts.push(posts[post]);
        }
      }
      if (!userPosts.length) {
        return (<li>No Posts by User</li>);
      }
      return _.map(userPosts, (post) => {
        return (
          <li key={post._id} className="list-group-item">
            <Link to={`/posts/${post._id}`}>
              {post.title}
            </Link>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h1>User Posts</h1>
        <ul className="list-group">
          {this.renderPostsList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(UserProfile);
