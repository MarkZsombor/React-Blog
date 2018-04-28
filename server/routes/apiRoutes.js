const Post = require('../models/Posts');

module.exports = (app) => {
  app.get('/api/logout', (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
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
};

