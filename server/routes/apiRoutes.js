const Post = require('../models/Posts');
const User = require('../models/User');

let currentUser = {};

module.exports = (app) => {
  app.get('/api/logout', (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    currentUser = req.user;
    res.send(req.user);
  });

  app.get('/api/users', (req, res) => {
    User.find((err, users) => {
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
  });

  app.put('/api/user/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.send(err);
      }
      req.body.userHandle ? user.userHandle = req.body.userHandle : null;
      req.body.userInfo ? user.userInfo = req.body.userInfo : null;
      req.body.picture ? user.picture = req.body.picture : null;
      user.save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'User Updated' });
      });
    });
  });


  app.get('/api/posts', (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        res.send(err);
      }
      res.json(posts);
    });
  });

  app.post('/api/posts', (req, res) => {
    const post = new Post();
    post.title = req.body.title;
    post.categories = req.body.categories;
    post.content = req.body.content;
    post.createDate = Date.now();
    post.authorHandle = currentUser.userHandle;
    post.authorId = currentUser['_id'];
    post.imageURL = req.body.image;
    post.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'New Post Added' });
    });
  });

  app.get('/api/posts/:id', (req, res) => {
    Post.findById(req.params.id, (err, post) =>{
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  });

  app.put('/api/posts/:id', (req, res) => {
    Post.findById(req.params.id, (err, post) => {
      if (err) {
        res.send(err);
      }
      req.body.title ? post.title = req.body.title : null;
      req.body.categories ? post.categories = req.body.categories : null;
      req.body.image ? post.imageURL = req.body.image : null;
      req.body.content ? post.content = req.body.content : null;
      post.save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Post Updated' });
      });
    });
  });

  app.delete('/api/posts/:id', (req, res) => {
    Post.remove({ _id: req.params.id }, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Post Deleted' });
    });
  });
};

