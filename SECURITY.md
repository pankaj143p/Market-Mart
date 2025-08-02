# Admin Security Guide

## 🔒 Secure Admin Setup

Your admin system is now properly secured! Here's how it works and how to configure it safely.

## Security Levels

### ✅ **Current Security (Recommended)**
- Admin emails stored in **server-side environment variables**
- No admin emails in source code
- Server-side verification only
- Protected API routes

### ❌ **Previous Security Issues**
- ~~Admin emails hardcoded in source files~~
- ~~Anyone with code access could add themselves~~
- ~~Client-side admin checks~~

## Configuration

### 1. **Environment Variables Setup**

Add these to your production environment (Vercel, Netlify, etc.):

```bash
# Option 1: Multiple admins (comma-separated)
ADMIN_EMAILS="admin@yourstore.com,manager@yourstore.com,owner@yourstore.com"

# Option 2: Single super admin
SUPER_ADMIN_EMAIL="super-admin@yourstore.com"
```

### 2. **Local Development**

Update your `.env.local`:

```bash
# Replace with your actual admin emails
ADMIN_EMAILS="your-email@gmail.com"
# OR
SUPER_ADMIN_EMAIL="your-email@gmail.com"
```

## How It Works

### 🛡️ **Security Flow**

1. **User Authentication**: Clerk handles user login
2. **Server-Side Check**: Email is verified against environment variables
3. **Access Control**: Only verified admins can access admin areas
4. **No Code Access**: Admin emails are NOT in source code

### 🚀 **Admin Access Points**

- **Studio**: `/studio` - Full Sanity CMS access
- **Dashboard**: `/admin` - Admin overview
- **API Check**: `/api/admin/check` - Verify admin status

## Security Best Practices

### ✅ **DO**
- Keep admin emails in environment variables only
- Use strong passwords for Clerk accounts
- Regularly review admin access
- Monitor admin activity
- Use HTTPS in production
- Backup your data regularly

### ❌ **DON'T**
- Put admin emails in source code
- Share admin credentials
- Use weak passwords
- Give admin access unnecessarily
- Commit `.env.local` to git

## Production Deployment

### **Vercel**
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add: `ADMIN_EMAILS` = `your-email@domain.com,other-admin@domain.com`

### **Netlify**
1. Site settings → Environment variables
2. Add: `ADMIN_EMAILS` = `your-email@domain.com`

### **Other Platforms**
Add environment variables through your hosting platform's dashboard.

## Admin Management

### **Adding New Admins**
1. Update environment variable: `ADMIN_EMAILS="existing@email.com,new-admin@email.com"`
2. Redeploy your application
3. New admin can now access admin areas

### **Removing Admins**
1. Remove email from environment variable
2. Redeploy application
3. Access is immediately revoked

### **Emergency Access**
If you lose admin access:
1. Update environment variables in hosting platform
2. Add your email to `ADMIN_EMAILS`
3. Redeploy
4. Access restored

## Monitoring & Auditing

### **Check Admin Status**
Use the API endpoint to verify admin access:
```bash
curl https://your-domain.com/api/admin/check
```

### **Admin Activity**
- Monitor Sanity Studio activity logs
- Check Clerk authentication logs
- Review deployment logs for environment changes

## Additional Security Measures

### **Two-Factor Authentication**
Enable 2FA in Clerk dashboard for all admin users.

### **IP Restrictions** (Optional)
Add IP whitelist in your hosting platform for extra security.

### **Regular Audits**
- Monthly: Review admin list
- Quarterly: Security audit
- Yearly: Access review

## Troubleshooting

### **Can't Access Admin Areas**
1. Check if your email is in `ADMIN_EMAILS`
2. Verify environment variables are set
3. Check Clerk authentication
4. Try signing out and back in

### **Environment Variables Not Working**
1. Verify exact variable names
2. Check for typos in emails
3. Ensure no extra spaces
4. Redeploy after changes

### **Still Have Questions?**
- Check Clerk documentation for auth issues
- Review Sanity docs for CMS questions
- Verify environment variable syntax

## Summary

Your admin system is now secure with:
- ✅ Server-side email verification
- ✅ Environment variable protection
- ✅ No hardcoded admin emails
- ✅ Secure API endpoints
- ✅ Proper access control

**Nobody can make themselves admin** unless they have access to your hosting platform's environment variables, which requires proper credentials and permissions.
