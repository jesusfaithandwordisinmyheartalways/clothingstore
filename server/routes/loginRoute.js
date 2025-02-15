

import express from 'express';
import { UserSignUp, LoginUser } from '../controllers/loginController.js';



const router = express.Router();
router.post('/signup', UserSignUp)
router.post('/login', LoginUser)




export default router;