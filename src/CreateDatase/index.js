require('dotenv').config()
const mongoose = require('mongoose')
const reportModel=require("../model")
const data=require("../data")


// Connect to DATABASE
// const DATABASE_URL = "mongodb://127.0.0.1:27017/Reports";

//Connect to Cloud DATABASE (MongoDB Atlas Database) 
const DATABASE_URL = process.env.MONGO_URI
mongoose.connect(DATABASE_URL);
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await reportModel.deleteMany({})
    // console.log(connection)
    await reportModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()