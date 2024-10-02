import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssPxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 375,
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList:['rv-image-preview__slides-inner > *']
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
});