# React Wix Landing Page

This project is a React TypeScript application that recreates the landing page of a website originally made on Wix. It is structured to provide a clean and responsive design, utilizing functional components and CSS for styling.

## Project Structure

```
react-wix-landing-page
├── public
│   ├── index.html         # Main HTML file for the React application
│   └── favicon.ico        # Favicon for the website
├── src
│   ├── components         # Contains all React components
│   │   ├── Header.tsx     # Header component with navigation
│   │   ├── Footer.tsx     # Footer component with copyright info
│   │   └── MainContent.tsx # Main content component for the landing page
│   ├── styles             # Contains CSS styles
│   │   ├── App.css        # Styles for the main application
│   │   └── index.css      # Global styles for the application
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point of the React application
│   └── types              # TypeScript types and interfaces
│       └── index.d.ts
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── vite.config.ts         # Vite configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-wix-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

This application is designed to be a landing page. You can customize the components in the `src/components` directory to modify the header, footer, and main content as needed. The styles can be adjusted in the `src/styles` directory.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.