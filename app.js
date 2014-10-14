// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');    // call express
var app        = express();         // define our app using express
var bodyParser = require('body-parser');
var request    = require('request');

app.get('/api/:term', function(req, res) {
  console.log(request);
  request('https://itunes.apple.com/search?term=' + req.params.term, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      apiRes = JSON.parse(body);
      res.write("<h1>Artist Name: " + apiRes.results[0].artistName + "</h1>");
      res.write("<h3>Track Name: " + apiRes.results[0].trackName + "</h3>");
      res.write("<h3>Song Preview: <audio controls src='" + apiRes.results[0].previewUrl + "'></audio></h3>");
      res.write("<h3>Artwork: <img src='" + apiRes.results[0].artworkUrl100 + "'></h3>");
      res.send();
    } else {
      res.send("API Down");
    }
  });
});

var server = app.listen(3000, function() {
  console.log('server running on port %d', server.address().port);
});