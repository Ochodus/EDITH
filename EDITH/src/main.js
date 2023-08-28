import '@babel/polyfill'
import 'mutationobserver-shim'
import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers/index.js'

const app = createApp(App)
app.use(routers)
app.mount('#app')
