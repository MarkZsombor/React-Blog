import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  renderDeleteButton() {
    const { post } = this.props;
    const { auth } = this.props;
    if (auth && post) {
      return (
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
      );
    }
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>...Loading...</div>;
    }

    return (
      <div>
        {this.renderDeleteButton()}
        <h3 className="post-title">{post.title}</h3>
        <h4 className="post-author">By {post.authorHandle}</h4>
        <h4 className="post-categories">Categories: {post.categories}</h4>
        <p className="post-content">{post.content}</p>
      </div>
    );
  }
}

// second argument is the props to apply to the function
// ownProps will refer to the props of the component that calls the function
// Allows for getting just the Post with correct id from state.
function mapStateToProps({ posts, auth }, ownProps) {
  return { post: posts[ownProps.match.params.id], auth };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
