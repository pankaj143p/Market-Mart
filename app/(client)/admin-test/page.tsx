import { getCurrentUserAdminInfo } from '@/lib/admin'

export default async function AdminTestPage() {
  const { isAdmin, user, userEmail } = await getCurrentUserAdminInfo()

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-bold mb-4">Admin Test Page</h1>
      <div className="space-y-4">
        <p><strong>Is Admin:</strong> {isAdmin ? '✅ Yes' : '❌ No'}</p>
        <p><strong>User Email:</strong> {userEmail || 'Not logged in'}</p>
        <p><strong>User Name:</strong> {user?.firstName || 'N/A'}</p>
        <p><strong>Admin Emails from Env:</strong> {process.env.ADMIN_EMAILS || 'Not set'}</p>
      </div>
      
      {isAdmin ? (
        <div className="mt-8 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold text-green-800">🎉 Admin Access Granted!</h2>
          <p className="text-green-600">You can access the admin areas.</p>
        </div>
      ) : (
        <div className="mt-8 p-4 bg-red-100 rounded">
          <h2 className="text-lg font-semibold text-red-800">🚫 No Admin Access</h2>
          <p className="text-red-600">Your email is not in the admin list.</p>
        </div>
      )}
    </div>
  )
}
