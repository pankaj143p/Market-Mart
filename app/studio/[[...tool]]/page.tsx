
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default async function StudioPage() {
  // Temporarily disable admin checks until Clerk is properly configured
  // TODO: Re-enable after setting up CLERK environment variables
  
  // Uncomment these lines after adding Clerk keys to .env.local:
  /*
  const isAdmin = await isCurrentUserAdmin()
  if (!isAdmin) {
    redirect('/sign-in')
  }
  */

  return <NextStudio config={config} />
}


