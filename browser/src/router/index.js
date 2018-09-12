import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'],resolve)
    },
    {
      path: '/pcHome',
      name: 'pcHome',
      component: resolve => require(['@/components/pcHome'],resolve)
    },
    {
      path: '/mHome',
      name: 'mHome',
      component: resolve => require(['@/components/mHome'],resolve),
      redirect:"/photo",
      children:[
        {
          path: '/homepage',
          name: 'homepage',
          component: resolve => require(['@/components/mComps/homepage'],resolve),
        },
        {
          path: '/photo',
          name: 'photo',
          component: resolve => require(['@/components/mComps/photo'],resolve),
        }
      ]
    }
  ]
})
