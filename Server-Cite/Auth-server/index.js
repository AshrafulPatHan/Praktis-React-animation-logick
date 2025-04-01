const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db')
const PORT = 5000

app.listen(PORT,()=> {
	console.log(`server is running ${PORT}`)
})

app.get('/',(req,res) =>{
	res.send("server is running")
})



// React_Auth
// tQBNv68I3DSChgfM
// nodemon index.js