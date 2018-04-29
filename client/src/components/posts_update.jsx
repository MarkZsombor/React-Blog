import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePost } from '../actions/index';

class PostsUpdate extends Component {
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.fetchPost(id);
  // }

  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.updatePost(values, id, () => {
      this.props.history.push(`/posts/${id}`);
    });
  }

  renderField(field) {
    const className = 'form-group';
    console.log('field', field);
    return (
      <div className={className}>
        <label>{field.label}</label>
        <field.type
          className="form-control"
          type="text"
          // this will map all the event handlers to the Field
          {...field.input}
        />
      </div>
    );
  }

  render() {
    // This function is available from the reduxForm function at end of file.
    const { handleSubmit } = this.props;
    console.log('props', this.props.initialValues);
    // if (this.props.post) {
    //   const { post } = this.props;
      return (
        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label={this.props.initialValues.title}
              name="title"
              type="input"
              component={this.renderField}
            />
            <Field
              label={this.props.initialValues.categories}
              name="categories"
              type="input"
              component={this.renderField}
            />
            <Field
              label={this.props.initialValues.content}
              name="content"
              type="textarea"
              component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Update</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </form>
        </div>
      );
    // }
    // return null;
  }
}

function mapStateToProps({ posts }, ownProps) {
  console.log('posts input', posts);
  let post = posts[ownProps.match.params.id];
  console.log(post, 'post');
  if (post) {
    return {
      initialValues: {
        title: post.title,
        categories: post.categories,
        content: post.content,
      },
    };
  }
  return { initialValues: {} };
}

// function mapStateToProps({ posts }, ownProps) {
//   return { post: posts[ownProps.match.params.id] };
// }

// All the forms in the app need unique names.
// export default reduxForm({ form: 'PostsUpdateForm', enableReinitialize: true })(connect(mapStateToProps, { updatePost })(PostsUpdate));
export default reduxForm({ form: 'PostsUpdateForm', enableReinitialize: true }, mapStateToProps)(connect(mapStateToProps, { updatePost })(PostsUpdate));
