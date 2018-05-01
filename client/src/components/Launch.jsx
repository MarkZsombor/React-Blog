import React from 'react';
// import { Link } from 'react-router-dom';

import Footer from './footer';

const Launch = () => {
  return (
    <div>
      <h1>Welcome to <span className="blue-text darken-2">Blogtastic!!</span></h1>
      <h3>But what is it?</h3>
      <p>Blogtastic is a blog site built by Mark Zsombor to further his knowledge in web-technologies, primarily React and Redux. Along the way other tech has been enlisted such as Materialize CSS, NodeJS, MongoDB and PassportJS.</p>
      <h3>Ok, so how do I use it?</h3>
      <p>Use the Users List to see a list of all the users, there you will be able to access their profiles and see all of their posts. The Posts List will show you all the posts made by <em>everyone</em>. </p>
      <Footer />
      <h3>Can I make posts?</h3>
      <p> Sure you can! All you need to do is to <a href="/auth/google" className="orange-text">Register an account using Google,</a> then as long as you're <a href="/auth/google">Logged in</a> you will find an Add a Post link at the top right of the page. Also go to your profile and add a picture and a description of yourself.</p>
    </div>
    // Title = Blogtastic
    // How too 
    // Why it exists
    // Login/Register
  );
};

export default Launch;
