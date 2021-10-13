const Mongoose = require("mongoose")
const Schema = Mongoose.Schema

const Provider = new Schema({
    dniProvider:String,
    nameProvider:String,
    lastNameProvider:String,
    addressProvider:String,
    phoneProvider:String,
    emailProvider:{
        type: String,
        unique: true
    },
    webProvider: String
})

module.exports = Mongoose.model('providers', Provider)