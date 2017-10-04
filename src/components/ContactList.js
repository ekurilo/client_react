import React, { Component } from 'react';
import Contact from './Contact'
import {GridList, GridTile} from 'material-ui/GridList';

export default class ContactList extends React.Component {

  handleDelete(id) {
    this.props.actions.deleteContact(id);
  }
  render() {
    return (
      <div>
        <GridList cellHeight={200}>
        {this.props.contacts.map(contact => <Contact key={contact._links.self.href} contact={contact} onDelete={this.handleDelete.bind(this)}/>)}
        </GridList>
        </div>
    );
  }
}
