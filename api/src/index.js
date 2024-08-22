const express = require('express')
const {port, host, db} = require('./configurations')
const {connectDb} = require('./helpers/db')

const app = express()

const startServer = () => {
    app.listen(port,()=>{
        console.log(`Started api server on port ${port}`);
        console.log(` server on host ${host}`);
        console.log(`Started database ${db}`);
    })
}

app.get('/test',(req,res)=>{
    res.send('Our api server working currently')
})


connectDb()
    .on('error', console.log)
    .on('disconnection', connectDb)
    .once('open', startServer)