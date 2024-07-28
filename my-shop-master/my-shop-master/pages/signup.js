// pages/signup.js
import { useState } from 'react'
import { useRouter } from 'next/router'
import { hashPassword } from '../lib/auth'

function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function submitHandler(event) {
    event.preventDefault()

    const hashedPassword = await hashPassword(password)

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password: hashedPassword }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      console.error('Signup failed!')
      return
    }

    router.replace('/login')
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignupPage
