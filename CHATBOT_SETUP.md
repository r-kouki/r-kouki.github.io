# AI Chatbot Setup Instructions

The portfolio website now includes an intelligent AI chatbot that answers questions about Abderrahmen's skills, experience, projects, and education.

## Features

- **Context-Aware**: The chatbot has access to all portfolio data including:
  - Skills and certifications
  - Work experience
  - All 16 projects
  - Education background
  - Awards and achievements
  - Contact information

- **Restricted Scope**: The chatbot only answers questions related to the portfolio. If asked about unrelated topics, it politely redirects users back to portfolio-related questions.

- **Two AI Provider Options**:
  - OpenAI (GPT-3.5-turbo or GPT-4)
  - Anthropic Claude (Claude 3 Haiku)
  - **Google Gemini (Currently Configured)** ✓

## Setup Instructions

### 1. Get an API Key

Choose one of these AI providers:

**Option A: Google Gemini (Currently Configured)** ✓
1. Visit [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key (starts with `AIza...`)

**Option B: OpenAI**
1. Visit [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Copy the key (starts with `sk-...`)

**Option C: Anthropic Claude**
1. Visit [https://console.anthropic.com/](https://console.anthropic.com/)
2. Sign up or log in
3. Go to API Keys section
4. Create a new API key
5. Copy the key

### 2. Configure the Environment

**Your Gemini API is already configured!** ✓

The environment files have been set up with your Gemini API key:

**File: `src/environments/environment.ts`**
```typescript
ai: {
  apiKey: 'AIzaSyAN6a1h7HASq-VmWMXy05zZxpcL3tLbqKg',
  model: 'gemini-1.5-flash',
  provider: 'gemini'
}
```

If you want to use a different provider later, edit both environment files:

**For OpenAI:**
```typescript
ai: {
  apiKey: 'your-openai-key',
  model: 'gpt-3.5-turbo',
  provider: 'openai'
}
```

**For Anthropic:**
```typescript
ai: {
  apiKey: 'your-anthropic-key',
  model: 'claude-3-haiku-20240307',
  provider: 'anthropic'
}
```

### 3. Model Options

**Google Gemini Models (Currently Using):** ✓
- `gemini-1.5-flash` - Fast and efficient (Currently configured)
- `gemini-1.5-pro` - More capable, balanced performance
- `gemini-pro` - Standard model

**OpenAI Models:**
- `gpt-3.5-turbo` - Fast and cost-effective
- `gpt-4` - More capable but slower and more expensive
- `gpt-4-turbo` - Balance between speed and capability

**Anthropic Models:**
- `claude-3-haiku-20240307` - Fast and efficient
- `claude-3-sonnet-20240229` - Balanced performance
- `claude-3-opus-20240229` - Most capable

### 4. Set the Provider

**Currently set to: `gemini`** ✓

In the environment files, you can change the `provider` field:
- For Gemini: `provider: 'gemini'` (Current)
- For OpenAI: `provider: 'openai'`
- For Anthropic: `provider: 'anthropic'`

## Cost Considerations

- **Google Gemini 1.5 Flash**: FREE tier with 15 requests/minute (Currently using) ✓
- **Google Gemini 1.5 Pro**: FREE tier with lower limits
- **OpenAI GPT-3.5-turbo**: ~$0.002 per 1K tokens
- **OpenAI GPT-4**: ~$0.03 per 1K tokens
- **Claude 3 Haiku**: ~$0.00025 per 1K tokens

Each chatbot response uses approximately 500-1000 tokens. **With Gemini's free tier, your chatbot is completely free to use for personal portfolio purposes!**

## Security Best Practices

⚠️ **IMPORTANT**: Never commit your API keys to version control!

**Note:** The Gemini API key has been added to your environment files. For security:

1. Add environment files to `.gitignore` (already configured)
2. Before committing to GitHub, consider:
   - Using GitHub Secrets for deployment
   - Setting up a backend proxy to hide API keys
   - Using environment variables in your hosting platform

3. For production deployment:
   - Netlify: Site settings → Environment variables
   - Vercel: Project settings → Environment Variables
   - GitHub Pages: Use GitHub Secrets with Actions

4. Consider using a backend proxy to hide API keys from the client (recommended for production)

## Testing the Chatbot

1. Start the development server:
   ```bash
   npm start
   ```

2. Navigate to the Contact section at the bottom of the page

3. Try asking questions like:
   - "What are Abderrahmen's main skills?"
   - "Tell me about the MLOps project"
   - "What certifications does Abderrahmen have?"
   - "What programming languages does Abderrahmen know?"
   - "What is Abderrahmen's email?"

The chatbot will only answer questions related to the portfolio data and will politely redirect off-topic questions.

## Troubleshooting

**Chatbot not responding / "trouble connecting" message**

This is often due to CORS (Cross-Origin Resource Sharing) restrictions. The Gemini API may not allow direct calls from browsers. Here are solutions:

**Solution 1: Enable Gemini API (Most Common Fix)**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the "Generative Language API"
3. Make sure your API key has permissions for this API

**Solution 2: Check API Key**
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Verify your API key is active
3. Check if it has access to Gemini models

**Solution 3: Test API in Browser Console**
Open browser console (F12) and run:
```javascript
fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    contents: [{parts: [{text: 'Hello'}]}]
  })
}).then(r => r.json()).then(console.log)
```

**Solution 4: Use a Backend Proxy (Recommended for Production)**
For production, create a simple backend endpoint that calls Gemini API and proxy requests through it. This avoids CORS issues and hides your API key.

**Other Common Issues:**

**Error: API key not configured**
- Make sure you've replaced `YOUR_API_KEY_HERE` with your actual API key

**Error: API error 401**
- Your API key is invalid or expired
- Generate a new API key from your provider

**Error: API error 429**
- You've exceeded your rate limit
- Wait a few minutes or upgrade your API plan

**Error: API error 403**
- API key doesn't have permission for this API
- Enable the Generative Language API in Google Cloud Console

**Chatbot shows loading forever**
- Check browser console for errors (F12)
- Verify your API key is correctly configured
- Ensure you have internet connection (chatbot requires API calls)
- Check if CORS is blocking the request

## Files Modified

1. **New Files Created:**
   - `src/app/services/chatbot.service.ts` - AI chatbot service

2. **Files Updated:**
   - `src/app/features/contact/contact.component.ts` - Integrated chatbot
   - `src/environments/environment.ts` - Added AI configuration
   - `src/environments/environment.prod.ts` - Added AI configuration
   - `src/app/features/projects/projects.component.ts` - Updated project images

3. **Image Updates:**
   - All 16 projects now have proper matching images from the assets folder

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify API key configuration
3. Test with a simple question first
4. Check your API provider's status page
