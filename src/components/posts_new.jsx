import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    // This makes touched and error vars from field.meta
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          // this will map all the event handlers to the Field
          {...field.input}
        />
        <div className="text-help">
          {/* meta comes from redux-forms */}
          {touched ? error : ''}
        </div>
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
            label="Post Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // Validate the values
  if (!values.title) {
    errors.title = 'Posts need a title';
  }
  if (!values.categories) {
    errors.categories = 'Please add one or more categories';
  }
  if (!values.content) {
    errors.content = 'A post needs some content';
  }
  // Return any possible errors
  // If errors is empty, then form is good to go
  return errors;
}

// All the forms in the app need unique names.
export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(connect(null, { createPost })(PostsNew));
