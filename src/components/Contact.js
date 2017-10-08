import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FlatButton} from 'material-ui';

export default class Contact extends React.Component {
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
        <FlatButton label="Edit" primary={true}/>
        <FlatButton label="Delete" secondary={true}
                    onClick={() =>this.props.onDelete(this.props.contact._links.self.href)}/>
      </Card>
    );
  }
}

