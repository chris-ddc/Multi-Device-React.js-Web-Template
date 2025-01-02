import React, { useState, useEffect } from 'react';
import Dhome from './Desktop/Screens/Dhome';
import Mhome from './Mobile/Screens/Mhome';
import Thome from './Tablet/Screens/Thome';

function App() {
  // State to store window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update state with the new width
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Render the correct component based on the window width
  return (
    <div>
      {windowWidth < 768 ? (
        <Mhome /> // Mobile
      ) : windowWidth >= 768 && windowWidth <= 1024 ? (
        <Thome /> // Tablet
      ) : (
        <Dhome /> // Desktop
      )}
    </div>
  );
}

export default App;
