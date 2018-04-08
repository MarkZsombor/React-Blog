import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          // this will map all the event handlers to the Field
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
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
})(PostsNew);
