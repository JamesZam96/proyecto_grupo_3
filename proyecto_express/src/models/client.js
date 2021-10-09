const Mongoose = require("mongoose")
const Schema = Mongoose.Schema

const Client = new Schema({
    dniClient:String,
    nameClient:String,
    lastNameClient:String,
    address1Client:String,
    address2Client: String,
    phoneClient:String,
    emailClient:{
        type: String,
        unique: true
    }
})

module.exports = Mongoose.model('clients', Client)