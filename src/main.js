import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "normalize.css" // 添置样式重置库
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
