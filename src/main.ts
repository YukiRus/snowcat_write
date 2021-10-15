import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

import NaiveUi from 'naive-ui'
import './assets/svg.js'
import SvgIcon from '@/components/SvgIcon.vue' // svg组件
// import fluent from '@vicons/fluent'
// import ionicons4 from '@vicons/ionicons4'
// import ionicons5 from '@vicons/ionicons5'
// import material from '@vicons/material'
// import antd from '@vicons/antd'
// import fa from '@vicons/fa'
// import tabler from '@vicons/tabler'

const app = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(NaiveUi)
app.component("svg-icon", SvgIcon)
// app.component("fluent",fluent)
// app.component("ionicons4",ionicons4)
// app.component("ionicons5",ionicons5)
// app.component("material",material)
// app.component("antd",antd)
// app.component("fa",fa)
// app.component("tabler",tabler)

app.mount('#app')
