
# BHM Dashboard Project

## Overview
This project is a dashboard interface for managing and visualizing data related to Bless Hotel Madrid (BHM). It uses modern web development technologies to create a responsive and user-friendly interface.

---

## Project Structure

### File Organization
```
src/
├── assets/
│   ├── css/
│   │   └── styles.scss      # Main SCSS file containing styles and variables
│   ├── images/              # Folder for images (e.g., logo-mobile.svg)
│   └── fonts/               # Folder for custom fonts (if applicable)
├── components/              # Reusable components (future-proofing)
├── pages/                   # Page-level components (if applicable)
└── index.html               # Main entry point of the application
```

---

## Technologies Used
- **HTML5**: Semantic markup for content structure.
- **CSS/SCSS**: Custom styling and theming with variables and reusable classes.
- **Google Fonts**: For typography:
  - [Nunito](https://fonts.google.com/specimen/Nunito) for general text.
  - [Lora](https://fonts.google.com/specimen/Lora) for headings.

---

## Features
### 1. Responsive Design
- The dashboard layout adapts to various screen sizes.
- Key sections include:
  - **Summary**: Displays total common areas and room zones.
  - **Detailed Information**: Tabular representation of detailed hotel data.
  - **Recent Activity**: List of recent activities with statuses.

### 2. SCSS Variables
SCSS variables are used to define and manage the project's color scheme:
```scss
$primary-color: #9a7611;
$dark-primary-color: #6e540d;
$secondary-color: #aea780;
$gray: #f5f5f5;
$white: #fff;
$dark-blue: #122b40;
$text-color: #19212b;
```

### 3. Component-Based Structure
- Modular classes for dashboard sections.
- Nested selectors for better maintainability and readability.

---

## How to Run the Project

### Pre-requisites
1. Install a code editor like [Visual Studio Code](https://code.visualstudio.com/).
2. Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) if you plan to use tools like SCSS compilers.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd bhm-dashboard
   ```
3. Open `index.html` in a browser to view the dashboard.

### Optional
- Compile SCSS to CSS using a compiler like [Dart Sass](https://sass-lang.com/dart-sass):
  ```bash
  sass src/assets/css/styles.scss src/assets/css/styles.min.css
  ```

---

## Future Improvements
- **Dynamic Data**: Integrate with a backend or API for live data updates.
- **Reusable Components**: Refactor repetitive sections like summary items and activity lists into components.
- **Accessibility**: Improve ARIA roles and keyboard navigation.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.