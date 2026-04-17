# Quick Start Guide - Next.js Conversion

## What Changed

Your React + Vite website has been converted to **Next.js 16** with the following structure:

```
Official-Website/
├── app/
│   ├── layout.tsx          ✨ Root layout with Google Fonts
│   ├── page.tsx            ✨ Home page (your main website)
│   ├── not-found.tsx       ✨ 404 page
│   └── globals.css         ✨ Design system & tailwind
├── lib/
│   └── utils.ts            ✨ Utility helpers (cn function)
├── public/                 (optional) Static assets
├── next.config.js          ✨ Next.js config
├── package.json            ✨ Updated with Next.js deps
├── tailwind.config.ts      ✨ Updated for Next.js
├── tsconfig.json           ✨ Updated for Next.js
└── postcss.config.js       ✓ Unchanged
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

### 3. Build for Production

```bash
npm run build
npm start
```

## What's the Same

✅ **Same Design System**

- All custom HSL colors (ink, paper, rule, subtle)
- Same fonts (Fraunces serif + Inter sans)
- All animations and transitions preserved
- Same layout and responsive design

✅ **Same Content**

- Hero section with "A new kind of intelligence"
- Manifesto and papers section
- Research team grid
- Press mentions
- Contact CTA
- Footer

✅ **Same Styling**

- Tailwind CSS for all styling
- CSS variables for theming
- Smooth transitions and hover effects

## Key Improvements

✨ **Better Performance**

- Image optimization with Next.js Image component
- Automatic code splitting
- Built-in font optimization

✨ **Better Developer Experience**

- Hot reload development server
- Built-in TypeScript support
- Automatic routing
- Environment variables support

✨ **Production Ready**

- Optimized build output
- Server-side rendering capability
- API routes ready (if needed in future)

## File Explanations

### `app/layout.tsx`

- Root layout for all pages
- Configures Google Fonts (Fraunces, Inter)
- Sets up metadata (SEO)
- Wraps children with global providers

### `app/page.tsx`

- Home page component
- All the Zynaptrix website content
- Uses `"use client"` for interactivity (button clicks, etc.)
- Imports lucide-react icons

### `app/globals.css`

- Global styles and design system
- CSS variables for colors (--ink, --paper, etc.)
- Tailwind directives
- Font imports

### `next.config.js`

- Next.js configuration
- React strict mode enabled
- SWC minification enabled

## Tailwind Classes Still Work

All your Tailwind classes work exactly the same:

- `bg-paper`, `text-ink`, `text-rule`, `text-subtle`
- `font-serif`, `font-sans`
- All responsive classes (`md:`, `lg:`, etc.)
- All hover states, transitions

## Deploying

### Vercel (Recommended)

```bash
# Push to GitHub, then connect to Vercel
# Zero-config deployment
```

### Other Platforms

```bash
npm run build
npm start
```

The `.next` build folder contains the production build.

## Need to Add Images?

Put static files in the `public/` folder:

```tsx
import Image from "next/image";

<Image
  src="/neural-sculpture.png"
  alt="Description"
  width={1024}
  height={1024}
/>;
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Test dev server: `npm run dev`
3. ✅ Deploy to Vercel or your platform
4. ✅ All done! Same website, better foundation

Enjoy your new Next.js website! 🚀
