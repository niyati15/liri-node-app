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

//Inquirer-recursive
var inquirerRecursive = require("inquirer-recursive");

//Omdb
var request = require('request');

//do-what it says
var fs = require("fs");

//******************TWITTER******************
function findTweets(twitter_handle) {
  var params = { screen_name: twitter_handle };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      for (var i = 0; i < 20; i++) {
        console.log("\n**********TWEET " + i + "**********" + tweets[i].text + " CREATED AT:", tweets[i].created_at);
      }

    }
  });
}

//******************SPOTIFY******************
function findSong(song) {
  if (song) {
    findSongDetails(song);
  } else {
    findSongDetails("The Sign by Ace of Base");
  }

  function findSongDetails(song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      else {
        console.log("Artist Name:", data.tracks.items[0].album.artists[0].name);
        console.log("Song Name:", data.tracks.items[0].name);
        console.log("Preview URL:", data.tracks.items[0].preview_url);
        console.log("Album Name:", data.tracks.items[0].album.name);
      }

    });
  }
}

//******************OMDB******************
function omdb(movieName) {
  if (movieName) {
    findMovieDetails(movieName);
  } else {
    findMovieDetails("Mr. Nobody");
  }
  function findMovieDetails(movie) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (error, response, body) {


      if (!error && response.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("IMDB rating: " + JSON.parse(body).imdbRating);
        console.log("Country where the movie was produced: " + JSON.parse(body).Country);
        console.log("language of the movie: " + JSON.parse(body).Language);
        console.log("Plot of the Movie: " + JSON.parse(body).Plot);
        console.log("Actors in the Movie: " + JSON.parse(body).Actors);
      }
    });
  }
}

// Create a "Prompt" with a series of questions.
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt([{
  type: 'recursive',
  message: 'Add a new user ?',
  name: 'users',
  prompts: [
      {
          type: 'input',
          name: 'name',
          message: 'What is user\'s name?',
          validate: function (value) {
              if ((/.+/).test(value)) { return true; }
              return 'name is required';
          }
      }, {
          type: 'input',
          name: 'age',
          message: 'How old is he?',
          validate: function (value) {
              var digitsOnly = /\d+/;
              if (digitsOnly.test(value)) { return true; }
              return 'Invalid age! Must be a number genius!';
          }
      }
  ]
}]).then(function(answers) {
  console.log(answers.users);
  /*
  OUTPUT :
  [
      {
          name: 'Brendan Eich',
          age: '42',
      }, {
          name: 'Jordan Walke',
          age: '13',
      },
      ...
  ]
  */
});
  // .then(function (inquirerResponse) {
  //   var choice = inquirerResponse.choices;
  //   switch (choices) {
  //     case "Movie-this":
  //       omdb(choice);
  //       break;
  //     case "Spotify-this":
  //       findSong(choice);
  //       break;
  //     case "Find-tweets":
  //       findTweets(choice);
  //       break;
  //   }
  // });+




