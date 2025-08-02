# 🔧 Clerk Setup Guide

## Current Status
⚠️ **Admin authentication is temporarily disabled** to allow you to access Sanity Studio while we set up Clerk properly.

## Quick Access (Temporary)
You can now access Sanity Studio at:
- **URL**: `http://localhost:3000/studio`
- **Status**: ✅ Working (no authentication required temporarily)

## Setting Up Clerk Authentication

### Step 1: Get Clerk Credentials

1. **Go to Clerk Dashboard**: https://dashboard.clerk.com/
2. **Sign up or log in** to your Clerk account
3. **Create a new application** or select existing one
4. **Get your API keys**:
   - Go to **API Keys** section
   - Copy **Publishable Key** (starts with `pk_`)
   - Copy **Secret Key** (starts with `sk_`)

### Step 2: Add Clerk Keys to Environment

Update your `.env.local` file:

```bash
# Replace these with your actual Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_publishable_key_here"
CLERK_SECRET_KEY="sk_test_your_secret_key_here"
```

### Step 3: Configure Clerk Dashboard

In your Clerk dashboard:

1. **Add Domain**: Add `http://localhost:3000` to allowed domains
2. **Sign-up/Sign-in**: Configure your preferred authentication methods
3. **User Management**: Enable user profiles

### Step 4: Re-enable Admin Protection

Once Clerk is configured, update `/app/studio/[[...tool]]/page.tsx`:

```typescript
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { redirect } from 'next/navigation'
import { isCurrentUserAdmin } from '@/lib/admin'

export const dynamic = 'force-static'
export { metadata, viewport } from 'next-sanity/studio'

export default async function StudioPage() {
  // Re-enable admin checks
  const isAdmin = await isCurrentUserAdmin()
  
  if (!isAdmin) {
    redirect('/sign-in')
  }

  return <NextStudio config={config} />
}
```

## Current Admin Configuration

Your admin email is set to: `pankaj114477pankaj@gmail.com`

Once Clerk is set up:
1. Sign up/Sign in with this email in Clerk
2. You'll have full admin access to Sanity Studio
3. All admin routes will be protected

## Testing Steps

### 1. Test Sanity Studio (Current)
- Visit: `http://localhost:3000/studio`
- Should work without authentication

### 2. Test Admin Dashboard
- Visit: `http://localhost:3000/admin`
- May show access denied until Clerk is configured

### 3. After Clerk Setup
- Visit: `http://localhost:3000/studio`
- Should redirect to sign-in if not authenticated
- Should allow access if signed in with admin email

## Troubleshooting

### "Clerk middleware error"
- Add proper Clerk environment variables
- Restart development server
- Ensure middleware.ts is configured correctly

### "Access Denied"
- Check if your email matches `ADMIN_EMAILS` in `.env.local`
- Ensure you're signed in with Clerk
- Verify Clerk keys are correct

## Next Steps

1. **Get Clerk keys** from dashboard
2. **Add keys** to `.env.local`
3. **Restart server**: `npm run dev`
4. **Test authentication** flow
5. **Re-enable admin protection** in studio

## Support

- **Clerk Docs**: https://clerk.com/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js Docs**: https://nextjs.org/docs
