import Link from 'next/link'
import { Button } from './ui/button'
import { getCurrentUserAdminInfo } from '@/lib/admin'

const AdminHeader = async () => {
  const { isAdmin, user } = await getCurrentUserAdminInfo()

  if (!isAdmin) return null

  return (
    <div className="bg-blue-600 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">
            👋 Admin: {user?.firstName || 'Admin'}
          </span>
          <span className="text-xs opacity-75">
            Manage your store
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/studio">
            <Button size="sm" variant="secondary">
              📊 Admin Panel
            </Button>
          </Link>
          <Link href="/orders">
            <Button size="sm" variant="outline">
              📦 Orders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
