import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
	try {
		const { auth0Id } = req.body;

		// Check if the user exists
		const existingUser = await User.findOne({ auth0Id });

		if (existingUser) {
			return res.status(200).send();
		}

		// Create a new user if user doesn't exist
		const newUser = new User(req.body);
		await newUser.save();

		// Return the user object to calling client
		res.status(201).json(newUser.toObject());
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error creating current user" });
	}
};

export default {
	createCurrentUser,
};
