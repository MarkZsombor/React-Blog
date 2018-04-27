import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import PostsIndex from './posts_index';
// import PostsNew from './posts_new';
// import PostsShow from './posts_show';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            {/* <Route path="/posts/new" Component={PostsNew} /> */}
            {/* <Route path="/posts/:id" Component={PostsShow} /> */}
            {/* User Profile */}
            <Route exact path="/" component={PostsIndex} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
