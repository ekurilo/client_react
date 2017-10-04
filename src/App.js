import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchAllContacts} from './actions/contacts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactsActions from './actions/contacts';
import * as contactActions from './actions/contact';
import ContactList from './components/ContactList';
import Spinner from 'react-spinner-material';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    this.props.contactsActions.fetchAllContacts();
  }

  handleAdd() {
    this.props.contactActions.addContact({firstName: 'aaa', lastName: 'bbbb', tel: 'sdjshdjshjd'})
  }

  render() {

    return (
      <div className="App">
        <Spinner size={200} visible={this.props.contacts.isLoading} className="Spinner"/>
        {!this.props.contacts.isLoading
        && <ContactList contacts={this.props.contacts.contacts} actions={this.props.contactActions} />}
        <button onClick={this.handleAdd.bind(this)}>Add contact</button>
      </div>
    );
  }
}

function mapStateToProps(state)  {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = dispatch => ({
  contactsActions: bindActionCreators(contactsActions, dispatch),
  contactActions: bindActionCreators(contactActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
