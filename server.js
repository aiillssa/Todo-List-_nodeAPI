//Config dotenv to read env files. npm i dotenv to install
require('dotenv').config()
//Import express and mongoose. 
const express = require ('express')
const mongoose = require('mongoose')
const app = express();
const Task = require ('./models/task')
const routes = require ('./routes/todolistRoutes')
const errorMiddleware = require ('./middleware/errorMiddleware')
//Env constants
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
//CORS const
const cors = require ('cors')

//JSON middleware
app.use (express.json())

//CORS middleware
app.use (cors())

//Connect to DB
//strictQuery defines how to handle fields that aren't defined in the schema
//False: all fields including undefined ones will be cast during query casting
//true: only fields defined in schema will b cast during query casting. 
//Query casting: basically when u make a request for some piece of data, mongodb just kinda ignores like the undefined fields if its false, instead of throwing exceptions. 
mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URI)
.then(() =>{
    console.log('connected to mongodb')
    app.listen (PORT, ()=>{
        console.log('node api app is running')
    })
})

app.use ('/', routes)

//error middleware, put it after bc the error comes after the routes run
app.use (errorMiddleware)
