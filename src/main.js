import { createApp } from 'vue';
import router from './route.js';
import App from './App.vue';
import allstate from './store/Index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

//nama variable yang di export dan yang di import harus lah sama.


const app = createApp(App);
app.use(router);
app.use(allstate);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.mount('#app');
