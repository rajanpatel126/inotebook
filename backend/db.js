const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connetToMongooes = ()=>{
    mongoose.connect(mongoURI , ()=>{
        console.log("conntecd to mongoose")
    })
}

module.exports = connetToMongooes