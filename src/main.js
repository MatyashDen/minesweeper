import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CellType } from "./models/Cell"

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.mixin({
    computed: {
        console: () => console
    },
    data() {
        return {
            CellType: CellType
        }
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
