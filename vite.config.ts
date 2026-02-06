import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ⚠️ ESTA LÍNEA ES OBLIGATORIA ⚠️
  base: '/CORPORACI-N-INTERNACIONAL-TRITON/',
});
