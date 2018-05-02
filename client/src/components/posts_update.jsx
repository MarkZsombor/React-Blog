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
    return (
      <div className={className}>
        <label>{field.label}</label>
        <field.type
          className="form-control"
          type="text"
          placeholder={field.placeholder}
          // this will map all the event handlers to the Field
          {...field.input}
        />
      </div>
    );
  }

  render() {
    // This function is available from the reduxForm function at end of file.
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label={this.props.initialValues.title}
            name="title"
            type="input"
            placeholder="Post Title"
            component={this.renderField}
          />
          <Field
            label={this.props.initialValues.categories || 'Please add some Categories'}
            name="categories"
            type="input"
            placeholder="Categories"
            component={this.renderField}
          />
          <Field
            label={this.props.initialValues.imageURL || 'Please add a image URL'}
            name="image"
            type="input"
            placeholder="Image URL, enter none to remove image"
            component={this.renderField}
          />
          <Field
            label={this.props.initialValues.content}
            name="content"
            type="textarea"
            component={this.renderField}
          />
          <button type="submit" className="waves-effect waves-light btn blue darken-2">Update</button>
          <Link to="/" className="waves-effect waves-light btn red">Cancel</Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  let post = posts[ownProps.match.params.id];
  if (post) {
    return {
      initialValues: {
        title: post.title,
        categories: post.categories,
        imageURL: post.imageURL,
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
