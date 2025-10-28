# Portfolio Website - Data Science & AI Automation Engineer

A professional portfolio website showcasing expertise in Data Science, AI Automation, and MLOps. Built with Angular 19 and featuring modern design with Tailwind CSS.

## 🚀 Project Overview

**Repository:** r-kouki.github.io  
**Owner:** r-kouki  
**Branch:** master  
**Framework:** Angular 19.2.3  
**Styling:** Tailwind CSS 3.4.1  
**Focus:** Data Science, AI Automation, MLOps

## 👨‍💻 Professional Profile

Data Science and AI Automation Engineer with a strong foundation in Applied Mathematics and Software Engineering. Specializing in:

- **Machine Learning & Deep Learning** - Building and deploying intelligent models
- **MLOps** - Automating ML pipelines with MLflow, Docker, and Azure
- **AI Automation** - Developing multi-agent systems with CrewAI and LangGraph
- **Data Analytics** - Statistical analysis and visualization with Python and R
- **Intelligent Systems** - RAG implementations, chatbots, and automation workflows

**Currently seeking:** Internship opportunities in Data Science, AI Automation, or MLOps

## 📋 Project Structure

```
project/
├── src/
│   ├── app/
│   │   ├── features/           # Feature modules/components
│   │   │   ├── home/          # Home page with hero section
│   │   │   ├── about/         # About section
│   │   │   ├── blog/          # Blog section
│   │   │   ├── contact/       # Contact form
│   │   │   ├── experience/    # Experience timeline
│   │   │   ├── leadership/    # Leadership section
│   │   │   ├── projects/      # Projects showcase
│   │   │   └── skills/        # Skills display
│   │   ├── app.component.*    # Root component
│   │   └── app.routes.ts      # Routing configuration
│   ├── assets/                # Images and static files
│   ├── environments/          # Environment configurations
│   ├── global_styles.css      # Global styles
│   ├── index.html            # Main HTML file
│   └── main.ts               # Application entry point
├── angular.json              # Angular CLI configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Features

### Current Components

1. **Home** (`/`)
   - Hero section highlighting Data Science & AI Automation focus
   - Internship seeking statement
   - Dynamic typewriter showcasing key skills (MLOps, AI Agents, RAG, etc.)

2. **About** (`/about`)
   - Professional profile emphasizing DS/AI/MLOps expertise
   - Educational background (Applied Mathematics & Data Science)
   - Languages and contact information

3. **Experience**
   - Professional work history
   - Technical leadership roles

4. **Skills**
   - **AI & Data Science:** ML, DL, NLP, RAG, Analytics
   - **Programming:** Python, R, JavaScript/TypeScript, Java
   - **MLOps & Automation:** MLflow, Docker, CI/CD, Azure ML
   - **AI Tools:** LangGraph, CrewAI, n8n, FastAPI
   - **Visualization:** Power BI, R (ggplot2), Pandas
   - **Web Development:** MERN, Angular, GraphQL
   - **Big Data:** Kafka, Spark, PostgreSQL, MongoDB

5. **Projects** (12 Featured Projects)
   - **MLOps Automation Pipeline** - Automated retraining & deployment
   - **Multi-Agent Debating Game** - CrewAI & LangGraph simulation
   - **RAG Knowledge Bot** - LangChain + n8n automation
   - **Dating App** - GraphQL + Kafka real-time matching
   - **R Analytics Project** - Statistical analysis & visualization
   - **Big Data ML Pipeline** - Hadoop + Spark processing
   - **Water Advisory Platform** - Sustainability with AI chatbot
   - **Industrial Website** - Corporate React application
   - **Virtual Try-On AI** - Computer vision for fashion
   - **Restaurant Stock System** - Inventory management
   - **Grocery Delivery App** - Android mobile application
   - **School Management** - Educational platform

6. **Certifications**
   - Microsoft Azure AI-900 - AI Fundamentals
   - NVIDIA - Deep Learning, NLP Transformers, Diffusion Models
   - PMI Management Ready
   - DELF B2 (French)
   - AI Automation (LangGraph, CrewAI, n8n)
   - CCNA, OSINT, BLS

7. **Leadership & Awards**
   - IEEE Xtreme Competition achievements
   - Technical challenge wins

8. **Blog**
   - Technical articles and insights

9. **Contact**
   - EmailJS integration for direct messaging

## 🛠️ Technologies Used

### Core Stack
- **Angular 19.2.3** - Frontend framework
- **TypeScript 5.6.3** - Programming language
- **RxJS 7.8.1** - Reactive programming

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.17** - CSS vendor prefixing
- **FontAwesome 6.5.1** - Icon library
- **Particles.js 2.0.0** - Interactive backgrounds

### AI & Data Science Focus
- **Python** - Primary language for ML/DS work
- **R** - Statistical analysis and visualization
- **LangChain/LangGraph** - AI agent development
- **CrewAI** - Multi-agent orchestration
- **n8n** - Workflow automation
- **MLflow** - MLOps and experiment tracking
- **TensorFlow/PyTorch** - Deep learning frameworks
- **Power BI** - Business intelligence and dashboards

### Backend & Integration
- **EmailJS** - Contact form email service
- **@microsoft/fetch-event-source** - Server-sent events
- **FastAPI** - High-performance API development
- **GraphQL** - Query language for APIs
- **Apache Kafka** - Event streaming platform

### DevOps & Cloud
- **Docker** - Containerization
- **Azure** - Cloud platform
- **CI/CD** - Automated deployment pipelines
- **Git/GitHub** - Version control and collaboration

## 📦 Available Scripts

```bash
# Development server
npm start
# Runs on http://localhost:4200

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🚀 Deployment Process

The project uses a custom deployment script that:
1. Builds the production version with `--base-href=/`
2. Switches to `new-main` branch
3. Removes old files and copies new build
4. Commits and force-pushes to `main` branch
5. Returns to `master` branch

**Deployment command:**
```bash
npm run deploy
```

## 📂 Assets

The `src/assets/` folder contains:

### Project Images
- `bigdata.jpg` - Big Data & ML Pipeline project
- `water.avif` - Water Advisory Platform
- `machinery.png` - Industrial Machinery Website
- `try-on.jpg` - Virtual Try-On AI
- `stock.jpg` - Stock Management / R Analytics
- `grocery.jpg` - Grocery Delivery / Dating App
- `school.jpg` - School Management System

### Documents
- `abderrahman-kouki.pdf` - Resume/CV

**Note:** Images are reused strategically across related projects (e.g., new AI/Automation projects use existing high-quality images)

## 🔧 Configuration Files

### angular.json
- Project name: `demo`
- Build configurations: development, production
- AOT compilation enabled for production
- Source maps disabled in production

### tailwind.config.js
- Custom Tailwind configuration
- Theme extensions and customizations

### tsconfig.json
- TypeScript compiler options
- Path mappings and module resolution

## 🌐 Routing

Current routes configured in `app.routes.ts`:
- `/` → HomeComponent
- `/about` → AboutComponent
- `/**` → Redirects to home

**Note:** Additional routes for other features need to be configured as components are converted/integrated.

## 📝 Development Notes

### Component Structure
Each feature component includes:
- `*.component.ts` - Component logic
- `*.component.html` - Template
- `*.component.css` - Styles
- `*.component.spec.ts` - Unit tests

### Styling Approach
- Global styles in `src/global_styles.css`
- Component-specific styles in component CSS files
- Tailwind utility classes for rapid styling
- Backup of global styles in `global_styles.css.bak`

## 🔄 Future Enhancements

### Planned Features
- [ ] Complete routing for all feature components
- [ ] Lazy loading for feature modules
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Progressive Web App (PWA) features
- [ ] Analytics integration (Google Analytics)
- [ ] Blog CMS integration with Markdown support
- [ ] Dark mode toggle
- [ ] Internationalization (i18n) - English/French/Arabic

### AI/ML Showcase Enhancements
- [ ] Interactive ML model demos
- [ ] Jupyter Notebook embeds
- [ ] Live API demonstrations
- [ ] GitHub Actions CI/CD badges
- [ ] Project case studies with metrics
- [ ] Kaggle competition results section
- [ ] Research papers and publications section

### Professional Development
- [ ] Testimonials from collaborators
- [ ] Video project demonstrations
- [ ] GitHub contribution graph integration
- [ ] LinkedIn recommendations display
- [ ] Conference presentations archive

## 🐛 Troubleshooting

### Common Issues

1. **Build fails:**
   - Check Node.js version compatibility
   - Run `npm install` to ensure dependencies are installed

2. **Deployment issues:**
   - Verify git repository setup
   - Ensure `new-main` and `main` branches exist
   - Check GitHub Pages settings

3. **Styling not applying:**
   - Verify Tailwind is configured in `global_styles.css`
   - Check PostCSS configuration
   - Rebuild the project

## 📄 License

This is a personal portfolio project showcasing professional work in Data Science, AI Automation, and MLOps.

## 👤 Contact

**Abderrahman Kouki**  
Data Science & AI Automation Engineer

- **Email:** abderrahman.kouki.software@gmail.com
- **LinkedIn:** [linkedin.com/in/abderrahmen-kouki](https://www.linkedin.com/in/abderrahmen-kouki-101648335/)
- **GitHub:** [github.com/r-kouki](https://github.com/r-kouki)

**Currently seeking:** Internship opportunities in Data Science, AI Automation, or MLOps

---

**Last Updated:** October 23, 2025  
**Version:** 2.0 - AI/Automation Focus
