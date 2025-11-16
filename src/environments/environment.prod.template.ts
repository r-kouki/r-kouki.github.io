// Template file - actual values injected during build
export const environment = {
  production: true,
  emailjs: {
    publicKey: '${EMAILJS_PUBLIC_KEY}',
    serviceId: '${EMAILJS_SERVICE_ID}',
    templateId: '${EMAILJS_TEMPLATE_ID}'
  },
  ai: {
    apiKey: '${AI_API_KEY}',
    model: '${AI_MODEL}',
    provider: '${AI_PROVIDER}'
  }
};
