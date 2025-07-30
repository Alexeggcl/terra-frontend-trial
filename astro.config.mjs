// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  compressHTML: true,
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true 
        }
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('@terrahq')) {
              return 'vendor-terra';
            }
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'legacy'
        }
      }
    }
  }
});
