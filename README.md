# Material-UI First Project

## Overview
This project is a **React.js** web application built using **Material-UI** for modern UI components and **Vite** for fast development. It includes various sections such as a **Hero Banner**, **Popular Products**, **Reviews**, **Subscription**, **Footer**, and a **Contact Form**.

## Features
- **Material-UI Theming**: Uses Material-UI's `ThemeProvider` for consistent styling.
- **React Router**: Supports navigation with `react-router-dom`.
- **React Query**: Manages data fetching and caching.
- **Swiper.js**: Implements an interactive product slider.
- **Fully Responsive**: Adapts to all screen sizes using Material-UI's breakpoints.
- **Auto Image Slider**: A dynamic hero banner with auto-rotating images.

## Tech Stack
### Frontend
- **React.js** with Vite
- **Material-UI** for UI components
- **React Router** for navigation
- **React Query** for API data fetching
- **Swiper.js** for sliders
- **Tailwind CSS** for additional styling

## Installation
### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (v18 or later)
- **npm** or **yarn**

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/enayetsyl/ecom-material-ui
   cd ecom-material-ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at **http://localhost:5173**.

## Project Structure
```
/material-ui-first-project
├── src/
│   ├── assets/         # Images and assets
│   ├── components/     # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Review.jsx
│   │   ├── PopularProduct.jsx
│   │   ├── Subscribe.jsx
│   │   ├── ContactUs.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   ├── theme.js        # Material-UI theme configuration
│   ├── Router.js       # Routes configuration
│   ├── main.jsx        # Entry point
│   ├── index.css       # Global styles
├── public/             # Static assets
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Documentation
```

## Dependencies
### Core Libraries
```json
"dependencies": {
  "@emotion/react": "^11.11.1",
  "@emotion/styled": "^11.11.0",
  "@mui/icons-material": "^5.14.19",
  "@mui/material": "^5.14.20",
  "@tanstack/react-query": "^5.13.4",
  "axios": "^1.6.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.1",
  "swiper": "^11.0.5"
}
```

### Dev Dependencies
```json
"devDependencies": {
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@vitejs/plugin-react": "^4.2.0",
  "eslint": "^8.53.0",
  "tailwindcss": "^3.3.6",
  "vite": "^5.0.0"
}
```

## Key Components
### 1. **Header** (`Header.jsx`)
- Implements an auto-rotating image slider with `useState` and `useEffect`.
- Uses Material-UI `Typography`, `Button`, and `Box` components.

### 2. **Popular Products** (`PopularProduct.jsx`)
- Features a Swiper.js carousel for showcasing products.
- Uses Material-UI icons for navigation.

### 3. **Subscribe Section** (`Subscribe.jsx`)
- Allows users to enter their phone numbers and subscribe.
- Uses Material-UI `TextField`, `Button`, and `Typography`.

### 4. **Reviews Section** (`Review.jsx`)
- Displays customer reviews using Swiper.js effect cards.

### 5. **Footer** (`Footer.jsx`)
- Contains social media links and a contact hotline.

### 6. **Contact Form** (`ContactUs.jsx`)
- Uses `TextField` inputs and an image gallery with Material-UI `ImageList`.

## Future Enhancements
- Implement dark mode support.
- Improve accessibility (ARIA attributes and keyboard navigation).
- Fetch product data dynamically from an API.
- Add authentication using Firebase or Auth0.

## License
This project is licensed under the **MIT License**.

## Author
- **Your Name** (Replace with actual author)

## Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 🏆 **Author:** Md Enayetur Rahman

### Contact Information
- [LinkedIn](https://www.linkedin.com/in/md-enayetur-rahman/)
- [Facebook](https://www.facebook.com/profile.php?id=100094416483981)
- [X (Twitter)](https://x.com/enayetu_syl)
- [YouTube](https://www.youtube.com/@MdEnayeturRahman)
- [GitHub](https://github.com/enayetsyl/)
- [Medium](https://medium.com/@enayetflweb)
- [dev.to](https://dev.to/md_enayeturrahman_2560e3)
- [Leetcode](https://leetcode.com/u/XTl7hvNPIc/)
- [Hackerrank](https://www.hackerrank.com/profile/enayetflweb)
- [Codeforces](https://codeforces.com/profile/enayetsyl)
- [Email](mailto:enayetflweb@gmail.com)