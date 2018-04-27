import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PostsShow from './posts_show';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route path="/posts/new" component={PostsNew} />
              <Route path="/posts/:id" component={PostsShow} />
              {/* User Profile */}
              {/* User Posts */}
              <Route exact path="/" component={PostsIndex} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
