
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://user:<password>@node-rest-shop-qalba.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');

let con = mongoose.connect(
    'mongodb+srv://user:userpassword@node-rest-shop-qalba.mongodb.net/test?retryWrites=true&w=majority',
    {
        useMongoClient: true
    }
);

module.exports = con;