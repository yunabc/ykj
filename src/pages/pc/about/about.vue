<template>
  <div class="about">
    <div class="top" />
    <div class="block company clearfix">
      <div class="right">
        <div class="title animat-fadeInUp">
          COMPANY PROFILE
        </div>
        <div class="desc animat-fadeInRight">
          易康吉成立于2016年8月，是由易联众信息技术股份有限公司（股票代码：300096）投资的全国性的保险经纪公司。公司注册地在辽宁省沈阳市，实缴注册资金5000万。
        </div>
        <div class="desc animat-fadeInRight">
          2017年起陆续在北京、上海、厦门、江苏等地成立省级分公司，扩大了易康吉全国服务网络。
        </div>
        <div class="desc animat-fadeInRight">
          2021年，公司将进一步贯彻集团公司“让天下没有难过的人生”的企业使命，紧跟“以数字化重塑民生健康新生态”的企业愿景，本着“专注、创新、开放、协同”的价值观，打造新型“数字化”易康吉。
        </div>
      </div>
      <div class="left" />
    </div>
    <div class="block business">
      <div class="title animat-fadeInUp">
        MAIN BUSINESS
      </div>
      <div class="list">
        <div class="li">
          <div class="imgbox icon1">
            <img
              src="@/assets/imgs/pc/about/business1.jpg"
              alt=""
            >
          </div>
          <div class="text  animat-fadeInUp">
            “惠民保”业务
          </div>
        </div>
        <div class="li">
          <div class="imgbox icon2">
            <img
              src="@/assets/imgs/pc/about/business2.jpg"
              alt=""
            >
          </div>
          <div class="text  animat-fadeInUp">
            BBC职域开拓业务
          </div>
        </div>
        <div class="li">
          <div class="imgbox icon3">
            <img
              src="@/assets/imgs/pc/about/business3.jpg"
              alt=""
            >
          </div>
          <div class="text  animat-fadeInUp">
            垂直类场景业务
          </div>
        </div>
      </div>
    </div>
    <div class="block culture">
      <div class="title animat-fadeInUp">
        CORPORATE CULTURE
      </div>
      <div class="list">
        <div class="li">
          <div class="txt1 animat-fadeInUp">
            使命
          </div>
          <div class="txt2 animat-fadeInUp">
            让天下没有难过的人生
          </div>
        </div>
        <div class="li">
          <div class="txt1 animat-fadeInUp">
            愿景
          </div>
          <div class="txt2 animat-fadeInUp">
            以数字化重塑民生健康新生态
          </div>
        </div>
        <div class="li">
          <div class="txt1 animat-fadeInUp">
            价值观
          </div>
          <div class="txt2 animat-fadeInUp">
            专注、创新、开放、协同
          </div>
        </div>
        <div class="li">
          <div class="txt1 animat-fadeInUp">
            战略定位
          </div>
          <div class="txt2 animat-fadeInUp">
            以数据链为基础的技术与服务企业
          </div>
        </div>
        <div class="li">
          <div class="txt1 animat-fadeInUp">
            业务发展
          </div>
          <div class="txt2 animat-fadeInUp">
            一切业务数据化，一切数据业务化
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import inViewAnimate from '@/mixins/inViewAnimate'
export default {
  name: '',
  mixins:[inViewAnimate],
  data() {
    return {

    };
  },
  mounted(){
    console.log('mounted')
  }
};
</script>

<style lang="stylus" scoped>
.about
  .top
    height 320rem
    background url("~@/assets/imgs/pc/about/top.jpg") 0 no-repeat
    background-size 100%
  .block
    &.company
      padding-left 0
      .title
        &:after
          content '公司介绍'
      .left
        float left
        width 960rem
        height 573rem
        background url("~@/assets/imgs/pc/about/company.jpg") 0 no-repeat
        background-size 100%
      .right
        width 920rem
        float right
        .desc
          width 565rem
          font-size 18rem
          color #5d5d5d
          line-height 24rem
          margin-bottom 22rem
    &.business
      background linear-gradient(to bottom,white 0%,white 60%,#f5f5f5 60%,#f5f5f5 100%)
      padding-left 361rem
      padding-bottom 61rem
      .list
        display inline-block
        background-color #fff
        font-size 0

        .li
          width 398rem
          display inline-block
          margin-right 2rem
          &:last-child
              .text
                &:after
                  width 0
          .imgbox
            position relative
            &:after
              content ''
              position absolute
              left 0
              top 0
              width 100%
              height 100%
              background-color rgba(0,0,0,0.35)

            &.icon1
              &:after
                background-image url("~@/assets/imgs/pc/about/icon-b1.png")
                background-position center
                background-size 150rem
                background-repeat no-repeat
            &.icon2
              &:after
                background-image url("~@/assets/imgs/pc/about/icon-b2.png")
                background-position center
                background-size 150rem
                background-repeat no-repeat
            &.icon3
              &:after
                background-image url("~@/assets/imgs/pc/about/icon-b3.png")
                background-position center
                background-size 150rem
                background-repeat no-repeat
            img
              width 100%
          .text
            height 100rem
            line-height 100rem
            text-align center
            font-size 24rem
            color #515151
            position relative
            background-color #fff

            &:after
              content ''
              position absolute
              right -2rem
              width 2rem
              height 50rem
              top 25rem
              background-color #e6e6e7
      .title
        &:after
          content '主营业务'
    &.culture
      background url("~@/assets/imgs/pc/about/culture.png") left bottom no-repeat
      background-size 100%
      padding-left 361rem
      padding-bottom 61rem
      .title
        &:after
          content '企业文化'
      .list
        .li
          padding-left 629rem
          .txt1
            line-height 33rem
            font-size 24rem
            color #ff6622
            margin-bottom 11rem
            position relative
            font-weight bold
            &:before
              content ''
              width 540rem
              height 2rem
              background-color #e6e6e7
              font-size 0
              position absolute
              left -629rem
              top 15.5rem
            &:after
              content ''
              width 0
              height 0
              font-size 0
              position absolute
              left -40rem
              top 10rem
              border-top 6rem solid transparent
              border-left 12rem solid #FF6622
              border-bottom 6rem solid transparent
          .txt2
            margin-bottom 29rem
            font-size   20rem
            color #5d5d5d
            line-height 28rem
@media(max-width: 999px)
  .about
    .top
      height 200px
      background url("~@/assets/imgs/mobile/about/top.jpg") 0 no-repeat
      background-size 100%
    .block
      &.company
        padding-left 0
        .left
          float none
          width auto
          margin-right 0
          width 100%
          height 698px
          background url("~@/assets/imgs/mobile/about/company.jpg") 0 no-repeat
          background-size 100%
        .right
          float none
          width auto
          padding-left 30px
          .desc
            padding-right 30px
            width auto
            font-size 24px
            line-height 34px
            margin-bottom 36px
      &.business
        background #fff
        padding-left 0
        padding-bottom 0
        .title
          margin-left 30px
        .list
          display flex
          justify-content space-between

          .li
            width 248px
            margin-right 0
            &:last-child
                .text
                  &:after
                    width 0
            .imgbox
              height 220px
              position relative
              &:after
                content ''
                position absolute
                left 0
                top 0
                width 100%
                height 100%
                background-color rgba(0,0,0,0.35)

              &.icon1
                &:after
                  background-image url("~@/assets/imgs/pc/about/icon-b1.png")
                  background-position center
                  background-size 88px
                  background-repeat no-repeat
              &.icon2
                &:after
                  background-image url("~@/assets/imgs/pc/about/icon-b2.png")
                  background-position center
                  background-size 88px
                  background-repeat no-repeat
              &.icon3
                &:after
                  background-image url("~@/assets/imgs/pc/about/icon-b3.png")
                  background-position center
                  background-size 88px
                  background-repeat no-repeat
              img
                width 100%
                height 100%
            .text
              height 74px
              line-height 74px
              text-align center
              font-size 24px
              color #515151
              position relative
              background-color #fff

              &:after
                content ''
                position absolute
                right -2px
                width 2px
                height 44px
                top 15px
                background-color #e6e6e7
      &.culture
        background url("~@/assets/imgs/mobile/about/culture.jpg") 0 no-repeat
        background-size 100% 100%
        padding 60px 30px 0
        padding-bottom 0px
        .title
          &:after
            content '企业文化'
        .list
          .li
            padding-left 320px
            .txt1
              line-height 34px
              font-size 24px
              margin-bottom 8px
              &:before
                width 266px
                height 2px
                left -320px
                top 16px
              &:after
                content ''
                width 0
                height 0
                font-size 0
                position absolute
                left -32px
                top 10px
                border-top 8px solid transparent
                border-left 16px solid #FF6622
                border-bottom 8px solid transparent
            .txt2
              margin-bottom 58px
              font-size   24px
              color #5d5d5d
              line-height 34px
</style>
