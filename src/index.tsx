import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18+ import
import './index.css';
import App from './App'; // ✅ Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
