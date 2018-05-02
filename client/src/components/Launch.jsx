import React from 'react';

import Footer from './footer';

const Launch = () => {
  return (
    <div>
      <h1>Welcome to <span className="blue-text">Blogtastic!!</span></h1>
      <div className="section">
        <h3>So... what is it?</h3>
        <p>Blogtastic is a blog site built by <b>Mark Zsombor</b> to further my knowledge in web-technologies, primarily React and Redux. Along the way other tech has been enlisted such as Materialize CSS, NodeJS, MongoDB and PassportJS. Checkout my portfolio site at <a href="https://markzsombor.github.io/">markzsombor.github.io</a> if you'd like to see more of my work.</p>
      </div>
      <div className="section">
        <h3>Ok, so how do I use it?</h3>
        <p>Use the Users List to see a list of all the users, there you will be able to access their profiles and see all of their posts. The Posts List will show you all the posts made by <em>everyone</em>. </p>
        <Footer />
      </div>
      <div className="section">
        <h3>Can I make posts?</h3>
        <p> Sure you can! All you need to do is to <a href="/auth/google" className="orange-text">Register an account using Google</a>, then as long as you're <a href="/auth/google">Logged in</a> you will find an Add a Post link at the top right of the page. Also after registering go to your profile and add a picture and a description of yourself for others to see.</p>
      </div>
      <div className="section">
        <h3>Can I see how you made it?</h3>
        <p>Sure! All the code I used for this project can be found at <a href="https://github.com/MarkZsombor/React-Blog">Github.</a> Take a look if you're interested!</p>
      </div>
    </div>
  );
};

export default Launch;
