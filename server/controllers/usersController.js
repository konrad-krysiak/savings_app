import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../models/user.js';

const code = 'iksde';

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await UserModel.findOne({ email });
        if(!oldUser) return res.status(404).json({ message: "User doesn't exist." });
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid password." });
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, code, { expiresIn: "1h" });
        res.status(200).json({ result: oldUser, token });
    } catch(error) {
        res.status(500).json({ message: "Error in usersController" });
    }
};

export const signUp = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const oldUser = await UserModel.findOne({ email });
        if (oldUser) {
            console.log("User already exists!");
            return res.status(400).json({ message: "User already exists." });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});
        const token = jwt.sign({ email, id: newUser._id }, code, { expiresIn: "1h" });
        res.status(200).json({ result: newUser });
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong in usersController" });
    }
};