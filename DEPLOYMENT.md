# Deploying AMSI Website to Vercel

This document provides step-by-step instructions for deploying the AMSI website to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)

## Deployment Steps

### 1. Push your code to GitHub

1. Create a new repository on GitHub
2. Add the GitHub repository as a remote to your local repository:
   ```bash
   git remote add origin https://github.com/yourusername/amsi-website.git
   ```
3. Push your code to GitHub:
   ```bash
   git push -u origin main
   ```

### 2. Deploy to Vercel

1. Go to [Vercel](https://vercel.com/) and sign up/login (you can use your GitHub account)
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
   - Install Command: npm install
5. Environment Variables: No environment variables are required for this project
6. Click "Deploy"

### 3. Access Your Deployed Website

After deployment is complete, your site will be live at a Vercel URL (e.g., `amsi-website.vercel.app`).

### 4. Set Up Custom Domain (Optional)

To use your custom domain (e.g., `www.amsi.net.in`):

1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" > "Domains"
3. Add your domain
4. Follow Vercel's instructions to configure DNS settings with your domain registrar

### 5. Continuous Deployment

Vercel automatically sets up continuous deployment. Any changes pushed to your GitHub repository's main branch will trigger a new deployment.

## Troubleshooting

- If you encounter build errors, check the build logs in the Vercel dashboard
- Ensure all dependencies are correctly listed in package.json
- Verify that the build command in vercel.json is correct

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)