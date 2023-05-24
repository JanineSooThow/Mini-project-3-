//This schema lists all the fruits from the API and its information
//Importing mongoose library and creating schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fruitSchema = new Schema ({
    name: { type: String, trim: true, required: true},
    id: {type: Number,},
    family: { type: String, trim: true, required: true},
    order: { type: String, trim: true, required: true},
    genus: { type: String, trim: true, required: true},
    nutritions: {
        calories: { type: Number, required: true },
        fat: { type: Number, required: true },
        sugar: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        protein: { type: Number, required: true }
    }
});

//exports a Mongoose model named "Fruits" based on the "fruitSchema"
//first argument is the name of the collection in Mongodb, which is "Fruits"
module.exports = mongoose.model("fruits", fruitSchema);