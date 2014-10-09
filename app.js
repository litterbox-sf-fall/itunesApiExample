// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');    // call express
var app        = express();         // define our app using express
var bodyParser = require('body-parser');
var request    = require('request');
// require("locus");

app.get('/api/:term', function(req, res) {
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

// request('https://itunes.apple.com/search?term=led+zeppelin', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body); // Print the google web page.
//   }
// });



// var server = app.listen(3000, function() {
//     console.log('Listening on port %d', server.address().port);
// });

// NEXT APP

// // configure app to use bodyParser()
// // this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var port = process.env.PORT || 8080;    // set our port

// // ROUTES FOR OUR API
// // =============================================================================
// var routerMsg = express.Router();        // get an instance of the express Router

// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// routerMsg.get('/', function(req, res) {
//   res.json({ message: 'hooray! welcome to our api!' });
// });
// routerMsg.get('/myname/:name', function(req, res) {
//   res.json({ message: 'hello' + req.params.name });
// });
// routerMsg.post('/post', function(req, res) {
//   eval(locus);
//   res.json({ message: 'hooray! welcome to our api!' });
// });

// // more routes for our API will happen here

// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/api', routerMsg);

// // START THE SERVER
// // =============================================================================
// app.listen(port);
// console.log('Magic happens on port ' + port);

// NEXT APP

// var express = require('express');
// var app = express();

// app.get('/hw', function(req, res, next){
//   console.log("DIS IZ DA CONSOLE");
//   return next();
// }, function(req, res) {
//   res.send('Hello World');
// });

// app.get('/request', function(req, res) {
//   console.log(req);
//   res.send('Goodbye World');
// });

// app.get('/400', function(req, res) {
//   res.send("Opps... You're not supposed to be hur");
// });

// app.use(function(err, req, res, next) {
//   //do logging and user-friendly error message display
//   res.redirect('/400');
// });

// var server = app.listen(3000, function() {
//     console.log('Listening on port %d', server.address().port);
// });