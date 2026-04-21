import 'dotenv/config';
import express, {Request, Response} from 'express';
import cors from 'cors';
import {toNodeHandler} from "better-auth/node"
import { auth } from './lib/Auth.js';
import userRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRouter.js';
import { stripeWebhok } from './controllers/stripeWebhooks.js';

const app = express();

// MiddleWare
const corsOption = {
    origin: process.env.TRUSTED_ORIGIN?.split(',') || [],
   credentials: true,
}

app.use(cors(corsOption));
app.use('/api/stripe', express.raw({type: 'application/json'}), stripeWebhok)
app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(express.json({limit: '50mb'}));

// Port
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response)=> {
res.send(`Server is Running`);
})

app.use('/api/user', userRouter)
app.use('/api/project', projectRouter)

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
    
})