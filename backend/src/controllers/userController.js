import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields required" })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ message: "User already exist" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,      // Render (HTTPS)
            sameSite: "none",  // cross-origin
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });


        res.status(201).json({ message: "User registered successfully", user: user })
    } catch (error) {
        console.log(`Error in regiter handle-------> ${error}`)
        res.status(500).json({ message: "Server error" })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            message: "Login Successfull",
            token: token,
            user: user
        })
    } catch (error) {
        console.log(`Error in loginhandle-------> ${error}`)
        res.status(500).json({ message: "server error" })
    }
}