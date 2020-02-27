import Vue from 'vue'
import Router from 'vue-router'
import { Layout}  from "../layout";//Content 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout
    }
  ]
})
