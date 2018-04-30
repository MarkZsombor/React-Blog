import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return (
        <li key={post._id} className="list-group-item card blue">
          <div className="card-content white-text">
            <Link to={`/posts/${post._id}`} className="white-text">{post.title}</Link>
            <span> By: <Link to={`/users/${post.authorId}`} className="white-text">{post.authorHandle}</Link></span>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
