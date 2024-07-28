// lib/db.js
import mongoose from 'mongoose'

export async function connectToDatabase() {
  if (mongoose.connections[0].readyState) {
    return
  }

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
