import './assets/main.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './ui/plugins/vuetify'
import { createPinia } from 'pinia'
import { injectServices } from './ui/plugins/services'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const pinia = createPinia();

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(pinia)
app.use(VueSidebarMenu)

injectServices(pinia)

app.mount('#app')
