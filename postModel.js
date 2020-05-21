const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	_id: { type: Number, require: true },
	title: { type: String, require: true },
	tags: { type: [String] },
	body: { type: String, require: true },
	imgURL: { type: String },
	userId: { type: Number, require: true }
})


module.exports = Post = mongoose.model("Post", postSchema)
