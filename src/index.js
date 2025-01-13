// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import the global styles
import App from './App'; // Import the main App component

// Create the root element and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
