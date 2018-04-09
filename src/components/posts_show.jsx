import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>...Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{post.title}</h3>
        <h4>Categories: {post.categories}</h4>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps will refer to the props of the component that calls the function
// Allows for getting just the Post with correct id from state.
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
