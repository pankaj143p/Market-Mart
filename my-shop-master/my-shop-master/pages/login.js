// pages/login.js
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function submitHandler(event) {
    event.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (!result.error) {
      router.replace('/')
    }
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
      <button type="submit" >Login</button>
    </form>
  )
}

export default LoginPage
