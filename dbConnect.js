//now that mongoose is installed, we use it to connect to our mongodb. We do this by creating dbConnect.js file
'use strict';
//requiring mongoose 
const Mongoose = require('mongoose');
require('colors')
//environment variables
const uri = process.env.DB_URI ||"mongodb://localhost/fruitAPIDB";

//object containing mongoose options
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//Connect to MongoDB - establish connection using env
Mongoose.connect(uri, mongooseOptions)
    .then(() => console.log(`MongoDB CONNECTED: ${process.env.DB_URI}`.bgBlue))
    .catch(error => console.log('MongoDB Error: ' + error.message));

// Get the default connection
const db = Mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error: "));
exports.Mongoose = Mongoose;
