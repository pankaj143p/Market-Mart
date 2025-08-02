import { currentUser } from '@clerk/nextjs/server'

// Server-side admin check function
export async function isCurrentUserAdmin(): Promise<boolean> {
  try {
    const user = await currentUser()
    if (!user) return false
    
    const userEmail = user.emailAddresses[0]?.emailAddress || ''
    return isAdminEmail(userEmail)
  } catch (error) {
    console.error('Error checking admin status:', error)
    return false
  }
}

// Check if email is admin
export function isAdminEmail(email: string): boolean {
  if (!email) return false
  
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
    if (!user) return { isAdmin: false, user: null, userEmail: '' }
    
    const userEmail = user.emailAddresses[0]?.emailAddress || ''
    const isAdmin = isAdminEmail(userEmail)
    
    return {
      isAdmin,
      user,
      userEmail
    }
  } catch (error) {
    console.error('Error getting user admin info:', error)
    return { isAdmin: false, user: null, userEmail: '' }
  }
}
