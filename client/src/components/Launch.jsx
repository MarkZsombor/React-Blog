import React from 'react';
// import { Link } from 'react-router-dom';

import Footer from './footer';

const Launch = () => {
  return (
    <div>
      <h1>Welcome to <span className="blue-text darken-2">Blogtastic!!</span></h1>
      <div className="section">
        <h3>So... what is it?</h3>
        <p>Blogtastic is a blog site built by Mark Zsombor to further his knowledge in web-technologies, primarily React and Redux. Along the way other tech has been enlisted such as Materialize CSS, NodeJS, MongoDB and PassportJS.</p>
      </div>
      <div className="section">
        <h3>Ok, so how do I use it?</h3>
        <p>Use the Users List to see a list of all the users, there you will be able to access their profiles and see all of their posts. The Posts List will show you all the posts made by <em>everyone</em>. </p>
        <Footer />
      </div>
      <div className="section">
        <h3>Can I make posts?</h3>
        <p> Sure you can! All you need to do is to <a href="/auth/google" className="orange-text darken-2">Register an account using Google</a>, then as long as you're <a href="/auth/google">Logged in</a> you will find an Add a Post link at the top right of the page. Also after registering go to your profile and add a picture and a description of yourself for others to see.</p>
      </div>
    </div>
  );
};

export default Launch;
