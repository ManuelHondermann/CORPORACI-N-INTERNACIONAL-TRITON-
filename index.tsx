
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

  // Ocultar loader una vez que React tome el control
  const hideLoader = () => {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        if (loader.parentNode) loader.remove();
      }, 500);
    }
  };

  // Pequeño delay para asegurar el primer render
  setTimeout(hideLoader, 800);
}
