// App.js

import React, { useState } from 'react';
import './App.css'; // Importing the CSS file for styling

// Button Component
const Button = ({ number, isDisabled, isSelected, onClick }) => {
  return (
    <button
      disabled={isDisabled}  // Disable button if isDisabled is true
      onClick={() => onClick(number)}  // Trigger the onClick handler passed as prop
      className={`button ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
    >
      <span>{number}</span>  {/* Display the button number */}
    </button>
  );
};

// Parent Component to manage the state of buttons
const ParentComponent = () => {
  // List of disabled buttons (buttons 9, 10, and 11)
  const disabledButtons = [9, 10, 11];

  // State to track the selected buttons
  const [selectedButtons, setSelectedButtons] = useState([]);

  // Function to handle button clicks
  const handleButtonClick = (number) => {
    if (disabledButtons.includes(number)) return; // Don't select the button if it's disabled
    
    // Toggle the selection of the button
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(number)) {
        // Unselect the button if it's already selected
        return prevSelectedButtons.filter((btn) => btn !== number);
      } else {
        // Select the button if it's not already selected
        return [...prevSelectedButtons, number];
      }
    });
  };

  return (
    <div className="button-container">
      {/* Render buttons from 3 to 14 */}
      {[...Array(12).keys()].map((num) => {
        const buttonNum = num + 3; // Create button numbers from 3 to 14
        return (
          <Button
            key={buttonNum}
            number={buttonNum}
            isDisabled={disabledButtons.includes(buttonNum)} // Disable buttons 9, 10, 11
            isSelected={selectedButtons.includes(buttonNum)} // Check if button is selected
            onClick={handleButtonClick} // Pass click handler to the button
          />
        );
      })}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="app">
      <h1>Button Selection App</h1>
      <ParentComponent />
    </div>
  );
};

export default App;



