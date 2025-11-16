# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development
```bash
npm start                    # Start dev server on http://localhost:4200
npm run start:network       # Start dev server accessible on network (host 0.0.0.0)
```

### Build & Deploy
```bash
npm run build               # Build for production
npm run deploy              # Custom deployment to GitHub Pages
```

## Architecture Overview

This is an Angular 19 portfolio website for a Data Science & AI Automation Engineer, built with standalone components architecture and Tailwind CSS styling.

### Core Stack
- **Angular 19.2.3** with TypeScript 5.6.3 (standalone components, no NgModules)
- **Tailwind CSS 3.4.1** with custom theme configuration
- **RxJS 7.8.1** for reactive programming
- **EmailJS** for contact form integration
- **Particles.js** for interactive background effects

### Project Structure
- **Feature-based organization** in `src/app/features/`
- **Standalone components**: Each component self-contained with its own imports array
- **Signal-based reactivity**: Angular 19 signals API used for theme management
- **Single-page layout**: Home route embeds all feature sections (About, Experience, Skills, Projects, Leadership, Contact)
- **Data-driven components**: All content (projects, skills, experience) defined statically in component TS files

Each feature component follows a consistent pattern:
- `*.component.ts` - Component logic (standalone with imports)
- `*.component.html` - Template markup
- `*.component.css` - Component-scoped styles
- `*.component.spec.ts` - Unit tests

### Current Routing Structure
```typescript
// app.routes.ts
{ path: '', component: HomeComponent },       // Single-page layout with all sections
{ path: 'about', component: AboutComponent }, // Standalone about page
{ path: '**', redirectTo: '' }                // Wildcard fallback
```

**Important**: Currently HomeComponent acts as a single-page container that embeds AboutComponent, ExperienceComponent, SkillsComponent, ProjectsComponent, LeadershipComponent, and ContactComponent. Only the root `/` and `/about` routes are configured.

### Styling Architecture

**Global Styles** (`src/global_styles.css`):
- Tailwind directives (@base, @components, @utilities)
- CSS custom properties for theming (--bg-primary, --text-primary, etc.)
- Light/dark mode via `.dark` class
- Custom utility classes (.btn, .card, .glass for glass morphism)
- FontAwesome icons
- Custom animations (fade-in, slide-up, float, etc.)

**Tailwind Configuration** (`tailwind.config.js`):
- Dark mode: `class`-based strategy
- Custom color palette: Primary (#2A9D8F teal), Secondary (#E76F51 orange), Accent (#F4A261 gold)
- Custom animations and transitions
- Font family: Inter (Google Fonts)

**Component Styling Pattern**:
- Tailwind utility classes in templates for most styling
- Component-specific CSS files for unique requirements
- Consistent design: glass morphism, gradient text, hover effects (scale-105), shadow elevation

### Theme System

**ThemeService** (`src/app/services/theme.service.ts`):
- Singleton service (`providedIn: 'root'`)
- Signal-based reactive state: `isDarkMode` signal
- Persists theme preference to localStorage
- Respects system color scheme preference
- Reactive effect for automatic theme application
- Usage: Inject with `inject(ThemeService)`, toggle with `themeService.toggleTheme()`

**ThemeToggleComponent**:
- Fixed position top-right corner (z-50)
- Sun/moon icon with rotation animation
- Glassmorphic button design

## Custom Deployment System

**npm run deploy** executes a sophisticated multi-step process:
```bash
1. ng build --configuration production --base-href=/
2. git checkout new-main
3. git pull
4. rm -rf * (removes old files)
5. cp -r dist/demo/browser/* . (copies new build)
6. git add .
7. git commit -m "Deploy to GitHub Pages"
8. git push -f origin new-main:main (force pushes to main)
9. git checkout master (returns to master branch)
```

**Critical Requirements**:
- Two branches must exist: `master` (development) and `new-main` (deployment staging)
- The script force-pushes to `main` branch for GitHub Pages hosting
- Build output directory: `dist/demo/browser/`

## Key Components

### ProjectsComponent
- Displays 15 projects with category filtering
- Categories: All, AI/ML, Automation, Web Dev, Mobile, Desktop
- Data structure: `Project` interface with title, description, category, techStack, image, github, status, achievements
- All data defined in component TS (no API calls)

### SkillsComponent
- 8 skill categories with proficiency levels (0-100)
- 26 tools with FontAwesome icons
- 11 certifications with issuer and date
- 3 awards and achievements

### ExperienceComponent
- 3 work experiences with timeline layout
- Data structure: company, position, duration, description, achievements, skills array

### ContactComponent
- EmailJS integration for form submission
- Environment config: `environment.ts` contains EmailJS publicKey, serviceId, templateId
- Demo chatbot with simulated responses
- Form validation and error handling

### HomeComponent
- Container component embedding all feature sections
- Imports: HeroComponent, AboutComponent, ProjectsComponent, ExperienceComponent, SkillsComponent, LeadershipComponent, ContactComponent
- Single-page scrollable layout with anchor navigation

## Development Workflows

### Adding New Routes
When integrating new standalone components into routing:
```typescript
// Add to app.routes.ts
{ path: 'experience', component: ExperienceComponent },
{ path: 'skills', component: SkillsComponent },
```

### Adding New Features
1. Create folder in `src/app/features/feature-name/`
2. Generate component files: `.ts`, `.html`, `.css`, `.spec.ts`
3. Make component standalone with imports array
4. Import in parent component or add to routing

### Build Configuration
- **Development**: Source maps enabled, optimization disabled, named chunks
- **Production**: AOT compilation, optimization enabled, output hashing, source maps disabled
- **Output Path**: `dist/demo` (configured in angular.json)

## Asset Management
- Project images in `src/assets/` (strategic image reuse across related projects)
- Resume/CV: `abderrahman-kouki.pdf`
- Images: bigdata.jpg, water.avif, stock.jpg, grocery.jpg, school.jpg, machinery.png, try-on.jpg, me.png, me2.png, etc.

## Portfolio Focus

This portfolio specializes in Data Science and AI Automation:
- **MLOps**: MLflow, Docker, Azure ML, CI/CD pipelines
- **AI Automation**: CrewAI, LangGraph, n8n workflow automation
- **Machine Learning**: TensorFlow, PyTorch, Deep Learning, NLP
- **Data Analytics**: Python, R, Power BI, Statistical analysis
- **Big Data**: Spark, Kafka, PostgreSQL, MongoDB
- **Web Development**: MERN stack, Angular, GraphQL, FastAPI

## Environment Configuration

**Development** (`environment.ts`):
```typescript
production: false
emailjs: {
  publicKey: '7x3luzuFRRpIFWHsC',
  serviceId: 'service_29ac2ac',
  templateId: 'template_q4d9eu4'
}
```

**Production** (`environment.prod.ts`): Similar structure with production flag set to true
