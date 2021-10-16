import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

import NaiveUi from 'naive-ui'
import './assets/svg.js'
import SvgIcon from '@/components/SvgIcon.vue' // svg组件
//引入sqlite3 
// import sqlite3 from 'sqlite3'
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

/* 初始化并将indexedDB挂载到this中 */
const iDB = window.indexedDB.open('userdatas')
iDB.onsuccess = ()=>{
    console.log("打开userdatas成功")
}
iDB.onerror = ()=>{
    alert("获取数据失败，请重新打开程序")
}
app.config.globalProperties.idb = iDB


// app.component("fluent",fluent)
// app.component("ionicons4",ionicons4)
// app.component("ionicons5",ionicons5)
// app.component("material",material)
// app.component("antd",antd)
// app.component("fa",fa)
// app.component("tabler",tabler)

app.mount('#app')



