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

var params = {screen_name: 'realDonaldTrump'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      for(var i = 0; i < 20; i++){
        console.log("\n**********TWEET "+i+"**********"+tweets[i].text+" CREATED AT:",tweets[i].created_at);
      }
    
  }
});