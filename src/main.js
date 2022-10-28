import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from "./router/index";
import Button from 'primevue/button';
import Message from 'primevue/message';
import InputText from 'primevue/inputtext';

import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue)
app.use(router)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Button', Button)
app.component('InputText', InputText)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Message', Message)
app.use().mount('#app')
