import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import {connect} from 'react-redux';
import {addContact, newContact} from '../actions/contacts';

class AddContact extends React.Component {

  state = {
    redirect: false
  }

  handleAdd = (contact) => {
    this.props.addContact(contact)
      .then(response => this.setState({ redirect:true }))
  }

  buttonLabels = {
    cancel: 'Cancel',
    save: 'Add'
  };

  render() {
    return (
      <div>
        {
          this.state.redirect ?
            <Redirect to="/"/> :
            <ContactForm addContact={this.handleAdd} buttonLabels={this.buttonLabels}/>
        }

      </div>
    );
  }
}

export default connect(state => state, {addContact, newContact})(AddContact);


