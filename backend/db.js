const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&tls=false"

const connectToMongo = () => {

    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI, { family: 4 }, () => {
        console.log('Connected to Mongo successfully');
    })


}

module.exports = connectToMongo;