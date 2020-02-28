import Vue from 'vue'
import Router from 'vue-router'
import { Layout}  from "../layout";//Content 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout,
      redirect:'/content'
    },
    {
      path:'/content',
      name: 'Home',
      component:Layout,
      children:[
        {
          path:'/content',
          component: () => import('@/components/content'),
        }
      ]
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
          component: () => import('@/components/self/myself'),
        }
      ]
    }
  ]
})
