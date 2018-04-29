import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';


const renderField = (field) => {
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
};

// fix this maybe?
