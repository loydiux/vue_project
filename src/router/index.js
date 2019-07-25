import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/LoginComponent'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/Users',
      name: 'Users',
      component: () => import('@/components/Home'),
      children: [{
        path: '/Dynamic',
        name: 'Dynamic',
        component: () => import('@/components/Dynamic/Table')
      }]
    }
  ]
})
