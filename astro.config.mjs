import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Tu dominio real en Vercel
  site: 'https://kaledsandoval.vercel.app',
  
  // 2. Registramos la integración del sitemap
  integrations: [sitemap()],
  
  vite: {
    plugins: [tailwindcss()]
  }
});