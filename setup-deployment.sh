#!/bin/bash

# Setup script for GitHub Pages deployment with secure secrets

echo "🚀 GitHub Pages Deployment Setup"
echo "================================="
echo ""
echo "This script will help you set up secure deployment to GitHub Pages."
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not a git repository. Please run 'git init' first."
    exit 1
fi

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI (gh) is not installed."
    echo "   You'll need to add secrets manually through GitHub web interface."
    echo ""
    echo "   Install GitHub CLI: https://cli.github.com/"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
    MANUAL_MODE=true
else
    MANUAL_MODE=false
fi

echo ""
echo "📋 Current API Keys (from your environment files):"
echo "---------------------------------------------------"

# Read current values
if [ -f "src/environments/environment.ts" ]; then
    EMAILJS_PUBLIC_KEY=$(grep "publicKey:" src/environments/environment.ts | sed "s/.*publicKey: '\(.*\)'.*/\1/")
    EMAILJS_SERVICE_ID=$(grep "serviceId:" src/environments/environment.ts | sed "s/.*serviceId: '\(.*\)'.*/\1/")
    EMAILJS_TEMPLATE_ID=$(grep "templateId:" src/environments/environment.ts | sed "s/.*templateId: '\(.*\)'.*/\1/")
    AI_API_KEY=$(grep "apiKey:" src/environments/environment.ts | sed "s/.*apiKey: '\(.*\)'.*/\1/")
    AI_MODEL=$(grep "model:" src/environments/environment.ts | sed "s/.*model: '\(.*\)'.*/\1/")
    AI_PROVIDER=$(grep "provider:" src/environments/environment.ts | sed "s/.*provider: '\(.*\)'.*/\1/")
    
    echo "EMAILJS_PUBLIC_KEY: $EMAILJS_PUBLIC_KEY"
    echo "EMAILJS_SERVICE_ID: $EMAILJS_SERVICE_ID"
    echo "EMAILJS_TEMPLATE_ID: $EMAILJS_TEMPLATE_ID"
    echo "AI_API_KEY: ${AI_API_KEY:0:20}..."
    echo "AI_MODEL: $AI_MODEL"
    echo "AI_PROVIDER: $AI_PROVIDER"
else
    echo "❌ environment.ts not found!"
    exit 1
fi

echo ""

if [ "$MANUAL_MODE" = true ]; then
    echo "📝 Manual Setup Instructions:"
    echo "=============================="
    echo ""
    echo "1. Go to your GitHub repository"
    echo "2. Click Settings → Secrets and variables → Actions"
    echo "3. Click 'New repository secret'"
    echo "4. Add each of these secrets:"
    echo ""
    echo "   Name: EMAILJS_PUBLIC_KEY"
    echo "   Value: $EMAILJS_PUBLIC_KEY"
    echo ""
    echo "   Name: EMAILJS_SERVICE_ID"
    echo "   Value: $EMAILJS_SERVICE_ID"
    echo ""
    echo "   Name: EMAILJS_TEMPLATE_ID"
    echo "   Value: $EMAILJS_TEMPLATE_ID"
    echo ""
    echo "   Name: AI_API_KEY"
    echo "   Value: $AI_API_KEY"
    echo ""
    echo "   Name: AI_MODEL"
    echo "   Value: $AI_MODEL"
    echo ""
    echo "   Name: AI_PROVIDER"
    echo "   Value: $AI_PROVIDER"
    echo ""
    echo "5. Enable GitHub Pages:"
    echo "   Settings → Pages → Source: GitHub Actions"
    echo ""
    echo "6. Push your code to trigger deployment!"
    echo ""
else
    echo "🔐 Setting GitHub Secrets..."
    echo ""
    
    gh secret set EMAILJS_PUBLIC_KEY --body "$EMAILJS_PUBLIC_KEY"
    gh secret set EMAILJS_SERVICE_ID --body "$EMAILJS_SERVICE_ID"
    gh secret set EMAILJS_TEMPLATE_ID --body "$EMAILJS_TEMPLATE_ID"
    gh secret set AI_API_KEY --body "$AI_API_KEY"
    gh secret set AI_MODEL --body "$AI_MODEL"
    gh secret set AI_PROVIDER --body "$AI_PROVIDER"
    
    echo "✅ All secrets have been set!"
    echo ""
    echo "📄 Enable GitHub Pages:"
    echo "   Go to Settings → Pages → Source: GitHub Actions"
    echo ""
fi

echo "✅ Setup complete!"
echo ""
echo "🚀 To deploy:"
echo "   1. Commit all changes: git add . && git commit -m 'Setup deployment'"
echo "   2. Push to GitHub: git push origin master"
echo "   3. Check Actions tab for deployment progress"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for more details"
