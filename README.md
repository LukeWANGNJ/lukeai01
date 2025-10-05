# Luke Wang - Resume Website

A modern, responsive resume website built with React, featuring smooth animations and mobile-first design.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects and smooth scrolling navigation
- **Contact Form**: Functional contact form for inquiries
- **Social Integration**: Links to LinkedIn and other professional profiles

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Styled Components**: CSS-in-JS for component styling
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for consistent iconography
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Luke_Resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   ├── Hero.js            # Hero section with introduction
│   ├── About.js           # About section with personal info
│   ├── Experience.js      # Professional experience timeline
│   ├── Skills.js          # Skills and technologies
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Footer with links and social media
├── App.js                 # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero.js**: Name, title, and description
2. **About.js**: Personal story and statistics
3. **Experience.js**: Work experience and companies
4. **Skills.js**: Technical skills and proficiency levels
5. **Contact.js**: Contact information and social links

### Styling

The website uses a consistent color scheme based on:
- Primary: `#667eea` (blue)
- Secondary: `#764ba2` (purple)
- Background: `#f8fafc` (light gray)
- Text: `#2d3748` (dark gray)

You can customize colors by updating the styled-components in each component file.

### Adding New Sections

To add new sections:

1. Create a new component in the `components/` folder
2. Import and add it to `App.js`
3. Update the navigation in `Header.js`
4. Add corresponding links in `Footer.js`

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for performance with:
- Lazy loading of animations
- Optimized images and assets
- Minimal bundle size
- Fast loading times

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Luke Wang - [LinkedIn](https://www.linkedin.com/in/luke-wang-b38b4088/)

Project Link: [https://github.com/yourusername/luke-resume](https://github.com/yourusername/luke-resume)