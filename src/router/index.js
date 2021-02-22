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
    component: () => import(/* webpackChunkName: "docs" */ '../views/Docs.vue')
  },
  {
    path: '/settings',
    name: 'Settings', 
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  },
  {
    path: '/features',
    name: 'Features', 
    component: () => import(/* webpackChunkName: "features" */ '../views/Data/Features.vue')
  },
  {
    path: '/classes',
    name: 'Classes', 
    component: () => import(/* webpackChunkName: "classes" */ '../views/Data/Classes.vue')
  },
  {
    path: '/data',
    name: 'Data', 
    component: () => import(/* webpackChunkName: "data" */ '../views/Data/Data.vue')
  },
  {
    path: '/stats',
    name: 'Stats', 
    component: () => import(/* webpackChunkName: "stats" */ '../views/Data/Statistics.vue')
  },
  {
    path: '/train',
    name: 'Train', 
    component: () => import(/* webpackChunkName: "train" */ '../views/Models/Train.vue')
  },
  {
    path: '/logs',
    name: 'Logs', 
    component: () => import(/* webpackChunkName: "logs" */ '../views/Models/Logs.vue')
  },
  {
    path: '/report',
    name: 'Report', 
    component: () => import(/* webpackChunkName: "report" */ '../views/Models/Report.vue')
  },
]

const router = createRouter({
  linkActiveClass : 'active',
  history: createWebHistory(),
  routes
})

export default router
