import express from 'express'
import { register, login, me } from '../controllers/auth.controller.js'
import { validate } from '../middlewares/validate.middleware.js'
import { registerSchema, loginSchema } from '../validators/auth.validator.js'
import { authenticate } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/register', validate(registerSchema), register)
router.post('/login', validate(loginSchema), login)
router.get('/me', authenticate, me)

export default router

