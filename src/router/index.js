import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/docs',
    name: 'Docs',
    default:'intro',
    component: () => import(/* webpackChunkName: "docs" */ '../views/Docs.vue'),
    children: [
      { 
        path:'intro',
        component: () => import(/* webpackChunkName: "intro" */ '../views/docs/intro.vue')
      },
      {
        path: 'init',
        component: () => import(/* webpackChunkName: "intro" */ '../views/docs/intro.vue')
      },
      {
        path: 'changes',
        component: () => import(/* webpackChunkName: "changes" */ '../views/docs/changes.vue')
      }
    ]
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import(/* webpackChunkName: "features" */ '../views/data/Features.vue')
  },
  {
    path: '/classes',
    name: 'Classes',
    component: () => import(/* webpackChunkName: "classes" */ '../views/data/Classes.vue')
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import(/* webpackChunkName: "data" */ '../views/data/Data.vue')
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import(/* webpackChunkName: "stats" */ '../views/data/Statistics.vue')
  },
  {
    path: '/train',
    name: 'Train',
    component: () => import(/* webpackChunkName: "train" */ '../views/models/Train.vue')
  },
  {
    path: '/logs',
    name: 'Logs',
    component: () => import(/* webpackChunkName: "logs" */ '../views/models/Logs.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import(/* webpackChunkName: "report" */ '../views/models/Report.vue')
  }
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(),
  routes
})

export default router
