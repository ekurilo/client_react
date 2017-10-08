import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './containers/Main';
import AddContact from './containers/AddContact';

class App extends Component {

  render() {

    return (
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/add" component={AddContact}/>
      </div>
    );
  }
}

export default App;
