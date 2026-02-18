
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importación sin extensión para evitar problemas de resolución

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Función para ocultar la pantalla de carga suavemente
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

  // Se ejecuta tras el primer ciclo de renderizado de React
  window.requestAnimationFrame(() => {
    setTimeout(hideLoader, 300);
  });
}
