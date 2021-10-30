// part import
// 1require express
const express = require("express");
const connectDB = require("./config/connectDB");


//2instance methods of all express methods
const app = express();
// require(.env)
require("dotenv").config();
//*********************************************************************************
// call function that connect with the database
connectDB();

//*********************************************************************************
// route
//middleware to read the json type
app.use(express.json());
//middelware for the person routes
app.use("/api/person",require("./router/person"));







// create a server Part
// 3port
const PORT=process.env.PORT;

//4create server
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running", PORT)
);