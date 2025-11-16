import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private portfolioContext = '';
  private websiteData = `
WEBSITE SECTIONS AND DATA:

## ABOUT
Abderrahmen Kouki is a Data Science and AI Automation Engineer specializing in building intelligent automated systems that integrate machine learning, data analytics, and DevOps principles.

PERSONALITY & INTERESTS:
- Tech & Engineering: IT student who switched from mathematics after discovering a passion for AI and problem-solving. Builds intelligent remediation tools, smart deduplication systems, and statement-cleaning solutions. Creates clean interfaces and experiments with ML models, MLOps pipelines, automation scripts, and GPU setups (including RTX 3090). Loves debugging strange issues like Edge profile migrations, Firebase export errors, and CPU undervolting. Big fan of understanding how things work, technology evolution, and invention history.

- Builder & DIY Mindset: If something doesn't exist, will build it - gym systems, booking automations, CRUD apps, anything. Skilled at fixing electronics, plumbing, mechanical parts, electrical setups, and car issues. Loves opening things to see how they work and enjoys home improvement and hands-on projects.

- AI Personality & Logic: Combines math logic with coding creativity for practical solutions. Enjoys breaking things to fix them better and automating daily life. Switches between deep focus coder mode and trying new recipes at 1AM.

- Team & Community: Strong team player who enjoys collaborative problem-solving. Active in IEEE exploring real-world engineering challenges. Likes teaching and simplifying tech concepts.

- Anime, Music & Culture: Loves anime and manga for creative inspiration. Music is always on during coding, gym, cooking, and city exploration. Enjoys discovering new cultures and understanding how people live worldwide.

- Food, Fitness & Lifestyle: Daily CrossFit training, currently getting leaner. Prefers natural food and cooks healthy meals like keto mayo and stir-fries. Loves nature, swimming, outdoor activities, and discovering new places.

- Personality Highlights: Tunisian and proud, adapts projects to local context. Turns conversations into brainstorming sessions. Organizes spaces visually with evolving desk setups. Curious explorer always learning, tinkering, and improving.

## EXPERIENCE
1. DS Informatique, Paris (Remote) - Python Developer Intern (July-August 2025)
   - Developed automated factory timeclock integration system
   - Built automated workflows for payroll calculation and attendance tracking
   - Created RAG system for intelligent report generation
   Skills: Python, RAG, Automation, Workflow Design

2. Data Soft, Sousse, Tunisia - Software Development Intern (July-August 2024)
   - Developed ERP extension for automated financial data transfer
   - Integrated data validation and reporting components
   Skills: WinDev, ERP Systems, Financial Compliance, UML

3. Bureau Expert-Comptable Moncef Zayani, Tunisia - Accounting & IT Intern (July 2023)
   - Generated compliance reports for tax regulations
   - Optimized database connectivity and system performance
   Skills: Accounting Software, Database Management

## SKILLS
Programming: Python (95%), TypeScript (90%), Java (80%), C# (85%), R (85%), React, Flask, WLanguage (WinDev)

AI & ML: Machine Learning (95%), Deep Learning (90%), NLP & RAG (90%), XGBoost, LLM Fine-tuning (LoRA, QLoRA, OOTDiffusion), AI Agents (LangGraph, CrewAI, Ollama), Data Analytics (95%), Prompt Engineering (85%)

MLOps & Automation: Docker (90%), Podman, Kubernetes (75%), MLflow (85%), DVC, GitLab CI/CD (85%), Amazon S3, MinIO, CRISP-ML(Q), FastAPI (90%), n8n (85%), Grafana, Prometheus, Azure ML (80%), MCP Protocols (80%)

Data Engineering: Spark (85%), Hadoop (85%), SQL/PostgreSQL (90%), Supabase, ETL Pipelines, Data Warehousing, Snowflake

Web Development: MERN/MEAN Stack (85%), Angular (90%), GraphQL (80%), PHP, .NET (80%), REST APIs, Microservices (80%)

Data Visualization: Power BI (85%), R/ggplot2 (85%), Pandas (95%), Matplotlib/Seaborn (90%)

Databases & Big Data: SQL/PostgreSQL (90%), MongoDB (85%), Apache Kafka (80%), Apache Spark (85%)

DevOps & Cloud: Azure (85%), AWS (80%), Git/GitHub/GitLab (95%), Kubernetes (75%)

## TOOLS
LangChain, LangGraph, CrewAI, Ollama, n8n, MLflow, DVC, TensorFlow, PyTorch, FAISS, XGBoost, Power BI, R (tidyverse), Streamlit, FastAPI, Flask, Angular, React, Node.js, .NET, WinDev, Docker, Podman, Kubernetes, Azure, Git, GitLab, Kafka, GraphQL, Spark, Hadoop, MinIO, S3, Grafana, Prometheus, VS Code, Jupyter

## CERTIFICATIONS
- Microsoft Azure AI-900 (AI Fundamentals) - Microsoft, 2023
- Building Transformer-Based NLP Applications - NVIDIA, 2023
- Fundamentals of Deep Learning - NVIDIA, 2022
- Getting Started with Diffusion Models - NVIDIA, 2024
- PMI Management Ready - Project Management Institute, 2024
- DELF B2 (French Language) - French Ministry of Education, 2023
- AI Automation with LangGraph & CrewAI - Self-Directed Learning, 2024
- n8n Workflow Automation - Self-Directed Learning, 2024
- CCNA 1 & 2 Certification - Cisco, 2022
- BLS (Basic Life Support) Certification - American Heart Association, 2023
- Securinet OSINT Formation - Securinet, 2022

## AWARDS & ACHIEVEMENTS
- 2nd Place - IEEE Xtreme Hub Competition (IEEE, 2023)
- Winner - Twise Night Challenge: Water Footprint Reduction Project (Twise, 2023)
- First Place - OSINT Competition (Securinet INSAT Hackathon, 2023)

## LEADERSHIP & COMMUNITY
- IEEE EPS Student Branch: Active member and 2nd place winner at IEEE Xtreme Hub Competition (2023)
- Founding Member - IT Lab (Dauphine): Organized technical workshops
- Arim Association: Led volunteering initiative for people with specific needs (2024)
- ACM Member: Participated in programming competitions

## LANGUAGES
- Arabic: Native
- English: Professional (C1)
- French: Professional (C1)
- German: Basic (A1)

## PROJECTS (16 total)

1. Diabetes Risk Prediction Model (AI/ML)
   - Processed CDC BRFSS dataset using Spark and Hadoop for distributed cleaning
   - Trained calibrated XGBoost model achieving 85% accuracy
   - Deployed Streamlit app delivering personalized diabetes risk insights
   - Tech: Python, Streamlit, Spark, Hadoop, XGBoost, Machine Learning, Feature Selection

2. MLOps Automation Pipeline (Automation)
   - Automated ML versioning, experiment tracking, and reproducible pipelines with DVC and S3/MinIO
   - Containerized models with Podman/Docker and deployed using GitLab CI/CD
   - Orchestrated workloads on Kubernetes for scalable inference services
   - Tech: MLflow, DVC, Docker, Podman, Kubernetes, GitLab CI/CD, Azure, Python, FastAPI

3. Multi-Agent Debating Simulation Game (AI/ML)
   - Built interactive multi-agent debating system with AI-vs-AI and Human-vs-AI modes
   - Added trending topic generation, expert personas, scoring system, and leaderboard
   - Integrated voice input and TTS for natural game-like debate interactions
   - Tech: CrewAI, LangGraph, Ollama, Python, TTS, State Management

4. Inferno Gym Management Portal (Web Dev)
   - Built full-stack gym platform for memberships, booking, attendance tracking, and payments
   - Developed Supabase schema with RLS, authentication, real-time updates, and admin dashboards
   - Deployed REST APIs and automation used daily by a local gym
   - Tech: FastAPI, React, PostgreSQL, Supabase, Material-UI, JWT Auth, Async Python

5. RAG Knowledge Bot with Automation (Automation)
   - Developed RAG chatbot with FAISS retrieval and automated document ingestion
   - Used n8n for scheduled syncing, preprocessing, and workflow automation
   - Achieved 85% answer accuracy on domain-specific queries
   - Tech: LangChain, FAISS, n8n, Python, Vector DB, RAG, FastAPI

5. Real-Time Dating App with GraphQL, Kafka & Web Services (Web Dev)
   - High-performance matchmaking platform with real-time messaging
   - Tech: GraphQL, Apache Kafka, REST APIs, Node.js, React, MongoDB, WebSockets

6. R Data Analytics & Visualization Project (AI/ML)
   - Statistical analysis with publication-ready visualizations
   - Tech: R, tidyverse, ggplot2, dplyr, Statistical Analysis, Power BI

7. Big Data & Machine Learning Pipeline (AI/ML)
   - Scalable big data processing with predictive analytics
   - Tech: Hadoop, Apache Spark, Python, Machine Learning, MLflow

8. Water Footprint Reduction Advisory Platform (Web Dev)
   - Sustainability platform with AI-powered chatbot
   - Tech: Angular, TypeScript, LLM, Node.js, NLP

9. Industrial Machinery Company Website (Web Dev)
   - Professional corporate website for industrial machinery products
   - Tech: React, JavaScript, CSS, Responsive Design, SEO

10. Virtual Try-On AI for Fashion E-Commerce (AI/ML)
    - Implemented virtual try-on pipeline generating realistic clothing previews using OOTDiffusion
    - Integrated the feature into a mobile app for real-time visualization
    - Tech: PyTorch, OOTDiffusion, Computer Vision, Mobile Integration, Deep Learning

11. C# Stock Management System for Restaurants (Desktop)
    - Inventory management solution for restaurants
    - Tech: C#, .NET, SQL Server, Inventory Management, ERP

12. Grocery Delivery Mobile Application (Mobile)
    - Mobile app for grocery ordering with authentication
    - Tech: Android, Java, Material UI, SQLite, REST API

13. Comprehensive School Management System (Desktop)
    - Educational platform for student records and schedules
    - Tech: Python, Tkinter, MySQL, Education Software

14. MERN Business Dashboard with Power BI (Web Dev)
    - Business analytics dashboard with Power BI integration
    - Tech: MongoDB, Express, React, Node.js, Power BI

15. MEAN Car Sales Website (Web Dev)
    - Car listing and management web application
    - Tech: MongoDB, Express, Angular, Node.js, REST API

16. Virtual Try-On AI (AI/ML)
    - OOTDiffusion model for fashion e-commerce
    - Tech: PyTorch, Computer Vision, Deep Learning

## EDUCATION
- Ecole Polytechnique de Sousse (2023-2026) - Software Engineering, Data Science & AI Path
- Université Paris Dauphine - PSL (2021-2023) - Applied Mathematics for Computer Science
- Institut Préparatoire aux Études d'Ingénieurs de Tunis (2018-2021) - Maths-Physics Preparatory Class

## CONTACT
Email: abderrahmen.kouki.software@gmail.com
LinkedIn: https://linkedin.com/in/abderrahmen-kouki-101648335
Website: https://koukiabderrahmen.me
Location: Sousse, Tunisia
`;

  constructor() {
    this.loadPortfolioContext();
  }

  private async loadPortfolioContext() {
    try {
      const response = await fetch('assets/portfolio_data.txt');
      this.portfolioContext = await response.text();
    } catch (error) {
      console.error('Error loading portfolio data:', error);
    }
  }

  async sendMessage(userMessage: string): Promise<string> {
    const systemPrompt = `You are an AI assistant for Abderrahmen Kouki's portfolio website.
Your role is to answer questions ONLY about the information available on this website and in the portfolio data below.

IMPORTANT INSTRUCTIONS:
- Only answer questions related to Abderrahmen Kouki's skills, experience, projects, education, certifications, awards, and contact information
- If asked about topics outside this portfolio (like general programming questions, other people, world events, etc.), politely redirect: "I can only answer questions about Abderrahmen's portfolio. Feel free to ask about his skills, projects, experience, or education!"
- Be warm, conversational, and friendly - write like you're having a natural conversation
- Use markdown formatting for better readability:
  * Use **bold** for emphasis on key terms and important points
  * Use *italics* for subtle emphasis
  * Use bullet points (-) or numbered lists when listing items
  * Use line breaks between paragraphs for better flow
  * Use headings (##) to organize longer responses into sections
- Format responses with natural paragraph breaks for readability
- Use specific details from the data when answering
- If you don't have specific information, say so honestly

PORTFOLIO DATA:
${this.portfolioContext}

${this.websiteData}

Now answer the following user question based only on the above information:`;

    try {
      // Handle Gemini API
      if (environment.ai.provider === 'gemini') {
        return await this.sendMessageGemini(userMessage, systemPrompt);
      }

      // Handle OpenRouter API
      if (environment.ai.provider === 'openrouter') {
        return await this.sendMessageOpenRouter(userMessage, systemPrompt);
      }

      // OpenAI API (default)
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.ai.apiKey}`
        },
        body: JSON.stringify({
          model: environment.ai.model || 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error calling AI API:', error);
      return "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again later or contact Abderrahmen directly at abderrahmen.kouki.software@gmail.com";
    }
  }

  // Method for Gemini API (Google)
  async sendMessageGemini(userMessage: string, systemPrompt: string): Promise<string> {
    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${environment.ai.model}:generateContent?key=${environment.ai.apiKey}`;

      console.log('Calling Gemini API...');

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${systemPrompt}\n\nUser question: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 300,
            topP: 0.8,
            topK: 40
          }
        })
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Gemini API error response:', errorText);
        throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Gemini response:', data);

      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text.trim();
      } else {
        console.error('Unexpected response format:', data);
        throw new Error('Unexpected response format from Gemini API');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);

      // Provide more specific error message
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return "I'm having trouble connecting to the AI service. This might be due to network restrictions. Please check your internet connection or try again later. You can also contact Abderrahmen directly at abderrahmen.kouki.software@gmail.com";
      }

      return "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again later or contact Abderrahmen directly at abderrahmen.kouki.software@gmail.com";
    }
  }

  // Method for OpenRouter API
  async sendMessageOpenRouter(userMessage: string, systemPrompt: string): Promise<string> {
    try {
      const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

      console.log('Calling OpenRouter API...');

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.ai.apiKey}`,
          'HTTP-Referer': 'https://koukiabderrahmen.me',
          'X-Title': 'Abderrahmen Kouki Portfolio'
        },
        body: JSON.stringify({
          model: environment.ai.model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 1500
        })
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenRouter API error response:', errorText);
        throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('OpenRouter response:', data);

      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content.trim();
      } else {
        console.error('Unexpected response format:', data);
        throw new Error('Unexpected response format from OpenRouter API');
      }
    } catch (error) {
      console.error('Error calling OpenRouter API:', error);

      // Provide more specific error message
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return "I'm having trouble connecting to the AI service. This might be due to network restrictions. Please check your internet connection or try again later. You can also contact Abderrahmen directly at abderrahmen.kouki.software@gmail.com";
      }

      return "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again later or contact Abderrahmen directly at abderrahmen.kouki.software@gmail.com";
    }
  }

  // Alternative method for Claude API (Anthropic)
  async sendMessageClaude(userMessage: string): Promise<string> {
    const systemPrompt = `You are an AI assistant for Abderrahmen Kouki's portfolio website.
Your role is to answer questions ONLY about the information available on this website and in the portfolio data.

IMPORTANT INSTRUCTIONS:
- Only answer questions related to Abderrahmen Kouki's skills, experience, projects, education, certifications, awards, and contact information
- If asked about topics outside this portfolio (like general programming questions, other people, world events, etc.), politely redirect: "I can only answer questions about Abderrahmen's portfolio. Feel free to ask about his skills, projects, experience, or education!"
- Be warm, conversational, and friendly - write like you're having a natural conversation
- Use markdown formatting for better readability:
  * Use **bold** for emphasis on key terms and important points
  * Use *italics* for subtle emphasis
  * Use bullet points (-) or numbered lists when listing items
  * Use line breaks between paragraphs for better flow
  * Use headings (##) to organize longer responses into sections
- Format responses with natural paragraph breaks for readability
- Use specific details from the data when answering
- If you don't have specific information, say so honestly

PORTFOLIO DATA:
${this.portfolioContext}

${this.websiteData}`;

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': environment.ai.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: environment.ai.model || 'claude-3-haiku-20240307',
          max_tokens: 300,
          system: systemPrompt,
          messages: [
            { role: 'user', content: userMessage }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data.content[0].text.trim();
    } catch (error) {
      console.error('Error calling Claude API:', error);
      return "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again later or contact Abderrahmen directly at abderrahmen.kouki.software@gmail.com";
    }
  }
}
