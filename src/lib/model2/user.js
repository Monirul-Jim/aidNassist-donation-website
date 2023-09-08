const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	/* password: {
		type: String,
		required: true,
	}, */
	role: {
		type: String,
		enum: ["admin", "donor", "user"],
		default: "user",
	},
});

// Create the User model
const User = mongoose.models.users || mongoose.model("users", userModel);

module.exports = User;
