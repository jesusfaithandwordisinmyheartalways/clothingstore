


import jsonWebToken from 'jsonwebtoken'
import dotenv from 'dotenv';
import NewUser from '../models/signupModel.js';
import bcrypt from 'bcrypt'




dotenv.config();

const users = {};  // Temporary in-memory storage
const failedAttempts = {}; // Track failed logins for account lockout


const validateInput = (name, email, password) => {
    const nameRegex = /^[a-zA-Z ]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return nameRegex.test(name) && emailRegex.test(email) && passwordRegex.test(password);
};






const UserSignUp = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        const profileExist = await NewUser.findOne({ email });

        if (profileExist) {
            return res.status(400).json({ success: false, message: 'User profile already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const NEW_USER = new NewUser({ name, password: hashedPassword, email });
        await NEW_USER.save();

        res.status(201).json({ success: true, message: 'New User has been registered' });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};





const LoginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Search in the correct collection (NewUser)
        const UserSignedIn = await NewUser.findOne({ email });

        if (!UserSignedIn) {
            return res.status(400).json({ success: false, message: 'User information was not found' });
        }

        // Compare hashed passwords
        const isUserPasswordValid = await bcrypt.compare(password, UserSignedIn.password);
        if (!isUserPasswordValid) {
            return res.status(403).json({ success: false, message: 'Password does not match' });
        }

        // Generate token
        const userToken = jsonWebToken.sign({ email }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.cookie('authToken', userToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            expires: new Date(Date.now() + 60 * 60 * 1000)
        });

        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};










export { UserSignUp, LoginUser }


