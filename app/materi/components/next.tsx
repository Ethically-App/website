import React from 'react';
export default function Next() {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: '#FFD952', // White background color
        borderRadius: '99999px',     // Full border radius for a rounded button
        padding: '8px 16px',        // Adjust padding as needed
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for a lifted effect
      };
    
    return (
        <footer className="bg-white p-6 px-4 w-full  text-bottom text-base flex justify-end text-white]">
            <button style={buttonStyle} className='text-white'>
        {/* You can customize the content inside the button here */}
        Next
      </button>
        </footer>
    )
}