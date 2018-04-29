const Post = require('../models/Posts');
let user = {};

module.exports = (app) => {
  app.get('/api/logout', (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    user = req.user;
    res.send(req.user);
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
    post.authorHandle = user.userHandle;
    post.authorId = user['_id'];
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
      req.body.content ? post.content = req.body.content : null;
      post.save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: "Post Updated" });
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

