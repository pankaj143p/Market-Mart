import { currentUser } from '@clerk/nextjs/server'

// Server-side admin check function
export async function isCurrentUserAdmin(): Promise<boolean> {
  try {
    const user = await currentUser()
    if (!user) return false
    
    const userEmail = user.emailAddresses[0]?.emailAddress || ''
    return isAdminEmail(userEmail)
  } catch (error) {
    console.error('Clerk authentication error:', error)
    // Return false if Clerk is not properly configured
    return false
  }
}

// Check if email is admin
export function isAdminEmail(email: string): boolean {
  // Get admin emails from environment variables
  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(email => email.trim()) || []
  
  // Fallback to super admin email
  const superAdmin = process.env.SUPER_ADMIN_EMAIL
  if (superAdmin && !adminEmails.length) {
    adminEmails.push(superAdmin)
  }
  
  return adminEmails.includes(email)
}

// Get current user admin status and info
export async function getCurrentUserAdminInfo() {
  try {
    const user = await currentUser()
    if (!user) return { isAdmin: false, user: null }
    
    const userEmail = user.emailAddresses[0]?.emailAddress || ''
    const isAdmin = isAdminEmail(userEmail)
    
    return {
      isAdmin,
      user,
      userEmail
    }
  } catch (error) {
    console.error('Clerk authentication error in getCurrentUserAdminInfo:', error)
    return { isAdmin: false, user: null }
  }
}
