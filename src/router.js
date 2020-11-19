import Vue from 'vue'
import Router from 'vue-router'
import Home from '/home/iai/workOcen3/19112020/0805/src/views/Home'
import Anketa from '/home/iai/workOcen3/19112020/0805/src/views/Anketa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/anketa',
      component: Anketa
    }
  ]
})