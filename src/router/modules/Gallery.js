/*
 * @Description: 
 * @Author: Liyuanpeng
 * @Date: 2019-07-03 10:57:33
 * @LastEditTime: 2019-07-05 09:16:04
 * @LastEditors: Liyuanpeng
 */
import layoutHeaderAside from '@/layout/header-aside'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

const profix = process.env.VUE_APP_ROUTER_PROFIX

export default {
  path: '/' + profix + '/gallery',
  name: '/' + profix + '/gallery',
  meta: { ...meta, title: '图库管理' },
  redirect: { path: '/' + profix + '/gallery/index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: `${pre}index`, name: `${pre}index`, component: _import('main/Gallery/index.vue'), meta: { ...meta, title: '模块首页' } },
    { path: `${pre}iconlist`, name: `${pre}iconlist`, component: _import('main/Gallery/icon.vue'), meta: { ...meta, title: '图标列表' } },
    { path: `${pre}imagelist`, name: `${pre}imagelist`, component: _import('main/Gallery/image.vue'), meta: { ...meta, title: '图片列表' } },
    { path: `${pre}iconselect`, name: `${pre}iconselect`, component: _import('main/Gallery/iconselect.vue'), meta: { ...meta, title: '图标选择器' } },
    { path: `${pre}addicon`, name: `${pre}addicon`, component: _import('main/Gallery/addicon.vue'), meta: { ...meta, title: '图标添加', hidden: true } }
  ])('/' + profix + '/gallery/')
}
