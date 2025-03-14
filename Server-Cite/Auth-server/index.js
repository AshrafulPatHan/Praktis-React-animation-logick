const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 5000

app.listen(PORT,()=> {
	console.log(`server is runing ${PORT}`)
})

app.get('/',(req,res) =>{
	res.send("server is runing")
})


// React_Auth
// tQBNv68I3DSChgfM
// nodemon index.js