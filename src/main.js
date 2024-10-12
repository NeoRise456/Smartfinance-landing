import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import i18n from "@/i18n.js";

import Toolbar from "primevue/toolbar";
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Fieldset from "primevue/fieldset";

const app = createApp(App)

app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'system'
        }
    }
})

app.component('pv-toolbar', Toolbar)
    .component('pv-select-button', SelectButton)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-input-text', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-fieldset', Fieldset )

app.use(i18n)

app.mount('#app')
