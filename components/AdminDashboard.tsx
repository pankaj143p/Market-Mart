'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface AdminDashboardProps {
  userInfo: {
    firstName?: string | null
    email?: string
  }
}

const AdminDashboard = ({ userInfo }: AdminDashboardProps) => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {userInfo?.firstName || 'Admin'} 👋
        </h1>
        <p className="text-gray-600">
          Manage your e-commerce store from here
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sanity Studio */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🛠️ Content Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Manage products, categories, brands, and blog content
            </p>
            <Link href="/studio">
              <Button className="w-full">
                Open Sanity Studio
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Orders */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📦 Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              View and manage customer orders
            </p>
            <Link href="/orders">
              <Button className="w-full" variant="outline">
                View Orders
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Products */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🛍️ Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Browse all products in your store
            </p>
            <Link href="/shop">
              <Button className="w-full" variant="outline">
                View Products
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              View sales data and performance metrics
            </p>
            <Button className="w-full" variant="outline" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ⚙️ Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Configure store settings and preferences
            </p>
            <Button className="w-full" variant="outline" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>

        {/* Help */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📚 Help & Docs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Learn how to manage your store effectively
            </p>
            <a 
              href="https://www.sanity.io/docs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="w-full" variant="outline">
                View Documentation
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/studio/desk/product">
            <Button className="w-full" size="lg">
              ➕ Add Product
            </Button>
          </Link>
          <Link href="/studio/desk/category">
            <Button className="w-full" size="lg" variant="outline">
              🏷️ Add Category
            </Button>
          </Link>
          <Link href="/studio/desk/brand">
            <Button className="w-full" size="lg" variant="outline">
              🏢 Add Brand
            </Button>
          </Link>
          <Link href="/studio/desk/blog">
            <Button className="w-full" size="lg" variant="outline">
              📝 Write Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
