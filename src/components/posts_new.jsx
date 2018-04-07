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
            label="Tags"
            name="tags"
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

// All the forms in the app need unique names.
export default reduxForm({
  form: 'PostsNewForm',
})(PostsNew);
