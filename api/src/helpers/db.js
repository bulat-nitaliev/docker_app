const {db} = require('../configurations')

const mongoose = require('mongoose')

module.exports.connectDb = () => {
    mongoose.connect(db, {useNewUrlParser:true})
    return mongoose.connection
}

