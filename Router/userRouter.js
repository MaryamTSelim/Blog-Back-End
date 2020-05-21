const userRouter = require("express").Router();
const Post = require("../userModel");

userRouter.get("/:id", async (req, res) => {
	//find 
	const id = req.params.id;
	const user = await user.findOne({
		'id': id
	});
	res.json(user)
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
		res.json(savedUser);

	}
	catch (err) {
		console.log(err)
	}
})


module.exports = userRouter;