
# Kerrtisy - Official Site

This project is a React TypeScript application that recreates the landing page of a website originally made on Wix. It features a clean, responsive design with smooth animations and routing for multiple pages.

## Project Structure

```
kerrtisy
├── public
│   ├── index.html         # Main HTML file for the React application
│   └── favicon.ico        # Favicon for the website
├── src
│   ├── components         # Contains all React components
│   │   ├── About          # About page components
│   │   │   ├── About.tsx
│   │   │   └── About.css
│   │   ├── Contact        # Contact page components
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.css
│   │   ├── Header         # Header component with navigation
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Footer         # Footer component
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   ├── Home           # Home page components
│   │   │   ├── Home.tsx
│   │   │   └── Home.css
│   │   ├── WIP            # Work in Progress page components
│   │   │   ├── WIP.tsx
│   │   │   └── WIP.css
│   ├── styles             # Global styles
│   │   └── index.css
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point of the React application
│   └── types              # TypeScript types and interfaces
│       └── index.d.ts
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── vite.config.ts         # Vite configuration file
└── README.md              # Project documentation
```

## Features

- **Responsive Design**: Optimized for various screen sizes.
- **Smooth Animations**: Fade-in transitions for pages and components.
- **Routing**: Multi-page navigation using `react-router-dom`.
- **Reusable Components**: Modular structure for easy maintenance.
- **Custom Styling**: Styled with CSS and animations.

## Pages

1. **Home**: Landing page with navigation buttons.
2. **About**: Information about the artist with a fade-in effect.
3. **Contact**: Contact form and details.
4. **Work in Progress**: Placeholder page for future content.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd kerrtisy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Deployment

This project is configured for deployment using GitHub Pages. To deploy:
```bash
npm run deploy
```


## License

This project is licensed under the MIT License. See the LICENSE file for details.

