import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/HelloWorld'
import Main from '@/components/pages/common'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/app-center',
      name: 'app',
      component: Main,
      redirect: '/app-center/umbrella',
      children: [
        {
          path: 'umbrella',
          component: () => import('../components/pages/umbrella'),
          name: 'umbrellaManage',
          meta: {
            name: '志愿伞管理',
            requiresAuth: true,
          },
        },
        {
          path: 'user',
          component: () => import('../components/pages/user'),
          name: '用户管理',
          meta: {
            name: '用户管理',
            requiresAuth: true,
          },
        },
        {
          path: 'base',
          component: () => import('../components/pages/baseInfo'),
          name: '基础信息管理',
          meta: {
            name: '基础信息管理',
            requiresAuth: true,
          },
        },
        {
          path: 'borrow',
          component: () => import('../components/pages/borrowInfo'),
          name: '借还记录管理',
          meta: {
            name: '借还记录管理',
            requiresAuth: true,
          },
        },
        {
          path: 'sign',
          component: () => import('../components/pages/signInfo'),
          name: '志愿者值班信息',
          meta: {
            name: '志愿者值班信息',
            requiresAuth: true,
          },
        },
        {
          path: 'overtime',
          component: () => import('../components/pages/overTime'),
          name: '未还伞信息',
          meta: {
            name: '未还伞信息',
            requiresAuth: true,
          },
        },
        {
          path: 'user-edit',
          component: () => import('../components/pages/userEdit'),
          name: '修改信息',
          meta: {
            name: '用户管理 / 修改信息',
            requiresAuth: true,
          }
        }
      ]
    }
  ]
})
