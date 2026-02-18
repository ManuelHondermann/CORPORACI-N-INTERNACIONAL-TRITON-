
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Ocultar cargador cuando el navegador haya procesado el render inicial
  window.addEventListener('load', () => {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
          loader.style.visibility = 'hidden';
          loader.remove();
      }, 500);
    }
  });
  
  // Respaldo por si el evento load ya pasó
  setTimeout(() => {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
  }, 1500);
}
