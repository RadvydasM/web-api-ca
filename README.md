# Assignment 2 - Web API.

Name: Radvydas Mikalauskas

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Attempted implementation of pagination (didn't get it to work in the end)
 + Added /movies/favorites as protected route
 + Added /movies/playlist as protected route
 + Styled Login and SignUp pages
 + Fetching reviews from TMDB using /reviews/:id parameterised route

## Setup requirements.

Go into movies api folder and run the npm run dev to connect to the MongoDB server. Go into the react-movies folder and run the npm start to start the react app.

## API Configuration

type everything as described below: fill in the username, password, AppName and key placeholders as well as the key placeholder on the react app.
______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb+srv://<username>:<password>@tasky.n306x.mongodb.net/?retryWrites=true&w=majority&appName=<AppName>
TMDB_KEY=<key>
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/user/:id | GET | Gets a specified user
- /api/movie/:id | Get | Gets a specified movie

## Security and Authentication

The user can view the upcoming, top rated and now_playing pages without authentication. The user is required to Login to access the protected favorites and playlist routes. If the user doesn't have an account they must Sign Up and Login instead.

## Integrating with React App

The react app is integrated with the API to access and store the movies and the users. Additionally I have attempted to implement pagination.

## Independent learning (if relevant)

N/A 
