'use client'

import { useUser } from '@clerk/nextjs'
import { Badge } from './ui/badge'

export default function UserProfile() {
  const { user, isSignedIn } = useUser()
  
  if (!isSignedIn) return null
  
  const isAdmin = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',')
    .map(email => email.trim())
    .includes(user?.emailAddresses[0]?.emailAddress || '') || false

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">
        {user?.firstName || user?.emailAddresses[0]?.emailAddress}
      </span>
      {isAdmin && (
        <Badge variant="secondary" className="text-xs">
          Admin
        </Badge>
      )}
    </div>
  )
}
