<template>
  <div class="service">
    <div class="top" />

    <div class="content">
      <div class="block branches">
        <div class="title animat-fadeInUp">
          CUSTOMER NOTIFICATION
        </div>
      </div>
      <div class="notify" />
    </div>
  </div>
</template>

<script>
  import inViewAnimate from '@/mixins/inViewAnimate'
export default {
  mixins:[inViewAnimate],
  name: '',
  data() {
    return {
    };
  },
  methods: {
  }

};
</script>

<style lang="stylus" scoped>
.service
  .top
    height 320rem
    background url("~@/assets/imgs/pc/service/top.jpg") 0 no-repeat
    background-size 100% 100%
  .content
    .block
      &.branches
        padding-bottom 82rem
        .title
          &:after
            content '客户告知书'
    .notify
      height 1794rem
      // background url("~@/assets/imgs/pc/service/notify.png") 0 no-repeat
      // background-size 100% 100%
      background url("~@/assets/imgs/pc/service/notify_01.jpg"),url("~@/assets/imgs/pc/service/notify_02.jpg")
      background-position 0 0,0 723rem
      background-size 100%,100%
      background-repeat no-repeat,no-repeat
@media(max-width: 999px)
  .service
    .top
      height 200px
      background url("~@/assets/imgs/mobile/service/top.jpg") 0 no-repeat
      background-size 100% 100%
    .content
      .block
        &.branches
          position absolute
          padding-bottom 0
          .title
            width 100%
      .notify
        height 2828px
        background url("~@/assets/imgs/mobile/service/notify_01.jpg"),url("~@/assets/imgs/mobile/service/notify_02.jpg")
        background-position 0 0,0 1400px
        background-size 100%,100%
        background-repeat no-repeat,no-repeat
        // background url("~@/assets/imgs/mobile/service/notify.png") 0 no-repeat
        // background-size 100% 100%
</style>
