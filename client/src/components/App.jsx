import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Launch from './Launch';
import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PostsShow from './posts_show';
import PostsUpdate from './posts_update';
import UserList from './User_List';
import UserProfile from './User_Profile';

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
                <Route exact path="/posts/all" component={PostsIndex} />
                <Route path="/posts/new" component={PostsNew} onPostSubmit= { this.handlePostSubmit } />
                <Route path="/posts/update/:id" component={PostsUpdate} />
                <Route path="/posts/:id" component={PostsShow} />
                <Route path="/users/all" component={UserList} />
                <Route path="/users/:id" component={UserProfile} />
                <Route exact path="/" component={Launch} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
