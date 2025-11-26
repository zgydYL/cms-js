import { createApp } from 'vue'
import App from './App.vue'

// 导入 normalize.css
import "normalize.css";
// 导入 自定义样式【尽可能直接导入多个css样式，避免@import性能问题】
import "./assets/css/index.css";

// 导入路由
import router from "./router/index";
// 导入pinia
import pinia from './store/index';

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')