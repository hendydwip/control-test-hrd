import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/middlewares/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        middleware: [
          auth
        ]
      },
      redirect: '/dashboard'
    },
    {
      path:'/apply',
      name: 'apply',
      component: () => import('@/components/page/applicant/apply.vue'),  
    },
    {
      path:'/applicants',
      meta:{
        middleware:[
          auth
        ]
      },
      component: () => import('@/components/page/applicant/index.vue'),  
    },
    {
      path: '/dashboard',
      meta: {
        middleware: [
          auth
        ]
      },
      component: () => import('@/components/page/dashboard/index.vue'),  
    },
    {
      path: '/leave',
      meta:{
        middleware:[
          auth
        ]
      },
      component:() => import('@/components/page/leave/index.vue')
    },    
    {
      path: '/attendance',
      meta: {
        middleware: [
          auth
        ]
      },
      component: () => import('@/components/page/attendance/index.vue'),  
    },    
    {
      path: '/employees',
      meta: {
        middleware: [
          auth
        ]
      },        
      component: () => import('@/components/page/employee/index.vue'),  
      children:[
        {
          path: '',
          meta: {
            middleware: [
              auth
            ]
          }, 
          component: () => import('@/components/page/employee/employee.vue'),
        },
        {
          path: 'add',
          meta: {
            middleware: [
              auth
            ]
          }, 
          name: 'tambah',
          component: () => import('@/components/page/employee/employeeAdd.vue'),
        },    
        {
          path: 'edit/:id',
          meta: {
            middleware: [
              auth
            ]
          }, 
          name: 'ubah',
          component: () => import('@/components/page/employee/employeeAdd.vue'),
        },          
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/page/login/Login.vue')
    }     
  ]

})