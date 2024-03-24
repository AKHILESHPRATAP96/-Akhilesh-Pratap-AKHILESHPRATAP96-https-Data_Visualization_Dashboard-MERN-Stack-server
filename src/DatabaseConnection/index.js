const mongoose=require('mongoose')
require('dotenv').config()
const reportModel=require('../model')



const MongoDB = async () => {
    try {
      // Access the MongoDB connection string from the environment
      const mongoURI = process.env.MONGO_URI
  
      if (!mongoURI) {
        throw new Error('MONGODB_URI environment variable is not defined!');
      }
  
      // Connect to MongoDB using Mongoose with best practices
      await mongoose.connect(mongoURI);
     
  
      console.log('MongoDB connected successfully!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
     
    }
  };

 module.exports=MongoDB