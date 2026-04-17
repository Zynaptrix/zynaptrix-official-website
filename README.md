# Zynaptrix - Official Website (Next.js)

A modern research company website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 16 with App Router
- 🎨 Custom design system with HSL colors
- 📝 Beautiful serif and sans-serif typography (Fraunces + Inter)
- 🎯 Responsive design with Tailwind CSS
- ✨ Smooth animations and transitions
- 🚀 Optimized performance
- ♿ Accessible components

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles and design tokens
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Design System

The site uses a custom design system with carefully chosen colors:

- **ink**: Primary text color (230° 50% 11%)
- **paper**: Background color (40° 25% 97%)
- **rule**: Border/divider color (230° 15% 88%)
- **subtle**: Muted text (230° 10% 45%)

Typography:

- **Serif**: Fraunces (headings)
- **Sans**: Inter (body text)

## Technologies

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Google Fonts (Fraunces, Inter)

## License

MIT
