import layoutHeaderAside from '@/layout/header-aside'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

const profix = process.env.VUE_APP_ROUTER_PROFIX

export default {
  path: '/' + profix + '/Subscript',
  name: '/' + profix + '/Subscript',
  meta: { ...meta, title: '订阅管理' },
  redirect: { path: '/' + profix + '/Subscript/index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: `${pre}index`, name: `${pre}index`, component: _import('main/Subscript/index.vue'), meta: { ...meta, title: '模块首页' } }
  ])('/' + profix + '/Subscript/')
}
