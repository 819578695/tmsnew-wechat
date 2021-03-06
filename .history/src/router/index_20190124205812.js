import Vue from 'vue'
import Router from 'vue-router'


import user from '@/views/user/index'
import reporting from '@/views/reportTable/index'
import main from '@/views/reportTable/main'
import pickup from '@/views/reportTable/pickupIndex'
import deliver from '@/views/reportTable/deliverIndex'
import login from '@/views/login'
import orderDetails from '@/components/orderDetails'
import orders from '@/views/order/index1'
import orderDetailsOut from '@/components/orderDetailsOut'
import orderDetailsPut from '@/components/orderDetailsPut'
// 首页
const Indexs = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/reporting',
    name: 'reporting',
    component: reporting
  },
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/orderDetails',
    name: 'orderDetails',
    component: orderDetails
  },
  {
    path: '/orders',
    name: 'orders',
    component: orders
  },
  {
    path: '/orderDetailsOut',
    name: 'orderDetailsOut',
    component: orderDetailsOut
  },
  {
    path: '/orderDetailsPut',
    name: 'orderDetailsPut',
    component: orderDetailsPut
  },
  {
    path: '/pickup',
    name: 'pickup',
    component: pickup
  },
  {
    path: '/deliver',
    name: 'deliver',
    component: deliver
  }
]
// 报表中心
import orderList from '@/views/reportTable/orderList'
import orderInfo from '@/views/reportTable/orderInfo'
const Table = [
  {
    path: '/orderList',
    name: 'orderList',
    component: orderList
  },
  {
    path: '/orderInfo',
    name: 'orderInfo',
    component: orderInfo
  }
]

import updataPsd from '@/views/user/updataPsd'
import record from '@/views/user/record'

const User = [
  {
    path: '/updataPsd',
    name: 'updataPsd',
    component: updataPsd
  },
  {
    path: '/record',
    name: 'record',
    component: record
  },
]

const route = [].concat(
  Indexs,Table,User
)


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: route
})
