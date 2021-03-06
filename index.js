const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const multer = require("multer");
const ejs = require("ejs")
const path = require("path")

require("dotenv").config()

const app = express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000;
console.log("Starting server")
app.listen(PORT, () => { console.log(`Server started on Port :: ${PORT}`) })

app.use("/post", require("./Router/postRouter"))
app.use("/user", require("./Router/userRouter"))

console.log("Connecting to MongoDB")
mongoose.connect(process.env.MONGOOSE_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true }
	, err => {
		err ?
			console.error(err)
			:
			console.log("Mongo connection established");
	})