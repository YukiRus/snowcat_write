import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/views/404.vue") },
    { path: '/', name: '首页', component: () => import('@renderer/views/Home/index.vue') },
]

export default routes