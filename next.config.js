/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Do not set assetPrefix/basePath by default. When deploying to GitHub
  // Pages with a custom domain we want assets to be served from the site
  // root. If you need to publish to a repo subpath (e.g. wisdomcavite.github.io/cavitewisdom)
  // set `process.env.REPO_BASE='/cavitewisdom'` in your CI and uncomment the
  // lines below.
  // assetPrefix: process.env.REPO_BASE || '',
  // basePath: process.env.REPO_BASE || ''
}

module.exports = nextConfig