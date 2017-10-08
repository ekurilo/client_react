import React, {Component} from 'react';
import {FlatButton, TextField} from 'material-ui';
import {NavLink} from 'react-router-dom';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      tel: ''
    };
  }


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit() {
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      tel: this.state.tel
    })

  }

  render() {
    return (
      <div>
        <div>
          <TextField name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName}/>
          <TextField name="lastName" onChange={this.handleChange.bind(this)} value={this.state.lastName}/>
          <TextField name="tel" onChange={this.handleChange.bind(this)} value={this.state.tel}/>
        </div>
        <div>
          <FlatButton label={this.props.buttonLabels.save} primary={true} onClick={this.handleSubmit.bind(this)}/>
          <NavLink to="/"><FlatButton label={this.props.buttonLabels.cancel} secondary={true}/> </NavLink>
        </div>
      </div>
    );
  }
};