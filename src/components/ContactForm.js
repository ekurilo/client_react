import React, {Component} from 'react';
import {FlatButton, TextField} from 'material-ui';
import {NavLink} from 'react-router-dom';
import {Field, Form, reduxForm} from 'redux-form';

class ContactForm extends React.Component {

  render() {
    return (
     <Form onSubmit={this.props.handleSubmit(this.props.addContact)} >
       <Field name="firstName" type="text" component="input"/>
       <Field name="lastName" type="text" component="input" />
       <Field name="tel" type="text" component="input"/>
       <button type="submit">Add</button>
     </Form>
    );
  }
};

export default reduxForm({
  form: 'contactForm'})(ContactForm)
