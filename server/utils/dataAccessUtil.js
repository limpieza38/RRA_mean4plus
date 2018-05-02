const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const meanDB = require('../static/constants').MEAN_CONNECTION_URI;

var selectResult = {
    status: 200,
    data: [],
    message: null
};

function connection(closure) {
    return MongoClient.connect(meanDB, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

function getObjectId(id){
  return new ObjectId(id);
}

module.exports = { selectResult, connection, getObjectId };
