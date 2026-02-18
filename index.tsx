
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  const hideLoader = () => {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        if (loader.parentNode) {
          loader.remove();
        }
      }, 500);
    }
  };

  // Aseguramos que el loader se oculte después del montaje
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 500);
  } else {
    window.addEventListener('load', hideLoader);
  }
}

