import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PostsShow from './posts_show';
import NavBar from './navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="content">
            <Switch>
              <Route path="/posts/new" component={PostsNew} />
              <Route path="/posts/:id" component={PostsShow} />
              <Route path="/" component={PostsIndex} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
