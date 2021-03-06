// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from '@/vuex'
import MuseUI from 'muse-ui'
import { sync } from 'vuex-router-sync'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import './assets/style/css/github-markdown.css'

import * as filters from '@/plugins/filters'

Vue.config.productionTip = false

// 全局注册过滤器
Object.keys(filters).forEach((val) => {
  Vue.filter(val, filters[val])
})

// 同步路由
sync(store, router)

// 使用MuseUI
Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
