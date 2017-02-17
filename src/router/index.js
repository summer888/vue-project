import Vue from 'vue'
import Router from 'vue-router'
import Swiper from 'components/Swiper'
import App from 'App'
import Home from 'components/Home'
import Type from 'components/Type'
import Shopcar from 'components/Shopcar'
import My from 'components/My'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/index',
      name: 'App',
      component: App
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
