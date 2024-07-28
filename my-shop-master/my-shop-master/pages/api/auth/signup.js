// pages/api/auth/signup.js
import { connectToDatabase } from '../../../lib/db'
import { hashPassword } from '../../../lib/auth'
import User from '../../../models/userModel'

async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }

  const { email, password } = req.body

  await connectToDatabase()

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' })
    return
  }

  const hashedPassword = await hashPassword(password)

  const newUser = new User({
    email,
    password: hashedPassword,
  })

  await newUser.save()

  res.status(201).json({ message: 'Created user!' })
}

export default handler
