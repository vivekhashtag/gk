# Deployment Guide - Gurukrupa Shravayantra Kendra Website

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier works perfectly)
- Git installed locally

## 🔗 Step 1: Push to GitHub

### Option A: Create Repository via GitHub Website (Recommended)

1. **Go to GitHub** and create a new repository:
   - Visit: https://github.com/new
   - Repository name: `gurukrupa-website` (or your preferred name)
   - Description: "Official website for Gurukrupa Shravayantra Kendra"
   - Keep it **Private** or **Public** (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Copy the repository URL** (should look like):
   ```
   https://github.com/YOUR-USERNAME/gurukrupa-website.git
   ```

3. **Add GitHub as remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/gurukrupa-website.git
   git branch -M main
   git push -u origin main
   ```

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create gurukrupa-website --private --source=. --remote=origin --push
```

## 🚀 Step 2: Deploy to Vercel

### Method 1: Via Vercel Website (Easiest)

1. **Go to Vercel**:
   - Visit: https://vercel.com/new
   - Sign in with your GitHub account

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select your GitHub account
   - Find and select `gurukrupa-website`
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Environment Variables** (if needed):
   - For now, none are required
   - Click "Deploy"

5. **Wait for Deployment**:
   - First deployment takes 1-2 minutes
   - You'll get a live URL like: `https://gurukrupa-website.vercel.app`

### Method 2: Via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? `gurukrupa-website`
   - In which directory is your code located? `./`
   - Want to override the settings? **N**

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## 🌐 Step 3: Configure Custom Domain (Optional)

If you have a custom domain like `gurukrupask.com`:

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Settings** (example for Cloudflare/GoDaddy):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.21.21
   ```

## 📝 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All animations work
- [ ] Contact form functions properly
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags are present (check page source)
- [ ] Google Analytics added (if needed)
- [ ] Performance checked on Google PageSpeed Insights

## 🔄 Future Updates

Whenever you make changes:

```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will **automatically deploy** your changes within 1-2 minutes!

## 🛠️ Useful Vercel Commands

```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs

# Remove deployment
vercel remove PROJECT-NAME

# View project details
vercel inspect
```

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional)

1. Create a Google Analytics account
2. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to `app/layout.tsx`:

```tsx
// Add to <head> section
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

### Vercel Analytics

1. In Vercel Dashboard → Analytics
2. Enable Web Analytics
3. Enable Speed Insights
4. View real-time traffic and performance

## 🔒 Security Best Practices

1. **Environment Variables**: Use Vercel Environment Variables for sensitive data
2. **HTTPS**: Automatically enabled by Vercel
3. **Contact Form**: Consider adding reCAPTCHA for spam protection
4. **Rate Limiting**: Add for contact form submissions

## 📞 Support

For deployment issues:
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Contact**: sales.gurukrupask@gmail.com

## 🎉 You're Live!

Congratulations! Your website is now live and automatically deploys on every push to GitHub!

**Production URL**: Check Vercel dashboard for your live URL

---

**Deployed with Vercel • Built with Next.js**
