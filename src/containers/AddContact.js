import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import {connect} from 'react-redux';
import {addContact, newContact} from '../actions/contacts';

class AddContact extends React.Component {

  handleAdd(contact) {
    this.props.addContact(contact);
  }

  buttonLabels = {
    cancel: 'Cancel',
    save: 'Add'
  };

  render() {
    return (
      <div>
        {
          this.props.contacts.isAdded ?
            <Redirect to="/"/> :
            <ContactForm onSubmit={this.handleAdd.bind(this)} buttonLabels={this.buttonLabels}/>
        }

      </div>
    );
  }
}

export default connect(state => state, {addContact, newContact})(AddContact);


