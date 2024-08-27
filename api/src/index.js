const express = require('express')
const {port, host, db, authApiUrl} = require('./configurations')
const {connectDb} = require('./helpers/db')
const mongoose = require('mongoose')
const axios = require('axios')

const postShema = new mongoose.Schema({name: String})
const Post = mongoose.model('Post', postShema)

const app = express()

const startServer = () => {
    app.listen(port,()=>{
        console.log(`Started api server on port ${port}`);
        console.log(` server on host ${host}`);
        console.log(`Started database ${db}`);
        
        const tom = new Post({'name': 'Tom'})
        tom.save()
        // console.log(tom);
        const bill =  new Post({'name': 'Bill'})
        // console.log(bill);
        bill.save()
        
    })
}

app.get('/test',(req,res)=>{
    
    res.send('----------express ------------ currently')
})

app.get('/testwithcurrentuser',(req,res)=>{
    axios.get(authApiUrl+'/currentUser').then(response=>{
        res.json({
            testwithcurrentUser: true,
            currentUser: response.data
        })
    })
})

app.get('/api/testapidata', (req,res)=>{
    res.json({
        testwithapi: true
    })
})


connectDb()
    .on('error', console.log)
    .on('disconnection', connectDb)
    .once('open', startServer)