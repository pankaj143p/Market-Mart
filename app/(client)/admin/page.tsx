import { getCurrentUserAdminInfo } from '@/lib/admin'
import AdminDashboard from '@/components/AdminDashboard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Market Mart',
  description: 'Admin panel for managing Market Mart e-commerce store',
}

export default async function AdminPage() {
  const { isAdmin, user, userEmail } = await getCurrentUserAdminInfo()

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">🚫 Access Denied</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">You don't have admin privileges.</p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Create serializable user info
  const userInfo = {
    firstName: user?.firstName || null,
    email: userEmail
  }

  return <AdminDashboard userInfo={userInfo} />
}
