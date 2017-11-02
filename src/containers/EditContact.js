
import React, {Component} from 'react';
import contact from '../reducers/contact';
import {connect} from 'react-redux';
import {fetchContact, updateContact} from '../actions/contacts';
import Spinner from 'react-spinner-material';
import ContactForm from '../components/ContactForm';
import {Redirect} from 'react-router-dom';

class EditContact extends Component {
  state = {
    loaded: false,
    redirect: false
  };

  componentDidMount () {
    this.props.fetchContact(this.props.match.params.id)
      .then(resp => this.setState({loaded: true}))
  }

  handleUpdate = contact => {
    this.props.updateContact(this.props.contact.id, contact)
      .then(resp => this.setState({redirect: true}))
  };

  buttonLabels = {
    cancel: 'Cancel',
    save: 'Add'
  };
  render() {
    return (
      <div>
        <Spinner size={200} visible={this.props.isLoading}/>
        {this.state.loaded && <ContactForm onSubmit={this.handleUpdate} buttonLabels={this.buttonLabels} />}
        {
          this.state.redirect && <Redirect to="/"/>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    contact: state.contacts.contact,
    isLoading: state.contacts.isLoading
  }
}

export default connect(mapStateToProps, {fetchContact, updateContact})(EditContact)
