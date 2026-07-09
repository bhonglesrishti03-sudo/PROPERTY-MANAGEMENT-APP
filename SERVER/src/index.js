//require('dotenv').config({path: './env'})
import dotenv from "dotenv";

import connectDB from "./database/index.js";

import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 4000;
connectDB()
.then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    app.on("error", (error) => {
        console.log("ERROR:", error);
        throw error;
    });
})
.catch((err) => {
    console.log("MONGODB connection failed !!!" , err);
})

// //app.on("error",...)
// Why?

// Suppose

// Port already occupied

// OR

// Permission denied

// OR

// Server crash

// Express emits an "error" event.

// This catches it.