import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
    VueDevTools(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),
	],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'api': fileURLToPath(new URL('./api', import.meta.url)),
      'models': fileURLToPath(new URL('../models', import.meta.url)),
    },
  },
	build: {
		sourcemap: false,
	},
  server: {
    proxy: {
      '/static': 'https://portal.bgruz.com/',
    }
  }
});
