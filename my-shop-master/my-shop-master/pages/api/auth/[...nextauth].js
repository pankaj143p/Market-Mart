// import clientPromise from '@/lib/mongodb'
// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     })
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   secret: process.env.NEXTAUTH_SECRET,
// })
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { verifyPassword } from '../../../lib/auth'
import { connectToDatabase } from '../../../lib/db'
import User from '../../../models/userModel'

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectToDatabase()

        const user = await User.findOne({ email: credentials.email })

        if (!user) {
          throw new Error('No user found with the email')
        }

        const isValid = await verifyPassword(credentials.password, user.password)

        if (!isValid) {
          throw new Error('Invalid password')
        }

        return { email: user.email }
      }
    })
  ]
})
