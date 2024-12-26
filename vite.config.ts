import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_SITE_TITLE': JSON.stringify('あなたのサイトのタイトル'),
    'import.meta.env.VITE_SITE_DESCRIPTION': JSON.stringify('あなたのサイトの説明文'),
    'import.meta.env.VITE_OG_IMAGE': JSON.stringify('https://example.com/ogimage.png'),
  },
});