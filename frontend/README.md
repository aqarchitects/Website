# AQ-Design

A modern, SEO-optimized React website built with Vite, Tailwind CSS, and React Router. Designed to convert Figma designs to code with support for RTL/LTR languages.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing (BrowserRouter - no hash routing)
- **React Helmet Async** - SEO meta tags management
- **Framer Motion** - (To be added) Animation library
- **GSAP** - (To be added) Advanced animations

## Features

- ✅ SEO optimized with meta tags and Open Graph support
- ✅ RTL/LTR language support (English + Arabic ready)
- ✅ BrowserRouter for clean URLs (no # in routes)
- ✅ Responsive design with Tailwind CSS
- ✅ Language context for easy internationalization
- ✅ Production-ready build configuration

## Project Structure

```
src/
├── components/       # Reusable components
│   └── SEO.jsx      # SEO component for meta tags
├── contexts/        # React contexts
│   └── LanguageContext.jsx  # Language and direction management
├── pages/           # Page components
│   └── Home.jsx     # Home page
├── App.jsx          # Main app component with routing
├── main.jsx         # App entry point
└── index.css        # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Language Support

The project includes a Language Context that manages:

- Current language (en/ar)
- Text direction (ltr/rtl)
- Automatic HTML dir and lang attribute updates

### Usage Example

```jsx
import { useLanguage } from "./contexts/LanguageContext";

function MyComponent() {
  const { language, direction, changeLanguage, isRTL } = useLanguage();

  return <button onClick={() => changeLanguage("ar")}>Switch to Arabic</button>;
}
```

## SEO

Each page can use the SEO component to set meta tags:

```jsx
import SEO from "../components/SEO";

function MyPage() {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description"
        keywords="keyword1, keyword2"
      />
      {/* Page content */}
    </>
  );
}
```

## Next Steps

1. Add design tokens and variables based on Figma design
2. Install and configure Framer Motion
3. Install and configure GSAP
4. Build out page components from Figma designs
5. Add Arabic language translations

## Notes

- Design tokens and variables will be defined in `tailwind.config.js`
- No design system is currently defined - will be created based on Figma analysis
