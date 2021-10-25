
<template>
  <div class="loading-wrap" :class="slowHide?'hide':''" v-if="showFlag">
    <div class="icon-loading">
      <div class="border">
        
      </div>
      <div class="shanxing shanxing3">
        <div class="sx1"></div>
        <div class="sx2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFlag:true,
      slowHide:false,
    };
  },
  methods:{
    hide(){
      this.slowHide = true
      setTimeout(()=>this.showFlag = false,1000)
    }
  }
};
</script>

<style lang="stylus" scoped>

$width = 100rem
$sectorWidth = 150rem
$orange = #f62
$bg = white
$borderWidth = 24rem
.loading-wrap
  position fixed
  width 100%
  height 100%
  background #fff
  z-index 10
  left 0
  top 0
  transition opacity 1s
  box-sizing border-box
  &.hide
    opacity 0
  // .loading
  //   background #fff
  //   position fixed
  //   width 100%
  //   height 100%
  //   left 0
  //   top 0
  .icon-loading
    width $width
    height $width
    position absolute
    left 50%
    top 50%
    margin-top -($width / 2)
    margin-left -($width / 2)
    overflow hidden
    animation mymove1 4s infinite
    @keyframes mymove1
      0%
        border-radius 0px
        transform rotate(-45deg)
      25%
        border-radius 35%
      50%
        border-radius 0px
        transform rotate(-765deg)
      100%
        border-radius 0px
        transform rotate(-765deg)  
    .border
      z-index 2
      position absolute
      width $width
      height $width
      left 0
      top 0
      border $borderWidth solid $orange
    .shanxing
      z-index 1
      padding 0 
      margin 0
      font-size 0
      border none
      position absolute
      left 0
      bottom 0
      transform translate3D(-72%,72%,0)
      width $sectorWidth
      height $sectorWidth
      border-radius ($sectorWidth / 2)
      background-color $orange
      animation mymove2 4s infinite
      @keyframes mymove2
        0%
          transform translate3D(-72%,72%,0)
        50%
          transform translate3D(-72%,72%,0)
        70%
          transform translate3D(-48%,48%,0)
        80%
          transform translate3D(-48%,48%,0)
        100%
          transform translate3D(-72%,72%,0)  
      &.shanxing3
        .sx1
          transform rotate(0deg)
        .sx2
          transform rotate(-90deg)
      .sx1
        position absolute
        width $sectorWidth
        height $sectorWidth
        transform rotate(0deg)
        clip rect(0,($sectorWidth / 2),$sectorWidth,0px)
        border-radius ($sectorWidth / 2)
        background-color $bg
      .sx2
        position absolute
        width $sectorWidth
        height $sectorWidth
        transform rotate(0deg)
        clip rect(0,($sectorWidth / 2),$sectorWidth,0px)
        border-radius ($sectorWidth / 2)
        background-color $bg
@media(max-width: 999px) 
  $width = 100px
  $sectorWidth = 150px
  $borderWidth = 24px
  .loading-wrap
    .icon-loading
      width $width
      height $width
      margin-top -($width / 2)
      margin-left -($width / 2)
      .border
        width $width
        height $width
        border $borderWidth solid $orange
      .shanxing
        width $sectorWidth
        height $sectorWidth
        border-radius ($sectorWidth / 2)
        .sx1
          width $sectorWidth
          height $sectorWidth
          clip rect(0,($sectorWidth / 2),$sectorWidth,0px)
          border-radius ($sectorWidth / 2)
        .sx2
          width $sectorWidth
          height $sectorWidth
          clip rect(0,($sectorWidth / 2),$sectorWidth,0px)
          border-radius ($sectorWidth / 2)
</style>
