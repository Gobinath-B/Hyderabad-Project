const express = require('express')
const product = express.Router()
const fb = require('../config').firestore()

product.get("/add", (req,res) => res.render("admin/add"))


product.get('/edit/:id',(req,res)=>{
    const id = req.params.id
    fb.collection('products').doc(id).get()
    .then(result=>{
        console.log(result.data());
        console.log(result);
        res.render('admin/edit',{data:{...result.data(),id:result.id}})
    })
})

product.get('/delete/:id',(req,res)=>{
    const id = req.params.id
    fb.collection('products').doc(id).delete()
    .then(result=>{
        res.send({result:200})
    }).catch(err=>{
        res.status(500).send({result:500})
    })
})

module.exports = product
