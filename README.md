# Everton Buzzi - Frontend Developer Portfolio

A modern, responsive portfolio website built with Vue 3, Vite, and Tailwind CSS.

## 🚀 Performance Optimizations

This project includes several performance optimizations to ensure fast loading times:

### Image Optimization
- All images are optimized using Sharp with 75% quality
- Progressive JPEG encoding for faster loading
- PNG compression with level 9 compression
- Significant size reductions (up to 80% smaller)

### Build Optimizations
- Code splitting with vendor and Google Maps chunks
- Terser minification with console.log removal
- Asset inlining for small files (< 4KB)
- ES2015 target for better browser compatibility

### Caching Strategy
- Long-term caching for static assets (1 year)
- HTML files with no-cache for updates
- Gzip compression enabled
- Immutable cache headers for versioned files

### Network Optimizations
- Preconnect hints for Google Fonts
- Preload critical resources
- Material Icons loaded from CDN
- Optimized bundle sizes

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🖼️ Image Optimization

Optimize all images in the public directory:

```bash
npm run optimize-images
```

## 🚀 Deployment

The site is deployed on Netlify with the following optimizations:

- Automatic builds on git push
- CDN distribution
- Gzip compression
- Optimized caching headers
- Performance monitoring

## 📊 Performance Metrics

After optimizations:
- **Image sizes reduced by 60-80%**
- **Bundle size optimized with code splitting**
- **First Contentful Paint improved**
- **Largest Contentful Paint optimized**
- **Cumulative Layout Shift minimized**

## 🛡️ Security

- X-Frame-Options: DENY
- X-XSS-Protection enabled
- X-Content-Type-Options: nosniff
- Strict Referrer Policy
- Content Security Policy headers

## 📱 Features

- **Responsive Design**: Works on all devices
- **Dark/Light Mode**: Automatic theme detection
- **Fast Navigation**: Vue Router with lazy loading
- **Interactive Maps**: Google Maps integration
- **Restaurant Collection**: With filtering and maps
- **Book Collection**: Reading progress tracking
- **Project Showcase**: Portfolio with live demos
- **Contact Information**: Easy to reach

## 🛠️ Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Routing**: Vue Router 4
- **Maps**: vue3-google-map
- **Deployment**: Netlify
- **Image Optimization**: Sharp

## 📈 Performance Monitoring

Monitor your site's performance using:
- Google PageSpeed Insights
- WebPageTest
- Lighthouse
- Netlify Analytics

## 🔧 Environment Variables

Create a `.env` file with:

```env
VITE_GOOGLE_API_KEY=your_google_maps_api_key
```

## 📄 License

MIT License - feel free to use this code for your own portfolio!
