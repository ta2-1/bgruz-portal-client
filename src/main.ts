import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/assets/css/index.scss';
import { Icon } from '@iconify/vue';

createApp(App)
  .use(createPinia())
  .use(router)
  .component('Icon', Icon)
  .mount('#app');
