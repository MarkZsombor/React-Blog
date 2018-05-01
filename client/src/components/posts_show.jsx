import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      if (auth._id === post.authorId) {
        return (
          <button
            className="col s3 offset-s2 btn red"
            onClick={this.onDeleteClick.bind(this)}
          >
          Delete Post
          </button>
        );
      }
    }
  }

  renderUpdateButton() {
    const { post } = this.props;
    const { auth } = this.props;
    if (auth && post) {
      if (auth._id === post.authorId) {
        return (
          <Link
            className="col s3 offset-s2 btn blue darken-2"
            to={`/posts/update/${post._id}`}
          >
            Update Post
          </Link>
        );
      }
    }
  }

  renderImage(post) {
    if (post.imageURL && post.imageURL !== "null") {
      return (
        <img src={post.imageURL} alt={post.title} style={{ height: '300px' }} />
      );
    }
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>...Loading...</div>;
    }
    let postDate = post.createDate.slice(0, 10);
    return (
      <div>
        <div className="row style={{ margin: '10px' }}">
          {this.renderUpdateButton()}
          {this.renderDeleteButton()}
        </div>
        <h3 className="post-title">{post.title}</h3>
        <h5 className="post-author"><Link to={`/users/${post.authorId}`}>By {post.authorHandle}</Link></h5>
        <h5 className="post-categories">Categories: {post.categories}</h5>
        {this.renderImage(post)}
        <p className="post-content" style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
        <p className="post-date">Posted on: {postDate}</p>
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
