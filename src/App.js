import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchAllPosts} from './actions/posts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntryActions from './actions/posts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let posts = this.props.actions.fetchAllPosts();
  }

  render() {

    return (
      <div className="App">
        {this.props.posts.postsList.isLoading && <h2>Loading...</h2>}
      </div>
    );
  }
}

function mapStateToProps(state)  {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(EntryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
