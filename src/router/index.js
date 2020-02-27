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
    },
    {
      path:'/myself',
      name: 'myself',
      component:Layout,
      children:[
        {
          path:'/myself', 
          meta:{
            title:'关于我们'
          },
          component: () => import('@/components/myself'),
        }
      ]
    },
    {
      path:'/content',
      name: 'content',
      component:Layout,
      children:[
        {
          path:'/content',
          component: () => import('@/components/content'),
        }
      ]
    }
  ]
})
