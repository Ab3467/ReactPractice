// TabButton.js

import React from 'react';

const buttonContainerStyle = {
  display: 'inline-block', // Display buttons in a row
  border: '2px solid #ddd', // Border styling
  borderRadius: '10px', // Rounded corners
  padding: '10px', // Padding around buttons
  marginBottom: '20px' // Margin below buttons
};

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '5px',
  marginRight: '5px' // Space between buttons
};

export default function TabButton({children, ClickBtn}) {
  return (
    <div style={buttonContainerStyle}> {/* Add inline style for container */}
      <button onClick={ClickBtn} style={buttonStyle}>{children}</button>
    </div>
  );
}
