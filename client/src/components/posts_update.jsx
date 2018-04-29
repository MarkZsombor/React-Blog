import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePost, fetchPost } from '../actions/index';

class PostsUpdate extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.updatePost(values, id, () => {
      console.log('im in the update post callback');
      // TODO Update to new post
      this.props.history.push('/');
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
          // this will map all the event handlers to the Field
          {...field.input}
        />
      </div>
    );
  }

  render() {
    // This function is available from the reduxForm function at end of file.
    const { handleSubmit } = this.props;
    console.log('props', this.props);
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Post Title"
            name="title"
            type="input"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            type="input"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            type="textarea"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Update</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

// All the forms in the app need unique names.
export default reduxForm({ form: 'PostsUpdateForm' })(connect(null, { updatePost, fetchPost })(PostsUpdate));
