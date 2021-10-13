const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service')
const User = require('../models/user');
const Client = require('../models/client')
const Provider = require('../models/provider')
const Category = require('../models/category')
const Product = require('../models/product')
const upload = require('../helpers/storage')

// Register User
router.post('/register', async (req,res)=>{
    try {
        const user = new User(req.body)
        const userData = await authService.register(user)
        res.send(userData)
    } catch (error) {
        res.send(error)
    }
})

// Login User
router.post('/login', async (req,res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json('Email and password required')
        }
        let token = await authService.login(req.body)
        if (token.code == 200){
            res.status(token.code).json(token)
        }else{
            res.send(token)
        }
    } catch (error) {
        res.send(error)
    }
})

// Register Client
router.post('/registerclient', async (req,res)=>{
    const clientData = new Client(req.body)
    await clientData.save()
    res.send(clientData)
})

// Show Registered Clients
router.get('/registerclient', async (req,res)=>{
        const client = await Client.find();
        res.send(client)
})

// Register Provider
router.post('/registerprovider', async (req,res)=>{
    const providerData = new Provider(req.body)
    await providerData.save()
    res.send(providerData)
})

// Show Registered Providers
router.get('/registerprovider', async (req,res)=>{
    const provider = await Provider.find();
    res.send(provider)
})

// Register Category
router.post('/registercategory', async (req,res)=>{
    const categoryData = new Category(req.body)
    await categoryData.save()
    res.send(categoryData)
})

// Show Registered Categories
router.get('/registercategory', async (req,res)=>{
    const category = await Category.find();
    res.send(category)
})

// Register Product
router.post('/registerproduct', upload.single('imgProduct'), async (req,res)=>{
    const productData = new Product(req.body)
    const { filename } = req.file
    productData.setImg(filename)
    await productData.save()
    res.send(productData)
})

// Show Registered Categories
router.get('/registerproduct', async (req,res)=>{
    const product = await Product.find();
    res.send(product)
})


module.exports = router;