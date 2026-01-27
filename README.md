# CaviteWisdom - Newspaper Publishing Website

A modern, responsive newspaper publishing website built with Next.js and Tailwind CSS, designed for GitHub Pages deployment.

## Features

- **Home Page**: Mission and vision statements
- **Newspapers**: Dynamic tile display of uploaded PDF/image files
- **About Us**: Information about the organization
- **Contact**: Contact information and form
- **Responsive Design**: Works on all devices
- **Static Site**: Perfect for GitHub Pages

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Newspapers

1. Place PDF files or images (JPG, PNG, GIF, WebP) in the `public/newspapers/` folder
2. Files will automatically appear as tiles on the newspapers page
3. Clicking a tile opens the full-quality view

## Deployment to GitHub Pages

1. Build and export the static site:
```bash
npm run deploy
```

2. The `out/` folder contains the static files ready for GitHub Pages

3. In your GitHub repository settings:
   - Go to Pages section
   - Select "Deploy from a branch"
   - Choose the branch containing your `out/` folder
   - Set folder to `/` (root) or `/docs` if you move the files there

## File Structure

```
├── components/
│   ├── Layout.tsx          # Main layout with header/footer
│   └── NewspaperCard.tsx   # Individual newspaper tile component
├── pages/
│   ├── index.tsx           # Home page (Mission/Vision)
│   ├── newspapers.tsx      # Newspapers grid page
│   ├── about.tsx           # About us page
│   └── contact.tsx         # Contact page
├── public/
│   └── newspapers/         # Place your PDF/image files here
└── styles/
    └── globals.css         # Global styles with Tailwind
```

## Customization

- Edit content in the respective page files
- Modify colors and styling in the component files
- Update contact information in `contact.tsx` and `Layout.tsx`
- Change the site name by updating "CaviteWisdom" references

## Supported File Types

- **PDFs**: .pdf
- **Images**: .jpg, .jpeg, .png, .gif, .webp