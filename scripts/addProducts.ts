import { createClient } from '@sanity/client'

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false, // Set to false for write operations
  token: process.env.SANITY_API_TOKEN, // You'll need to add this to your .env.local
  apiVersion: '2025-03-20'
})

// Example product data
const sampleProducts = [
  {
    _type: 'product',
    name: 'iPhone 15 Pro',
    slug: {
      _type: 'slug',
      current: 'iphone-15-pro'
    },
    description: 'Latest iPhone with advanced features',
    price: 999,
    discount: 10,
    stock: 50,
    status: 'new',
    variant: 'gadget',
    isFeatured: true,
    // Note: For images and references, you'll need to upload images first
    // and get category/brand references
  },
  {
    _type: 'product',
    name: 'Samsung Galaxy S24',
    slug: {
      _type: 'slug',
      current: 'samsung-galaxy-s24'
    },
    description: 'Powerful Android smartphone',
    price: 899,
    discount: 5,
    stock: 30,
    status: 'hot',
    variant: 'gadget',
    isFeatured: false,
  }
]

async function addProducts() {
  try {
    for (const product of sampleProducts) {
      const result = await client.create(product)
      console.log('Product added:', result.name)
    }
    console.log('All products added successfully!')
  } catch (error) {
    console.error('Error adding products:', error)
  }
}

// Run the function
addProducts()
