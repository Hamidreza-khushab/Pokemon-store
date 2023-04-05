import { createApp } from 'vue'
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import BootstrapVueNext from 'bootstrap-vue-next'

// import './style.css'

import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(BootstrapVueNext)
app.mount('#app');


