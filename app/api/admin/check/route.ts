import { NextRequest, NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { isAdminEmail } from '@/lib/admin'

export async function GET() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ isAdmin: false, message: 'Not authenticated' }, { status: 401 })
    }

    const userEmail = user.emailAddresses[0]?.emailAddress || ''
    const isAdmin = isAdminEmail(userEmail)

    return NextResponse.json({ 
      isAdmin, 
      userEmail: isAdmin ? userEmail : undefined,
      userName: isAdmin ? user.firstName : undefined
    })
  } catch (error) {
    console.error('Error checking admin status:', error)
    return NextResponse.json({ isAdmin: false, message: 'Error' }, { status: 500 })
  }
}
