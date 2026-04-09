import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js'
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Backend is running'
  })
})

app.use('/api/auth', authRoutes)

export default app