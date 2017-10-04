import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Contact extends React.Component {
  handleClick() {
    this.props.onDelete(this.props.contact._links.self.href)
  }
  render() {
    return (
      <Card>
        <CardText>
          {this.props.contact.firstName}
        </CardText>
        <CardText>
          {this.props.contact.lastName}
        </CardText>
        <CardText>
          {this.props.contact.tel}
        </CardText>
        <button onClick={this.handleClick.bind(this)}>Delete</button>
      </Card>
    );
  }
}

