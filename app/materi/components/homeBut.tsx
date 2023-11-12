import React from 'react';


const HomeButton: React.FC = () => {
    const buttonStyle: React.CSSProperties = {
      backgroundColor: '#ffffff', // White background color
      borderRadius: '9999px',     // Full border radius for a rounded button
      padding: '8px 16px',        // Adjust padding as needed
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for a lifted effect
    };
  
    return (
      <button style={buttonStyle}>
        {/* You can customize the content inside the button here */}
        Home
      </button>
    );
  };

export default HomeButton;