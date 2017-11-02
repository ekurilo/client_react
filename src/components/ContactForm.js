import React, {Component} from 'react';
import {FlatButton, TextField} from 'material-ui';
import {NavLink} from 'react-router-dom';
import {Field, Form, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

class ContactForm extends React.Component {

  render() {
    return (
     <Form onSubmit={this.props.handleSubmit} >
       <Field name="firstName" type="text" component="input"/>
       <Field name="lastName" type="text" component="input" />
       <Field name="tel" type="text" component="input"/>
       <button type="submit">Add</button>
     </Form>
    );
  }
};

ContactForm = reduxForm({
  form: 'contactForm'})(ContactForm);
export default connect(state => ({initialValues: state.contacts.contact}))(ContactForm);
