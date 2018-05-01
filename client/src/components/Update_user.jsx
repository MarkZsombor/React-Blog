import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index';

class UserUpdate extends Component {
  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.updateUser(values, id, () => {
      this.props.history.push(`/users/${id}`);
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
            label={this.props.initialValues.userHandle}
            name="userHandle"
            type="input"
            placeholder="User Handle"
            component={this.renderField}
          />
          <Field
            label={this.props.initialValues.categories || 'Please add some information about yourself'}
            name="userInfo"
            type="input"
            placeholder="What do you want readers to know about you?"
            component={this.renderField}
          />
          <button type="submit" className="btn blue darken-2">Update</button>
          <Link to="/" className="btn red">Cancel</Link>
        </form>
      </div>
    );
    // }
    // return null;
  }
}

function mapStateToProps({ users }, ownProps) {
  const user = users[ownProps.match.params.id];
  if (user) {
    return {
      initialValues: {
        userHandle: user.userHandle,
        userInfo: user.userInfo,
      },
    };
  }
  return { initialValues: {} };
}


// All the forms in the app need unique names.
export default reduxForm({ form: 'UserUpdateForm', enableReinitialize: true }, mapStateToProps)(connect(mapStateToProps, { updateUser })(UserUpdate));
