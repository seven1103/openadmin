import layoutHeaderAside from '@/layout/header-aside'
import Account from './modules/Account'
import Application from './modules/Application'
import Auth from './modules/Auth'
import Channel from './modules/Channel'
import Column from './modules/Column'
import Commodity from './modules/Commodity'
import Copyright from './modules/Copyright'
import Examine from './modules/Examine'
import Gallery from './modules/Gallery'
import Menu from './modules/Menu'
import Message from './modules/Message'
import Order from './modules/Order'
import Roles from './modules/Roles'
import StatisticsAnalysis from './modules/StatisticsAnalysis'
import Subscript from './modules/Subscript'
import SystemSettings from './modules/SystemSettings'
import UserCenter from './modules/UserCenter'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    meta: {
      title: '首页'
    },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  },
  Account,
  Application,
  Auth,
  Channel,
  Column,
  Commodity,
  Copyright,
  Examine,
  Gallery,
  Menu,
  Message,
  Order,
  Roles,
  StatisticsAnalysis,
  Subscript,
  SystemSettings,
  UserCenter
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
