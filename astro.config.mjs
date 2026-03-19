import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://AxelRodriguez-dot.github.io',
  base: '/QR-CodeComponent',
  vite: {
    plugins: [tailwindcss()],
  },
});
//h