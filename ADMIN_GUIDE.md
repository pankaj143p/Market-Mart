# Admin Guide for Market Mart E-commerce

## Admin Access & Authentication

### 1. **Accessing Admin Panel**
- **URL**: `https://your-domain.com/studio`
- **Authentication**: Protected by Clerk authentication
- **Admin Emails**: Configure in `/app/studio/[[...tool]]/page.tsx`

### 2. **Admin Setup**
1. Update admin emails in the `isAdmin` function:
```typescript
function isAdmin(email: string): boolean {
  const adminEmails = [
    'admin@yourstore.com',
    'manager@yourstore.com',
    // Add your admin emails here
  ]
  return adminEmails.includes(email)
}
```

2. Users must:
   - Sign up/login via Clerk
   - Have their email added to the admin list
   - Access `/studio` route

## Admin Dashboard Features

### 📦 **Product Management**
- **Add Products**: Create new products with images, descriptions, pricing
- **Edit Products**: Update existing product information
- **Manage Stock**: Track and update inventory levels
- **Product Status**: Set products as "New", "Hot", or "Sale"
- **Featured Products**: Toggle featured status for homepage display
- **Categories**: Assign products to categories
- **Brands**: Associate products with brands

### 🏷️ **Category Management**
- Create and manage product categories
- Organize products by categories
- Set category descriptions and images

### 🏢 **Brand Management**
- Add and manage brands
- Associate products with brands
- Upload brand logos and descriptions

### 📝 **Blog Management**
- Create and publish blog posts
- Manage blog categories
- Add authors to blog posts
- Schedule blog publications

### 📊 **Order Management**
- View customer orders
- Track order status
- Manage order fulfillment
- Customer information

## Admin Workflow

### Daily Tasks:
1. **Check New Orders**
   - Review incoming orders
   - Update order status
   - Process fulfillment

2. **Inventory Management**
   - Monitor stock levels
   - Update product availability
   - Add new products

3. **Content Updates**
   - Update featured products
   - Publish blog content
   - Manage promotions

### Weekly Tasks:
1. **Analytics Review**
   - Check popular products
   - Review sales data
   - Adjust pricing/promotions

2. **Content Strategy**
   - Plan blog content
   - Update product descriptions
   - Manage SEO content

## Security Best Practices

### 1. **Admin Access Control**
- Only add trusted emails to admin list
- Regularly review admin access
- Use strong passwords for Clerk accounts

### 2. **Sanity Security**
- Use environment variables for API tokens
- Limit API token permissions
- Regular security audits

### 3. **Production Considerations**
- Enable CORS restrictions
- Use HTTPS only
- Regular backups

## Troubleshooting

### Common Issues:

1. **Can't Access Studio**
   - Check if email is in admin list
   - Verify Clerk authentication
   - Check network connectivity

2. **Images Not Uploading**
   - Check file size limits
   - Verify image formats (JPG, PNG, WebP)
   - Check Sanity asset permissions

3. **Products Not Appearing**
   - Verify product is published
   - Check category assignments
   - Refresh frontend cache

## Environment Variables

Ensure these are set in production:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
```

## Support & Maintenance

### Regular Maintenance:
- Weekly data backups
- Monthly security reviews
- Quarterly performance optimization
- Update dependencies regularly

### Monitoring:
- Track site performance
- Monitor error logs
- Check API usage
- Review user feedback

## Quick Reference

### Sanity Studio Shortcuts:
- `Ctrl/Cmd + S`: Save document
- `Ctrl/Cmd + Enter`: Publish document
- `Esc`: Close modals/panels
- `Ctrl/Cmd + K`: Quick search

### Important URLs:
- Admin Panel: `/studio`
- Sign In: `/sign-in`
- Main Site: `/`
- Orders: `/orders`
- Products: `/shop`
