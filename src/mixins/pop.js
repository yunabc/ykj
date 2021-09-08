export default {
  methods:{
    _bindPopState(){
      let that = this
      function pushHistory() {  
        let url = location.hash
        url = url.indexOf('?')> -1 ?url+'&pushStated=1':url+'?pushStated=1'
        var state = { 
          title: that.$route.meta.title,  
          url: url
        };  
        window.history.pushState(state, state.title, state.url);  
      }
      if(this.$route.query.pushStated!=1){
        pushHistory();
      }
      window.addEventListener("popstate", this.popHandler, false);
    }
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    console.log('leave')
    window.removeEventListener('popstate',this.popHandler,false)
    next()
  }
}