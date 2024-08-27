const express = require('express')
const {port, host, db, apiUrl} = require('./configurations')
const {connectDb} = require('./helpers/db')
const axios = require('axios')

const app = express()

const startServer = () => {
    app.listen(port,()=>{
        console.log(`Started auth server on port ${port}`);
        console.log(` server on host ${host}`);
        console.log(`Started database ${db}`);
        
        
    })
}

app.get('/test',(req,res)=>{
    
    res.send('----------auth ------------ currently')
})

app.get('/api/currentUser', (req,res)=>{
    res.json({
        id: '1234',
        mail: 'foo@gmail.com'
    })
})

app.get('/testwithapidata',(req,res)=>{
    axios.get(apiUrl+'/testapidata').then(response=>{
        res.json({
            testapidata: response.data.testwithapi
        })
    })
})

connectDb()
    .on('error', console.log)
    .on('disconnection', connectDb)
    .once('open', startServer)