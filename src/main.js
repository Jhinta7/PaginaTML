import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from "@/router";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import "primevue/resources/themes/bootstrap4-dark-purple/theme.css"

import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import OverlayPanel from 'primevue/overlaypanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Image from 'primevue/image';
import Row from 'primevue/row';

const app = createApp(App);

app.component('pv-menubar', Menubar);
app.component('pv-input-text', InputText);
app.component('pv-image', Image);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-overlay-panel', OverlayPanel);
app.component('pv-slidebar', Sidebar);
app.component('pv-datatable', DataTable);
app.component('pv-column', Column);
app.use(router)
app.use(PrimeVue);

app.mount('#app');