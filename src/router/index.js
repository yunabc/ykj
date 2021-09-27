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
    },
    {
      path: '/activity',
      redirect: '/404',
      component: resolve => require(['@/components/mobile/common'], resolve),
      children: [
        {
          path: 'midAutumn',
          redirect: 'midAutumn/midAutumnIndex',
          component: resolve => require(['@/components/mobile/common'], resolve),
          children:[
            {
              path: 'midAutumnIndex',
              name: 'midAutumnIndex',
              component: resolve => require(['@/pages/activity/midAutumn/midAutumnIndex'], resolve)
            },
            {
              path: 'midAutumnQuestion/:index',
              name: 'midAutumnQuestion',
              component: resolve => require(['@/pages/activity/midAutumn/midAutumnQuestion'], resolve)
            },
            {
              path: 'midAutumnQuestion',
              redirect: 'midAutumnQuestion/0'
            },
            {
              path: 'midAutumnIndex',
              name: 'midAutumnIndex',
              component: resolve => require(['@/pages/activity/midAutumn/midAutumnResult'], resolve)
            }
          ]
        },

      ]
    },
    {
      path: '/product',
      redirect: '/404',
      component: resolve => require(['@/components/mobile/common'], resolve),
      children: [
        {
          path: 'puhui',
          // redirect: 'puhui/puhuiIndex',
          component: resolve => require(['@/components/product/puhui/common'], resolve),
          children:[
            {
              path: 'puhuiIndex',
              name: 'puhuiIndex',
              component: resolve => require(['@/pages/product/puhui/puhuiIndex'], resolve),
              meta:{
                keepAlive:true
              }
            },
            {
              path: 'puhuiPay',
              name: 'puhuiPay',
              component: resolve => require(['@/pages/product/puhui/puhuiPay'], resolve)
            },
            {
              path: 'QA',
              name: 'QA',
              component: resolve => require(['@/pages/product/puhui/QA'], resolve)
            },
            {
              path: 'zixun',
              name: 'zixun',
              component: resolve => require(['@/pages/product/puhui/zixun'], resolve)
            },
          ]
        }
      ]
    },
    {
      path: '/404',
      component: resolve => require(['@/components/notFound'], resolve),
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
