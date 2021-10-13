const Mongoose = require("mongoose")
const Schema = Mongoose.Schema

const Category = new Schema({
    nameCategory: String,
    descriptionCategory:String
})

module.exports = Mongoose.model('categories', Category)