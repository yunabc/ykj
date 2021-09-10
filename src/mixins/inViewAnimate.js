import inViewAnimate from 'js/inViewAnimate';
export default {
  mounted(){
    this.init()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    this.remove()
    next()
  },
  methods:{
    resetInViewAnimate(){

    },
    init(){
      inViewAnimate.bindObserver('.animat-fadeInUp')
      inViewAnimate.bindObserver('.animat-fadeInRight')
      inViewAnimate.bindObserver('.animat-linearbig')
      
    },
    remove(){
      inViewAnimate.removeObserver()

    }
  }
}