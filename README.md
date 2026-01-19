# 🚀 Shivam Pandey - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my projects, skills, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast load times
- 🎭 **Scroll Animations** - Engaging scroll-triggered animations
- 📊 **GitHub Stats** - Live GitHub statistics integration
- 📝 **Blog Section** - Share technical articles and insights
- 💼 **Case Studies** - Detailed project breakdowns
- 🎯 **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Animations:** Custom CSS animations
- **Deployment:** Vercel/Netlify ready

## 📂 Project Structure

```
My_Portfolio/
├── public/                 # Static assets
│   ├── SHIVAM_PANDEY.pdf  # Resume PDF
│   └── Icon.png           # Favicon
├── src/
│   ├── assets/            # Images and fonts
│   ├── components/        # Reusable components
│   │   ├── sections/      # Page sections
│   │   ├── shared/        # Shared components
│   │   └── ui/            # UI components
│   ├── contexts/          # React contexts
│   ├── data/              # Static data
│   ├── hooks/             # Custom hooks
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shivam250202/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

```bash
vercel --prod
```

### Deploy to Netlify

```bash
netlify deploy --prod
```

## 📄 Pages

- **Home** - Hero section with introduction and highlights
- **About** - Professional background, skills, and services
- **Projects** - Portfolio of work with live demos
- **Case Studies** - Detailed project breakdowns
- **Resume** - Experience, education, and certifications
- **Blog** - Technical articles and tutorials
- **Contact** - Get in touch form

## 🎨 Customization

### Update Personal Information

Edit `src/data/personal.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... more fields
}
```

### Add Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: '1',
  title: 'Project Name',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/...',
  demo: 'https://demo.com'
}
```

### Modify Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    500: '#22c55e', // Your primary color
    600: '#16a34a',
    // ...
  }
}
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎯 First Contentful Paint: < 1.5s
- 📦 Bundle Size: Optimized with code splitting
- ♿ Accessibility: WCAG 2.1 AA compliant

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shivam Pandey**

- GitHub: [@Shivam250202](https://github.com/Shivam250202)
- LinkedIn: [Shivam Pandey](https://linkedin.com/in/shivam-pandey-250202)
- Email: er.shivam.pandey2502@gmail.com

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Inspiration from various portfolio designs

## 📸 Screenshots

### Light Mode
![Light Mode](./screenshots/light-mode.png)

### Dark Mode
![Dark Mode](./screenshots/dark-mode.png)

---

⭐ Star this repo if you find it helpful!

Made with ❤️ by Shivam Pandey
