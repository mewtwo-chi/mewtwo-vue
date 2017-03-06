import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

import list from '../components/list/List.vue'
import article from '../components/article/article.vue'

const routes = [
  { path: '/',
    component: list,
    name: 'list'
  },
  { path: '/article/:topicId',
    component: article,
    name: 'article'
  }
]

// 实例话vue-router
export default new VueRouter({
  routes
})

