var express = require('express'),
    app = express(),
    engines = require('consolidate');


app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('hello', { 'name': 'Templates'});
});

// Handles any requests that are not specified in the route(s) above
app.use(function(req, res) {
  res.sendStatus(404);
});

var server = app.listen(4000, function() {
  var port = server.address().port;
  console.log('Express server listening on port %s', port);
});

//var MongoClient = require('mongodb').MongoClient,
//// The assert module is used for error checking
//    assert = require('assert');

//// The Mongo db client object is used to connect to the mongo server
//MongoClient.connect('mongodb://localhosst:27017/video', function(err, db) {

//    assert.equal(null, err);
//    console.log("Successfully connected to the server");

//      //Find some documents in our collection. find returns a 'cursor' so it has
//      //to be converted to an array
//    db.collection('movies').find({}).toArray(function(err, docs) {

//        // Print the title of each document in the result set
//      docs.forEach(function(doc) {
//        console.log(doc.title);
//      });

//      db.close();
//  });

//  console.log("Stuff here")
//});
