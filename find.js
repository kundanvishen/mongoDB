var filterAge = parseInt(process.argv[2]);
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var parrots = db.collection('parrots');
    parrots.find({
        age: {
            $gt: +filterAge
        }
    }).toArray(function(err, documents) {
        if(err) throw err
        console.log(documents)
        db.close
    })
});