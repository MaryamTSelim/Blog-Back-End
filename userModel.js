const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	_id: { type: Number, require: true },
	name: { type: String, require: true },
	imgURL: { type: String },
	username: { type: String, require: true },
	password: { type: String, require: true },
	following: { type: [Number] }
})
module.exports = User = mongoose.model("User", userSchema)