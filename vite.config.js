import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    __VUE_PROD_DEVTOOLS__: 'false',
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_TIPS__: 'false'
  },
  build: {
    // Optimize build performance
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          google: ['vue3-google-map']
        }
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000
  },
  // Optimize development server
  server: {
    hmr: {
      overlay: false
    }
  }
});
