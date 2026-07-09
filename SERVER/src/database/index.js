//This files has only one job that is connecting express and mongodb atlas

// Server start --> Reads .env ---> Gets the Mongo URI ---> Connects to MongoDB  ---> Success ---> Start Express

import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js"

const connectDB = async(req , res) => {
 try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection error" , error);
        process.exit(1) //refers to current node environmnet (process)
    }
}

export default connectDB;

// //mongoose.connect()

// ↓

// returns

// ↓

// Connection Object