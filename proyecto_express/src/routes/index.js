const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Client = require('../models/client')

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


module.exports = router;