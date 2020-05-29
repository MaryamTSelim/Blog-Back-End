const postRouter = require("express").Router();
const Post = require("../postModel");
postRouter.get("/", async (req, res) => {
	//find 
	const posts = await Post.find();
	res.json(posts)
})

postRouter.get("/:id", async (req, res) => {
	//find 
	const _id = req.params.id;
	const post = await Post.findOne({
		'_id': _id
	});
	res.json(post)
})

postRouter.get("/:title", async (req, res) => {
	//find 
	const title = req.params.title;
	const post = await Post.findOne({
		'title': title
	});
	res.json(post)
})


postRouter.post("/", async (req, res) => {
	const { title, tags, body, userId, imgURL } = req.body
	const posts = await Post.find()
	const _id = Math.max.apply(Math, posts.map((p) => { return p._id; })) + 1;
	const newPost = new Post({
		_id, title, tags, body, imgURL, userId
	})
	try {
		const savedPost = await newPost.save();
		const posts = await Post.find();
		res.json(posts);
	}
	catch (err) {
		console.log(err)
	}
})

postRouter.delete('/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		await Post.deleteOne({ _id: _id });
		const posts = await Post.find();
		res.json(posts);
	}
	catch (err) {
		console.log(err)
	}
})

postRouter.put('/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const post = await Post.updateOne({ _id: _id }, req.body);
		const posts = await Post.find();
		res.json(posts);
	}
	catch (err) {
		console.log(err)
	}

})


module.exports = postRouter;