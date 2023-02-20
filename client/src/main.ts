import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"
import "./assets/css/app.scss"

createApp(App).use(createPinia()).mount('#app')
