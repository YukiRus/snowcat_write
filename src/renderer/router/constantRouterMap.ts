import { RouteRecordRaw } from 'vue-router'

const SPage = ()=>import("@renderer/views/SecondaryPages/index.vue")


const routes: Array<RouteRecordRaw> = [
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/views/404.vue") },
    { path: '/', name: '首页', component: () => import('@renderer/views/Home/index.vue') },
    {
      path: '/editor',
      name: 'editor',
      component: SPage,
      children: [
        {
          path: "",
          component: () => import('@renderer/views/Write/index.vue'),
        }
      ]
    }
]

export default routes