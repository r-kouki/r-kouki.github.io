# 🚀 Quick Deployment Steps

## Option 1: Automated Setup (Recommended)

```bash
# Run the setup script
./setup-deployment.sh

# Follow the instructions, then:
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin master
```

## Option 2: Manual Setup

### Step 1: Add GitHub Secrets
Go to: **Repository Settings → Secrets and variables → Actions → New repository secret**

Add these 6 secrets:
- `EMAILJS_PUBLIC_KEY` = `7x3luzuFRRpIFWHsC`
- `EMAILJS_SERVICE_ID` = `service_29ac2ac`
- `EMAILJS_TEMPLATE_ID` = `template_q4d9eu4`
- `AI_API_KEY` = `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`
- `AI_MODEL` = `tngtech/deepseek-r1t2-chimera:free`
- `AI_PROVIDER` = `openrouter`

### Step 2: Enable GitHub Pages
Go to: **Repository Settings → Pages**
- Source: Select **GitHub Actions**
- Save

### Step 3: Push Code
```bash
git add .
git commit -m "Setup deployment"
git push origin master
```

### Step 4: Monitor Deployment
- Go to **Actions** tab in your repository
- Watch the "Deploy to GitHub Pages" workflow
- Once complete, visit: `https://r-kouki.github.io/`

## 🔒 What's Protected?
- ✅ Your actual `environment.ts` files are git-ignored
- ✅ API keys stored as encrypted GitHub Secrets
- ✅ Keys only injected during build on GitHub servers
- ✅ Template files (without real keys) are committed

## 🎯 Site URL
After deployment: `https://r-kouki.github.io/`

## ⚡ Re-deployment
Just push to master branch - automatic deployment triggers!

## 📖 Need Help?
See `DEPLOYMENT_GUIDE.md` for detailed instructions.
