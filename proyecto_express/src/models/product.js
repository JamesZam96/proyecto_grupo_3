const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    barCodeProduct: String,
    nameProduct: String,
    categoryProduct: String,
    unitsProduct: String,
    priceProduct: String,
    discountProduct: String,
    providerProduct: String,
    modelProduct:String,
    brandProduct: String,
    dateProduct: String,
    statusProduct:String,
    imgProduct:String
});

Product.methods.setImg = function(file){
    this.imgProduct = '/public/'+file
}

module.exports = mongoose.model('products', Product);