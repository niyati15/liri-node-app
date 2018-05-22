require("dotenv").config();
var keys = require("./keys.js");

//Twitter
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

//Spotify
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);

//Inquirer
var inquirer = require("inquirer");

//Omdb
var request = require('request');

//do-what it says
var fs = require("fs");

//******************TWITTER******************
// var params = {screen_name: 'realDonaldTrump'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//       for(var i = 0; i < 20; i++){
//         console.log("\n**********TWEET "+i+"**********"+tweets[i].text+" CREATED AT:",tweets[i].created_at);
//       }

//   }
// });

//******************SPOTIFY******************
// var song = "";
// if (song) {
//   findSongDetails(song);
// } else {
//   findSongDetails("The Sign by Ace of Base");
// }

// function findSongDetails(song) {
//   spotify.search({ type: 'track', query: song }, function (err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//     else {
//       console.log("Artist Name:", data.tracks.items[0].album.artists[0].name);
//       console.log("Song Name:", data.tracks.items[0].name);
//       console.log("Preview URL:", data.tracks.items[0].preview_url);
//       console.log("Album Name:", data.tracks.items[0].album.name);
//     }

//   });
// }


//******************OMDB******************
// var movieName = "Moana";
// if (movieName) {
//   findMovieDetails(movieName);
// } else {
//   findMovieDetails("Mr. Nobody");
// }
// function findMovieDetails(movie) {
//   var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

//   request(queryUrl, function (error, response, body) {


//     if (!error && response.statusCode === 200) {
//       console.log("Title: " + JSON.parse(body).Title);
//       console.log("Year: " + JSON.parse(body).Year);
//       console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
//       console.log("IMDB rating: " + JSON.parse(body).imdbRating);
//       console.log("Country where the movie was produced: " + JSON.parse(body).Country);
//       console.log("language of the movie: " + JSON.parse(body).Language);
//       console.log("Plot of the Movie: " + JSON.parse(body).Plot);
//       console.log("Actors in the Movie: " + JSON.parse(body).Actors);
//     }
//   });
// }




// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "You want to see the tweets of whom?",
      name: "twitter"
    }
  ])
  .then(function(inquirerResponse) {

    console.log(inquirerResponse);
  });

