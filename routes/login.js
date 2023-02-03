const express = require('express')
const login = express.Router()

login.get('/',(req,res)=>{
    res.render('admin/login')
})
login.post('/',(req,res)=>{
    console.log(req.body);
    res.render("admin/dashboard")
})

module.exports = login
