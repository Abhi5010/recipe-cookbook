import db from '../config/db.js'
import { hashPassword, comparePassword } from '../utils/hash.js'
import { generateToken } from '../utils/token.js'

export const registerUser = async ({ name, email, password }) => {
  const normalizedEmail = email.toLowerCase()

  const existingUser = await db('users')
    .where({ email: normalizedEmail })
    .first()

  if (existingUser) {
    throw new Error('Email already registered')
  }

  const hashedPassword = await hashPassword(password)

  const [userId] = await db('users').insert({
    name,
    email: normalizedEmail,
    password: hashedPassword,
    role: 'user'
  })

  const newUser = await db('users')
    .select('id', 'name', 'email', 'role', 'created_at', 'updated_at')
    .where({ id: userId })
    .first()

  return newUser
}

export const loginUser = async ({ email, password }) => {
  const normalizedEmail = email.toLowerCase()

  const user = await db('users')
    .where({ email: normalizedEmail })
    .first()

  if (!user) {
    throw new Error('Invalid email or password')
  }

  const isPasswordCorrect = await comparePassword(password, user.password)

  if (!isPasswordCorrect) {
    throw new Error('Invalid email or password')
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role
  })

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  }
}