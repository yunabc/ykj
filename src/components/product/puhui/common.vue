<template>
  <router-view class="qqqq" />
</template>

<script>

export default {
  name: '',

  data() {
    return {

    };
  },
  created(){
    
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.calcFontSize();
      window.addEventListener('resize', vm.calcFontSize);
    });
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener('resize', this.calcFontSize);

    next();
  },
  methods: {
    calcFontSize() {
      var view_width = window.screen.width;
      var view_height = window.screen.height;
      var font_size = view_width / 10;
      var height_rem = view_height / font_size; 
      console.log(font_size);
      var html = document.getElementsByTagName('html')[0];
      html.style.fontSize = font_size + 'px';
    }
  }
};
</script>
