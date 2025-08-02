import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2025-03-20'
})

// Function to upload image to Sanity
async function uploadImage(imageUrl: string) {
  try {
    const response = await fetch(imageUrl)
    const buffer = await response.arrayBuffer()
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: path.basename(imageUrl)
    })
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

// Function to find or create category
async function findOrCreateCategory(categoryName: string) {
  const query = `*[_type == "category" && name == $categoryName][0]`
  let category = await client.fetch(query, { categoryName })
  
  if (!category) {
    category = await client.create({
      _type: 'category',
      name: categoryName,
      slug: {
        _type: 'slug',
        current: categoryName.toLowerCase().replace(/\s+/g, '-')
      }
    })
  }
  
  return {
    _type: 'reference',
    _ref: category._id
  }
}

// Function to find or create brand
async function findOrCreateBrand(brandName: string) {
  const query = `*[_type == "brand" && name == $brandName][0]`
  let brand = await client.fetch(query, { brandName })
  
  if (!brand) {
    brand = await client.create({
      _type: 'brand',
      name: brandName,
      slug: {
        _type: 'slug',
        current: brandName.toLowerCase().replace(/\s+/g, '-')
      }
    })
  }
  
  return {
    _type: 'reference',
    _ref: brand._id
  }
}

// Function to import products from JSON file
async function importProductsFromJSON(filePath: string) {
  try {
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    
    for (const productData of jsonData.products) {
      // Upload images
      const images = []
      if (productData.images && Array.isArray(productData.images)) {
        for (const imageUrl of productData.images) {
          const uploadedImage = await uploadImage(imageUrl)
          if (uploadedImage) images.push(uploadedImage)
        }
      }
      
      // Get category references
      const categories = []
      if (productData.categories && Array.isArray(productData.categories)) {
        for (const categoryName of productData.categories) {
          const categoryRef = await findOrCreateCategory(categoryName)
          categories.push(categoryRef)
        }
      }
      
      // Get brand reference
      let brand = null
      if (productData.brand) {
        brand = await findOrCreateBrand(productData.brand)
      }
      
      // Create product
      const product = {
        _type: 'product',
        name: productData.name,
        slug: {
          _type: 'slug',
          current: productData.slug || productData.name.toLowerCase().replace(/\s+/g, '-')
        },
        description: productData.description,
        price: productData.price,
        discount: productData.discount || 0,
        stock: productData.stock || 0,
        status: productData.status || 'new',
        variant: productData.variant || 'others',
        isFeatured: productData.isFeatured || false,
        images,
        categories,
        brand
      }
      
      const result = await client.create(product)
      console.log(`Product "${result.name}" added successfully!`)
    }
    
    console.log('All products imported successfully!')
  } catch (error) {
    console.error('Error importing products:', error)
  }
}

// Example usage
// importProductsFromJSON('./data/products.json')
