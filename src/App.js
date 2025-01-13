import React, { useState } from 'react';
import './App.css'; 

const Button = ({ number, isDisabled, isSelected, onClick }) => {
  return (
    <button
      disabled={isDisabled}  
      onClick={() => onClick(number)} 
      className={`button ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
    >
      <span>{number}</span> 
    </button>
  );
};

const ParentComponent = () => {
 
  const disabledButtons = [9, 10, 11];

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (number) => {
    if (disabledButtons.includes(number)) return; 
    
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(number)) {
        return prevSelectedButtons.filter((btn) => btn !== number);
      } else {
        return [...prevSelectedButtons, number];
      }
    });
  };

  return (
    <div className="button-container">
      {[...Array(12).keys()].map((num) => {
        const buttonNum = num + 3; 
        return (
          <Button
            key={buttonNum}
            number={buttonNum}
            isDisabled={disabledButtons.includes(buttonNum)} 
            isSelected={selectedButtons.includes(buttonNum)} 
            onClick={handleButtonClick} 
          />
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Button Selection App</h1>
      <ParentComponent />
    </div>
  );
};

export default App;



