
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { redirect } from 'next/navigation'
import { isCurrentUserAdmin } from '@/lib/admin'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default async function StudioPage() {
  // Check if current user is admin
  const isAdmin = await isCurrentUserAdmin()
  
  if (!isAdmin) {
    redirect('/sign-in')
  }

  return <NextStudio config={config} />
}


