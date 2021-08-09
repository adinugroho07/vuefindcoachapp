import { createApp } from 'vue';
import router from './route.js';
import App from './App.vue';

//nama variable yang di export dan yang di import harus lah sama.


const app = createApp(App);
app.use(router);


app.mount('#app');
