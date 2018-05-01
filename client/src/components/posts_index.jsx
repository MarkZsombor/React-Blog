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
    const { auth }= this.props;
    return _.map(this.props.posts, (post) => {
      let cardClass = 'list-group-item card blue';
      if (post.authorId === auth._id) {
        cardClass += ' lighten-2';
      }
      return (
        <li key={post._id} className={cardClass}>
          <div className="card-content white-text">
            <Link to={`/posts/${post._id}`} className="white-text">{post.title}</Link>
            <span className="right"><Link to={`/users/${post.authorId}`} className="white-text"> By: {post.authorHandle}</Link></span>
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
  return { posts: state.posts, auth: state.auth };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
