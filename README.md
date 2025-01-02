# Multi-Device React.js Web Template

## Overview
The **Multi-Device React.js Web Template** is a boilerplate designed to help developers build web applications that provide tailored layouts and functionality for different device types, including desktops, tablets, and mobile devices. By using device-specific rendering logic, this template allows for a more precise and optimized user experience across various platforms.

---

## Features
- **Device-Specific Rendering**: Automatically detects the device type and renders unique components for desktop, tablet, and mobile devices.
- **Customizable Breakpoints**: Easily adjust screen width thresholds for detecting different device types.
- **Modern React Setup**: Utilizes React.js functional components and hooks for a clean and efficient development experience.
- **Ready-to-Use File Structure**: Organized folder structure to simplify adding new screens or components.

*Note*: Navigation functionality is not included and will need to be set up separately. Libraries like `react-router-dom` are recommended for implementing navigation.

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/chris-ddc/Multi-Device-React.js-Web-Template.git
cd Multi-Device-React.js-Web-Template
```

### 2. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. Run the Development Server
Start the app in development mode:
```bash
npm start
```
This will open the app in your default browser at `http://localhost:3000`.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
The production-ready files will be in the `build/` directory.

---

## File Structure

```plaintext
src/
├── Desktop/
│   └── Screens/
│       └── Dhome.js         # Desktop-specific component
├── Mobile/
│   └── Screens/
│       └── Mhome.js         # Mobile-specific component
├── Tablet/
│   └── Screens/
│       └── Thome.js         # Tablet-specific component
├── App.js                   # Core application logic
├── index.js                 # Entry point
├── index.css                # Global styles
└── reportWebVitals.js       # Performance reporting (optional)
```

---

## How It Works

### Device Detection
The application uses the `window.innerWidth` property to determine the current screen width and dynamically render the appropriate component:
- **Desktop (`Dhome`)**: Renders when the width is greater than 1024px.
- **Tablet (`Thome`)**: Renders when the width is between 768px and 1024px.
- **Mobile (`Mhome`)**: Renders when the width is less than 768px.

### Code Overview
Here’s the main logic in `App.js`:

```javascript
import React, { useState, useEffect } from 'react';
import Dhome from './Desktop/Screens/Dhome';
import Mhome from './Mobile/Screens/Mhome';
import Thome from './Tablet/Screens/Thome';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth < 768 ? (
        <Mhome />
      ) : windowWidth >= 768 && windowWidth <= 1024 ? (
        <Thome />
      ) : (
        <Dhome />
      )}
    </div>
  );
}

export default App;
```

---

## Customization

### Adjusting Breakpoints
To change the breakpoints:
1. Open `App.js`.
2. Modify the `if` conditions in the return block to fit your requirements.

### Adding New Components
1. Create a new component in the appropriate folder (`Desktop`, `Mobile`, or `Tablet`).
2. Import the component into `App.js` and add the rendering logic as needed.

---

## Contributing

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. **Fork the Repository**: 
   - Click the "Fork" button on the top right to create a copy of this repository in your own GitHub account.
   
2. **Create a New Branch**: 
   - From your forked repository, create a new branch for your changes. We recommend using a descriptive name for your branch, such as `feature/your-feature-name` or `bugfix/issue-name`.

3. **Make Changes**: 
   - Implement your changes, bug fixes, or enhancements in your branch.

4. **Commit Your Changes**: 
   - After you’ve made your changes, commit them with a meaningful message describing what you’ve done.

5. **Create a Pull Request**:
   - Open a pull request (PR) from your branch to the **Contributions** branch of this repository. 
   - **Please note:** Pull requests to the `master` branch are not allowed. All changes should be submitted to the **Contributions** branch for review.

6. **Review Process**:
   - All pull requests to the **Contributions** branch will be reviewed before merging. I will evaluate your changes, provide feedback if necessary, and approve the pull request once everything looks good.
   - Please be patient while your PR is under review.

7. **No Direct Pushes**:
   - Direct pushes to the `master` or `Contributions` branches are **not allowed**. Changes must go through the pull request and review process.

We appreciate your contributions and look forward to collaborating with you!

---

## License
This project is licensed under the [MIT License].

---

## Credits
Created by **Dugan Development Corp**.

---

## FAQ

### 1. Why use device-specific components instead of responsive CSS?
This template is ideal for applications where each device requires unique layouts, interactions, or functionality. It complements traditional responsive design by offering tailored experiences.

### 2. Do I need any additional libraries?
No additional libraries are required. The template is built using plain React.js. However, you can extend it with libraries like `react-router-dom` for navigation or `styled-components` for styling.

### 3. How can I test it?
Resize your browser window or use browser developer tools to simulate different screen sizes.

---

**Happy coding! 🚀**
