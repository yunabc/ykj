import inViewAnimate from 'js/inViewAnimate';
export default {
  mounted() {
    if (this.autoInitInViewAnimate) {
      this.initInViewAnimate();
    }
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    this.removeInViewAnimate();
    next();
  },
  data() {
    return {
      autoInitInViewAnimate: true

    };
  },
  methods: {
    initInViewAnimate() {
      inViewAnimate.bindObserver('.animat-fadeInUp');
      inViewAnimate.bindObserver('.animat-fadeInRight');
      inViewAnimate.bindObserver('.animat-linearbig');
    },
    removeInViewAnimate() {
      inViewAnimate.removeObserver();
    }
  }
};
