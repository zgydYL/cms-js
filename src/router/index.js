import { createRouter, createWebHashHistory } from "vue-router";

// 路由映射关系 (后期，只需要向其中添加路由映射关系即可)
const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
    },
]

// 路由模式
const history = createWebHashHistory()

// 创建路由
const router = createRouter({
    history,
    routes
});

// 导出路由
export default router;