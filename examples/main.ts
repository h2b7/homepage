import App from './App.vue'
import bcui from '../packages/index'
import router from './router/index'
import { createApp } from 'vue'

import '../packages/dist/css/index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(bcui)
app.use(router)
app.mount('#app')

export default app
