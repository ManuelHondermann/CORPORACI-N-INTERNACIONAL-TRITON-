
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  // Renderizamos la aplicación
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Una vez que React comienza a trabajar, esperamos un breve momento para ocultar el cargador
  // Esto asegura que el usuario vea la web ya procesada.
  setTimeout(() => {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 800);
    }
  }, 1000);
} else {
  console.error("No se encontró el elemento 'root' para montar la aplicación.");
}
