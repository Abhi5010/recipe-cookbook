import { registerUser, loginUser } from '../services/auth.service.js'
import db from '../config/db.js'

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body)

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: user
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body)

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      data: user
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message
    })
  }
}

export const me = async (req, res) => {
  try {
    const user = await db('users')
      .select('id', 'name', 'email', 'role', 'created_at', 'updated_at')
      .where({ id: req.user.id })
      .first()

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Current user fetched successfully',
      data: user
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong'
    })
  }
}