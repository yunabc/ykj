import { Vue } from '@/store';
import Router from 'vue-router';
import inViewAnimate from 'js/inViewAnimate';
Vue.use(Router);
var router = new Router({
  // 页面跳转显示在顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/official/home'
    },
    {
      path: '/official',
      redirect: '/official/home',
      component: resolve => require(['@/components/pc/common'], resolve),
      children: [
        {
          path: 'home',
          name: 'home',
          component: resolve => require(['@/pages/pc/home/home'], resolve)
        },
        {
          path: 'service',
          name: 'service',
          component: resolve => require(['@/pages/pc/service/service'], resolve)
        },
        {
          path: 'info/:id',
          name: 'info',
          component: resolve => require(['@/pages/pc/info/info'], resolve)
        },
        {
          path: 'about',
          name: 'about',
          component: resolve => require(['@/pages/pc/about/about'], resolve)
        },
        {
          path: 'market',
          name: 'market',
          component: resolve => require(['@/pages/pc/market/market'], resolve)
        },
        {
          path: 'contact',
          name: 'contact',
          component: resolve => require(['@/pages/pc/contact/contact'], resolve)
        },
        {
          path: 'info',
          redirect: 'info/0'

        }
      ]
    }

  ]
});
router.beforeEach((to, from, next) => {
  // inViewAnimate.removeObserver()
  next();
});

router.afterEach((to, from) => {
  console.log('afterEach');
  // window.onload = () => {
    
    // inViewAnimate.bindObserver('.animat-fadeInUp')
    // inViewAnimate.bindObserver('.animat-fadeInRight')
    // inViewAnimate.bindObserver('.animat-fadeInUp')
  // };
});

export default router;
