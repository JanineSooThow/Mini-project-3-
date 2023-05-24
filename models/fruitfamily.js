//Importing mongoose library and creating schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating fruit schema for fruit family collection
const fruitfamilySchema = new Schema({
    family: {type: String, trim: true, required: true},
    name: {type: String, trim: true, required: true},
    order: {type: String, trim: true, required: true},
    genus: {type: String, trim: true, required: true},

});


//"family" collection in Mongodb
module.exports = mongoose.model("family", fruitfamilySchema); 