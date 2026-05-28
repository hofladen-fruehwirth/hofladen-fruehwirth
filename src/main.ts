import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router'
import './styles/main.css'

const unhead = createHead()

createApp(App).use(router).use(unhead).mount('#app')
