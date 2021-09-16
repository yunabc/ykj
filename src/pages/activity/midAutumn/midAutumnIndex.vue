<template>
  <div class="mid-autumn" v-show="loaded">
    <div class="bottom_bg" />
    <div class="logo"></div>
    <div class="star" />
    <div class="light" />
    <div class="txt-box">
      <div class="txt animate__animated animate__fadeInUp" />
      <div
        @touchstart.stop="touchstartHandler"
        @touchmove.stop="touchmoveHandler"
        @touchend.stop="touchendHandler"
        :class="touching?'active':''"
        class="btn animate__animated animate__bounceIn"
        @click.stop="touchendHandler"
      />
    </div>
  </div>
</template>

<script>
import { preLoadImage } from 'js/preLoadImage';
export default {
  name: '',
  data() {
    return {
      touching: false,
      loaded:false
    };
  },

  created() {
    this.$store.dispatch('setLoading', true);
    preLoadImage([
      require('@/assets/imgs/activity/midAutumn/top.png'),
      require('@/assets/imgs/activity/midAutumn/bg.jpg'),
      require('@/assets/imgs/activity/midAutumn/bottom.png'),
      require('@/assets/imgs/activity/midAutumn/star.png'),
      require('@/assets/imgs/activity/midAutumn/light.png'),
      require('@/assets/imgs/activity/midAutumn/lighted.png'),
      require('@/assets/imgs/activity/midAutumn/text.png'),
      require('@/assets/imgs/activity/midAutumn/btn.png'),
      require('@/assets/imgs/activity/midAutumn/text2.png')
    ], () => {
      // debugger
      this.$store.dispatch('setLoading', false);
      this.loaded = true
      // 预加载第二页图片
      preLoadImage([
        require('@/assets/imgs/activity/midAutumn/question-bg.jpg'),
        require('@/assets/imgs/activity/midAutumn/star1.png'),
        require('@/assets/imgs/activity/midAutumn/right.png'),
        require('@/assets/imgs/activity/midAutumn/option-1.png'),
        require('@/assets/imgs/activity/midAutumn/option-2.png'),
        require('@/assets/imgs/activity/midAutumn/option-3.png'),
        require('@/assets/imgs/activity/midAutumn/next.png'),
        require('@/assets/imgs/activity/midAutumn/q-moon-1.png'),
        require('@/assets/imgs/activity/midAutumn/q-bottomed-1.png'),
        require('@/assets/imgs/activity/midAutumn/q-bottom-1.png')
      ])
    });
    // alert(window.innerHeight);
  },
  methods: {
    touchstartHandler() {
      this.touching = true;
    },
    touchmoveHandler() {
    },
    touchendHandler() {
      this.touching = false;
      this.$router.push('./midAutumnQuestion');
    }
  }
};
</script>

<style lang="stylus" scoped>
.animate__animated.animate__bounceIn
  animation-delay 0.6s
.logo
  position absolute
  right 30px
  top 30px
  width 160px
  height 60px
  background url('~@/assets/imgs/activity/midAutumn/logo.png') 0 0 no-repeat
  background-size 100%
.mid-autumn
  height 100%
  position relative
  overflow hidden
  background-image url('~@/assets/imgs/activity/midAutumn/top.png'),url('~@/assets/imgs/activity/midAutumn/bg.jpg')
  background-position 0 0,0 0
  background-repeat no-repeat,no-repeat
  background-size 100%,100% 100%
  .bottom_bg
    position absolute
    left 0
    bottom 0
    width 100%
    height 926px
    background url('~@/assets/imgs/activity/midAutumn/bottom.png') 0 0 no-repeat
    background-size 100%
    &:after
      content ""
      position absolute
      right 0
      top 0
      width 207px
      height 666px
      background url("~@/assets/imgs/activity/midAutumn/bottomed.png") 0 no-repeat
      background-size 100%
      animation fadeInOut 2s infinite
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
      right 0
      top 0
      width 464px
      height 362px
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
      bottom -130px
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
