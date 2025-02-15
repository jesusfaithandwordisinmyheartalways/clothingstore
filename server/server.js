


import express from 'express';
import cors from 'cors'
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import loginRoutes from './routes/loginRoute.js'
import paypalRoutes from './routes/paypalRoutes.js'; // Updated import
import ordersRoutes from './routes/ordersRoute.js'
import connectMongoDB from './config/mongodb.js';


const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(helmet());




app.use('/user', loginRoutes)
app.use('/paypal', paypalRoutes);
app.use('/orders', ordersRoutes)


connectMongoDB()






app.get('/', (req, res) => {
    res.end('backend server')
})




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

