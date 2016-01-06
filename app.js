var MongoClient = require('mongodb').MongoClient,
// The assert module is used for error checking
    assert = require('assert');

// The Mongo db client object is used to connect to the mongo server
MongoClient.connect('mongodb://localhosst:27017/video', function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to the server");

      //Find some documents in our collection. find returns a 'cursor' so it has
      //to be converted to an array
    db.collection('movies').find({}).toArray(function(err, docs) {

        // Print the title of each document in the result set
      docs.forEach(function(doc) {
        console.log(doc.title);
      });

      db.close();
  });

  console.log("Stuff here")
});
