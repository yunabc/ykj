<template>
  <div class="mid-autumn">
    <div class="bottom_bg" />
    <div class="star" />
    <div class="light" />
    <div class="txt-box">
      <div class="txt" />
      <div
        @touchstart="touchstartHandler"
        @touchmove="touchmoveHandler"
        @touchend="touchendHandler"
        :class="touching?'active':''"
        class="btn"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      touching: false
    };
  },
  created() {
    // alert(window.innerHeight);
  },
  methods: {
    touchstartHandler() {
      // alert(2);
      this.touching = true;
    },
    touchmoveHandler() {
    },
    touchendHandler() {
      this.touching = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.mid-autumn
  height 100%
  background-image url('~@/assets/imgs/activity/midAutumn/top.png'),url('~@/assets/imgs/activity/midAutumn/bg.jpg')
  background-position 0 0,0 0
  background-repeat no-repeat,no-repeat
  background-size 100%,100% 100%
  .bottom_bg
    position absolute
    left 0
    bottom 0
    width 100%
    height 1015px
    background url('~@/assets/imgs/activity/midAutumn/bottom.png') 0 0 no-repeat
    background-size 100%
  .star
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    z-index 1
    background url("~@/assets/imgs/activity/midAutumn/star.png") 0 no-repeat
    background-size 100%
    animation fadeInOut 1.6s infinite
    @keyframes fadeInOut
      0%
        opacity 0
      50%
        opacity 1
      100%
        opacity 0
  .light
    position absolute
    right 0
    top 0
    width 406px
    height 332px
    z-index 2
    background url("~@/assets/imgs/activity/midAutumn/light.png") 0 no-repeat
    background-size 100%
    &:after
      content ""
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background url("~@/assets/imgs/activity/midAutumn/lighted.png") 0 no-repeat
      background-size 100%
      animation fadeInOut 2s infinite
  .txt-box
    position absolute
    z-index 3
    top 50%
    left 0
    width 100%
    transform translate(0,-60%)
    .txt
      // width 451px
      // height 304px
      width 420px
      height 280px
      margin 0 auto 45px
      background url("~@/assets/imgs/activity/midAutumn/text.png") center no-repeat
      background-size auto 100%
    .btn
      width 475px
      height 80px
      margin 0 auto
      border-radius 6px
      border 1px solid transparent
      background url("~@/assets/imgs/activity/midAutumn/btn.png") center no-repeat
      background-size 100% 100%
      &.active
        border-color #f2d182
@media(max-height: 657px)
  .mid-autumn
    background-position 0 -80px,0 0
    background-size 100%,100% 120%
    .bottom_bg
      background-position 0 160px
    .txt-box
      .txt
        // width 451px
        // height 304px
        width 593px
        height 163px
        // margin 0 auto 65px
        background url("~@/assets/imgs/activity/midAutumn/text2.png") center no-repeat
        background-size auto 100%
</style>
