import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'normalize.css' // 重置样式
import './assets/scss/index.scss' // 重要样式出口
import { registerElementPlusIcons } from './utils/registerElementPlusIcons'

const app = createApp(App)

// 使用Pinia状态管理库
app.use(createPinia())

// 使用路由
app.use(router)

// 注册Element Plus图标
registerElementPlusIcons(app)

// 挂载应用
app.mount('#app')
