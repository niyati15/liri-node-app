require("dotenv").config();
var keys = require("./keys.js");

//Twitter
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

//Spotify
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);


//Omdb
var request = require('request');

//do-what it says
var fs = require("fs");

//TWITTER
// var params = {screen_name: 'realDonaldTrump'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//       for(var i = 0; i < 20; i++){
//         console.log("\n**********TWEET "+i+"**********"+tweets[i].text+" CREATED AT:",tweets[i].created_at);
//       }

//   }
// });

//SPOTIFY
// spotify.search({ type: 'track', query: 'Hello by Adele' }, function (err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
//   else {
//     console.log("Artist Name:", data.tracks.items[0].album.artists[0].name);
//     console.log("Song Name:", data.tracks.items[0].name);
//     console.log("Preview URL:", data.tracks.items[0].preview_url);
//     console.log("Album Name:", data.tracks.items[0].album.name);
//   }

// });