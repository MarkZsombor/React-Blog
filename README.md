# Blogtastic

A blog site step up using React and Redux for the purpose of getting more experience using Redux for handling application state. Site shows by default a list of blog posts, and through the use of react-router can then move to individual blog posts. New blog posts can be made, and old ones updated or destroyed.

The site uses a MERN stack (MongoDB, ExpressJS, React, NodeJS) and utilized redux for state management. User authorization is  handled by PassportJS using Google OAuth. Styling was achieved using the Materialize CSS framework.

The site is deployed on heroku at [blogtasticmz.herokuapp.com](https://blogtasticmz.herokuapp.com/).

TODO: Fix the auto-populate update forms. Add comments to posts.

## Getting Started

If you want to run a version of the site locally you will need to follow these steps:  

Clone the Repo!  
Install Dependancies! `npm install` (this command will need to be run in the parent directory and again in the client directory for the server and front end depenancies)  
Create a dev.js file in the server/config file based on dev.example.js. You will need a G+ API key and secret and a mongoDB server location.  
Start the Servers! `npm run dev`  
View the Page! `localhost:3000`  

## Dependancies

React  
Redux  
Redux-thunk  
React-Router  
axios  
redux-promise  
redux-form  
PassportJS (Google Oauth)  
MongoDB  
Mongoose  
Cookie-Session  
Materialize CSS  
lodash  
