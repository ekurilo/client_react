import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchAllContacts} from './actions/contacts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntryActions from './actions/contacts';
import ContactList from './components/ContactList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    this.props.actions.fetchAllContacts();
  }

  render() {

    return (
      <div className="App">
        {this.props.contacts.contactsList.isLoading && <h2>Loading...</h2>}
        {!this.props.contacts.contactsList.isLoading
        && this.props.contacts.contactsList.contacts.length > 0
        && <ContactList contacts={this.props.contacts.contactsList.contacts} />}
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
  actions: bindActionCreators(EntryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
