import React, { Component } from 'react';
import '../App.css';
import {fetchAllContacts} from '../actions/contacts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactsActions from '../actions/contacts';
import ContactList from '../components/ContactList';
import Spinner from 'react-spinner-material';
import {FlatButton} from 'material-ui';
import {NavLink} from 'react-router-dom';

class Main extends Component {

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
        <NavLink to="/add"> <FlatButton label="Add contact" primary={true} onClick={() => this.props.contactsActions.newContact()}/></NavLink>
        <Spinner size={200} visible={this.props.contacts.isLoading} className="Spinner"/>
        {!this.props.contacts.isLoading
        && <ContactList contacts={this.props.contacts.contacts} actions={this.props.contactsActions} />}

      </div>
    );
  }
}

function mapStateToProps(state)  {
  return {
    contacts: state.contacts,
    contact: state.contact
  }
}

const mapDispatchToProps = dispatch => ({
  contactsActions: bindActionCreators(contactsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
