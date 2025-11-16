# GitHub Pages Deployment Guide

## 🔒 Secure Deployment Setup

This project uses GitHub Actions to deploy to GitHub Pages while keeping API keys secure.

## Setup Instructions

### 1. Add GitHub Secrets

Go to your repository: **Settings → Secrets and variables → Actions → New repository secret**

Add the following secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `EMAILJS_PUBLIC_KEY` | `7x3luzuFRRpIFWHsC` | EmailJS public key |
| `EMAILJS_SERVICE_ID` | `service_29ac2ac` | EmailJS service ID |
| `EMAILJS_TEMPLATE_ID` | `template_q4d9eu4` | EmailJS template ID |
| `AI_API_KEY` | `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` | OpenRouter API key |
| `AI_MODEL` | `tngtech/deepseek-r1t2-chimera:free` | AI model name |
| `AI_PROVIDER` | `openrouter` | AI provider name |

### 2. Enable GitHub Pages

1. Go to **Settings → Pages**
2. Under "Source", select **GitHub Actions**
3. Save

### 3. Deploy

**Automatic Deployment:**
- Every push to `master` branch automatically triggers deployment
- Check the **Actions** tab to monitor deployment progress

**Manual Deployment:**
- Go to **Actions** tab
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow"

### 4. View Your Site

After successful deployment, your site will be available at:
`https://r-kouki.github.io/`

## 🔐 Security Notes

- ✅ API keys are stored as GitHub Secrets (encrypted)
- ✅ Environment files with real keys are git-ignored
- ✅ Keys are only injected during build time on GitHub servers
- ✅ Built files don't expose secrets in plain text
- ⚠️ EmailJS public key is intentionally "public" (it's meant to be client-side)
- ⚠️ The AI API key will be visible in browser if someone inspects the compiled code

## 📝 Local Development

For local development, keep your actual `environment.ts` and `environment.prod.ts` files (they're git-ignored).

If you lose them, copy from templates:
```bash
cp src/environments/environment.template.ts src/environments/environment.ts
cp src/environments/environment.prod.template.ts src/environments/environment.prod.ts
```

Then manually add your API keys.

## 🚨 Important Notes

### EmailJS Keys
EmailJS public keys are designed to be exposed on the client side. They're safe to include in your frontend code. However, make sure to:
- Set up domain restrictions in your EmailJS dashboard
- Enable CAPTCHA or rate limiting if needed

### AI API Keys
⚠️ **WARNING**: Exposing AI API keys on the frontend is risky as users can extract them from the compiled JavaScript and abuse your quota.

**Better approach for production:**
1. Create a backend API (Node.js/Express server)
2. Move AI calls to the backend
3. Keep API key on the server only
4. Have frontend call your backend API

For now, this works for a personal portfolio, but consider implementing a backend if you notice unusual usage.

## 🔄 Updating Secrets

To update secrets:
1. Go to **Settings → Secrets and variables → Actions**
2. Click on the secret name
3. Click "Update secret"
4. Enter new value and save

## 🐛 Troubleshooting

**Build fails:**
- Check that all secrets are set correctly
- View error logs in Actions tab

**Site not updating:**
- Wait 2-5 minutes after deployment completes
- Clear browser cache (Ctrl+Shift+R)
- Check Actions tab for successful deployment

**API not working:**
- Verify secrets are correct
- Check browser console for errors
- Test EmailJS from their dashboard
