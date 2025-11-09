# CancerCare India — Awareness & Support Initiative

A fully responsive, emotionally impactful one-page website dedicated to cancer awareness, support, and community empowerment in India. Built with modern web technologies to deliver a compassionate user experience.

<div align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/React-19.1+-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-7+-646CFF?logo=vite&logoColor=white" alt="Vite">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4+-38B2AC?logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  </div>
  
  <div align="center">
    
  [![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-success?style=for-the-badge)](https://google.com/)
  </div>

## 🌟 Features

- **Modern Futuristic Design** — Glassmorphism effects, gradient backgrounds, and smooth color transitions
- **Smooth Animations** — Powered by Framer Motion for engaging, fluid interactions
- **Fully Responsive** — Mobile-first approach ensuring seamless experience across all devices
- **Real-time Notifications** — Toast alerts with React Toastify for user feedback
- **Inspirational Quotes** — Live quotes that refresh every 10 seconds from a public API
- **Contact Form** — Full validation and submission handling with user-friendly feedback
- **Impact Statistics** — Animated donation counters and trend charts
- **Accessibility** — Semantic HTML and proper contrast ratios for inclusive design

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library and component management |
| **Vite** | Fast build tool and development server |
| **Tailwind CSS** | Utility-first styling framework |
| **Framer Motion** | Animation and motion library |
| **React Toastify** | Toast notification system |

## 📁 Project Structure

```
cancercare-india/
├── public/
│   ├── logo.png              # Favicon
│   └── vite.svg              # Vite logo
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with main CTA
│   │   ├── AwarenessCards.jsx      # Three pillar cards
│   │   ├── VisionPanel.jsx   # Mission/vision statement
│   │   ├── QuoteSection.jsx  # Daily inspirational quotes
│   │   ├── DonationStats.jsx # Live donation stats & trends
│   │   ├── ContactForm.jsx   # Email contact form
│   │   └── Footer.jsx        # Footer with branding
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   ├── index.css             # Global styles & utilities
│   └── App.css               # App-specific styles
├── index.html                # HTML entry point
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies & scripts
└── .gitignore                # Git ignore rules
```

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Deep Teal | `#008080` | Primary brand color, CTAs |
| Soft Peach | `#FFAD99` | Accent color, hover states |
| Accent Pink | `#FF4F87` | Highlights, emphasis |
| Text Dark | `#0F172A` | Headings, primary text |
| Text Soft | `#475569` | Body text, secondary content |
| Background | `#F5F7FA` | Page background |

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cancercare-india

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Output will be in the 'dist' folder
```

### Preview Production Build

```bash
# Serve the production build locally
npm run preview
```

## 📋 Component Overview

### Hero
The landing section with animated background shapes, main headline, and call-to-action button that scrolls to the contact form.

### AwarenessCards
Three information cards highlighting key awareness messages with hover animations and decorative elements.

### VisionPanel
A centered glassmorphic panel presenting the organization's mission and vision with dramatic backdrop effects.

### QuoteSection
Displays inspirational quotes that automatically refresh every 10 seconds. Includes a manual refresh button and smooth transitions between quotes.

### DonationStats
Animated statistics showing total donations and donor count with real-time increments. Includes a 6-month donation trend visualization with animated progress bars.

### ContactForm
Fully validated contact form with real-time field feedback, focus states, and toast notifications for success/error handling.

### Footer
Minimal footer with copyright information, animated decorative elements, and brand messaging.

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom color extensions defined in `tailwind.config.js`. All utility classes follow Tailwind's naming conventions.

### PostCSS
Configured with Autoprefixer for automatic vendor prefixes and Tailwind CSS processing.

### Vite
Uses Vite's React plugin for optimal development experience with Fast Refresh support.

## 📦 Dependencies

### Production
- `react@^18.2.0` — UI library
- `react-dom@^18.2.0` — React DOM rendering
- `framer-motion@^10.16.4` — Animation library
- `react-toastify@^9.1.3` — Toast notifications

### Development
- `@vitejs/plugin-react@^4.2.0` — React plugin for Vite
- `tailwindcss@^3.3.5` — CSS framework
- `postcss@^8.4.31` — CSS transformation
- `autoprefixer@^10.4.16` — CSS vendor prefixes
- `vite@^5.0.0` — Build tool

## 🌐 Deployment

This project is ready for deployment on modern static hosting platforms:

- **Netlify** — Connect GitHub, auto-deploy on push
- **Vercel** — Optimized for React, one-click deployment
- **GitHub Pages** — Free hosting with GitHub
- **AWS S3 + CloudFront** — Scalable cloud hosting
- **Any static hosting** — Just upload the `dist` folder

### Deployment Steps

1. Run `npm run build` to create the production build
2. Upload the contents of the `dist` folder to your hosting service
3. Configure your domain and SSL certificate
4. Set up any necessary environment variables

## 📝 Environment Variables

Currently, the application does not require environment variables. The quote API endpoint is hardcoded but uses publicly available data.

## 🔒 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## 📄 License

© 2025 CancerCare India — Support • Awareness • Community

This project is dedicated to cancer awareness and support. All content and code are provided for educational and community purposes.

## 🤝 Contributing

We welcome contributions to improve the website and expand its impact. Please feel free to submit issues or pull requests for:

- Bug fixes
- Feature enhancements
- Content improvements
- Accessibility improvements
- Performance optimizations

## 📞 Support

For questions, feedback, or collaboration opportunities, please reach out through the contact form on the website or visit our community channels.

## 🙏 Acknowledgments

- Built with love for the cancer awareness community in India
- Inspired by real stories of courage and resilience
- Dedicated to families fighting cancer and those providing support

---

**Together, we rise against cancer. One awareness message at a time.**
