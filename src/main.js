import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// 初始化全局样式表
import '@/styles/index.scss'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
