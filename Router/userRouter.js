const userRouter = require("express").Router();
const Post = require("../userModel");

userRouter.get("/:id", async (req, res) => {
	//find 
	const id = req.params.id;
	const user = await User.findOne({
		'id': id
	});
	res.json(user)
})

userRouter.get("/", async (req, res) => {
	const users = await User.find();
	res.json(users)
})

userRouter.post("/", async (req, res) => {
	const { name, username, password, imgURL } = req.body
	const following = []
	const users = await User.find()
	const _id = Math.max.apply(Math, users.map((u) => { return u._id; })) + 1;
	//
	//working
	//
	const newUser = new User({
		_id, name, imgURL, username, password, following
	})
	try {
		const savedUser = await newUser.save();
		const users = await User.find();
		res.json(users);

	}
	catch (err) {
		console.log(err)
	}
})

userRouter.put('/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const temp = await User.updateOne({ _id: _id }, req.body);
		const users = await User.find();
		res.json(users);
	}
	catch (err) {
		console.log(err)
	}

})


module.exports = userRouter;