import './bootstrap';
import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue'
import globalComponents from './components/global'
import router from './router/router.js'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(globalComponents)
app.use(MotionPlugin)
app.mount('#app')
