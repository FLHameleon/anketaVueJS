import Vue from 'vue'
import Router from 'vue-router'
import Home from '/home/iai/workOcen3/24112020/0805/src/views/Home'
import Receipt from '/home/iai/workOcen3/24112020/0805/src/views/Receipt'
// workOcen3/24112020/0805/src
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/receipt',
      component: Receipt
    }
  ]
})