const mongoose = require('mongoose')

const url = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PAS}@cluster0.zxihh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
	.then(()=> {
		console.log("mongodb connect ..");
	}).catch((error)=>{
		console.log("mongodb error",error)
	})
