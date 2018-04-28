import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PostsShow from './posts_show';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  loadPostsFromServer = () => {
    axios.get(this.props.url)
      .then((res) => {
        this.setState({ data: res.data });
      });
  }
  handlePostSubmit = (post) => {
    let posts = this.state.data;
    post._id = Date.now();
    let newPosts = posts.concat([post]);
    this.setState({ data: newPosts });
    axios.post(this.props.url, post)
      .then((res) => {
        this.loadPostsFromServer();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ data: posts });
      });
  }
  componentDidMount() {
    this.props.fetchUser();
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route path="/posts/new" component={PostsNew} onPostSubmit= { this.handlePostSubmit } />
                <Route path="/posts/:id" component={PostsShow} />
                {/* User Profile */}
                {/* User Posts */}
                <Route exact path="/" component={PostsIndex} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
