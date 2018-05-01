// Contains list of all comments for given post
// Logged in Users can see/use an add comment button
// Clicking the add comment button will display the create-comment-form component.

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchComments } from '../actions/index';

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderPosts() {
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
          <li key={post._id} className="list-group-item card blue">
            <div className="card-content">
              <Link to={`/posts/${post._id}`} className=" white-text">
                {post.title}
              </Link>
            </div>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <button>Add Comment</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);
