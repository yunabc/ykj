<template>
  <div class="zixun" >
    <div class="top">
      
      <img src="@/assets/imgs/product/puhui/top.png" alt="">
    </div>
    <div class="bottom">
      
      <img src="@/assets/imgs/product/puhui/bottom.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      checked: false,
      showVerifyCode: false,
      
    };
  },
};
</script>

<style lang="stylus" scoped>
.zixun
  height 100%
  overflow auto
  background-color #F9F9F9
  position relative
  .top
    img
      width 100%
  .bottom
    width 100%
    position fixed
    bottom 0
    img 
      width 100%

</style>
