<template>
  <div class="footer">
    <div class="top">
      <div class="left">
        <div class="company" />
        <div class="label icon-address">
          地址：<span>辽宁省沈阳市铁西区北二中路18号B座</span>
        </div>
        <div class="label icon-tel">
          全国统一客服电话：<span>4008015880</span>
        </div>
      </div>
      <div class="right">
        <div class="inline-b">
          <div class="list">
            <div class="li">
              <div
                @click.stop="toPath('/official/service')"
                class="model"
              >
                客户服务
              </div>
              <!-- <p class="txt">经纪服务委托协议</p> -->
              <p
                @click.stop="toPath('/official/service')"
                class="txt"
              >
                客户告知书
              </p>
            </div>
            <div class="li">
              <div
                @click.stop="toPath('/official/info')"
                class="model"
              >
                信息披露
              </div>
              <p
                @click.stop="toPath('/official/info/0')"
                class="txt"
              >
                经营资质
              </p>
              <p
                @click.stop="toPath('/official/info/1')"
                class="txt"
              >
                合作机构
              </p>
              <p
                @click.stop="toPath('/official/info/2')"
                class="txt"
              >
                互联网保险
              </p>
              <p
                @click.stop="toPath('/official/info/3')"
                class="txt"
              >
                产品披露
              </p>
            </div>
            <div class="li">
              <div
                @click.stop="toPath('/official/about')"
                class="model"
              >
                关于易康吉
              </div>
              <p
                @click.stop="toPath('/official/about')"
                class="txt"
              >
                易康吉简介
              </p>
              <p
                @click.stop="toPath('/official/about')"
                class="txt"
              >
                主营业务
              </p>
              <p
                @click.stop="toPath('/official/about')"
                class="txt"
              >
                易康吉文化
              </p>
            </div>
            <!-- <div class="li">
              <div
                @click.stop="toMarket"
                class="model"
              >
                商城
              </div>
              <p
                @click.stop="toMarket"
                class="txt"
              >
                分类展示
              </p>
              <p
                @click.stop="toMarket"
                class="txt"
              >
                产品展示
              </p>
            </div> -->
            <div class="li">
              <div
                @click.stop="toPath('/official/contact')"
                class="model"
              >
                联系我们
              </div>
              <p
                @click.stop="toPath('/official/contact')"
                class="txt"
              >
                分支机构介绍
              </p>
              <p
                @click.stop="toPath('/official/contact')"
                class="txt"
              >
                客服
              </p>
            </div>
          </div>
          <div class="contact">
            <div
              @click.stop="qrcodeHandler"
              class="li icon-weixin"
            >
              <div
                @click.stop="showQrcode=false"
                :class="showQrcode?'show':''"
                class="qrcode"
              >
                <img
                  src="@/assets/imgs/pc/components/qr-weixin.png"
                  alt=""
                >
              </div>
            </div>
            <!-- <div class="li icon-sina"><div class="qrcode"><img src="" alt=""></div></div>
            <div class="li icon-tiktalk"><div class="qrcode"><img src="" alt=""></div></div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span>@易康吉保险经纪有限责任公司</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="https://beian.miit.gov.cn/#/Integrated/index">辽ICP备17004821号-1</a></span>
    </div>
  </div>
</template>

<script>
import { isM } from 'js/util';
export default {
  name: '',
  data() {
    return {
      showQrcode: false
    };
  },
  methods: {
    qrcodeHandler() {
      if (isM()) {
        this.showQrcode = true;
      }
    },
    toPath(path) {
      this.$router.push(path);
    },
    toMarket() {
      window.location.href = 'http://www.ebaocloud.com/en';
    }
  }
};
</script>

<style lang="stylus" scoped>
.footer
  color #C5C7CA
  background-color #333
  padding 80rem 158rem 40rem
  .top
    display flex
    justify-content space-between
    border-bottom 1rem solid #626161
    margin-bottom 38rem
    .left
      .company
        width 465rem
        height 122rem
        background url("~@/assets/imgs/pc/components/logo.png") 0 no-repeat
        background-size 100%
        margin-bottom 30rem
      .label
        font-size 20rem
        line-height 40rem
        padding-left 38rem
        margin-bottom 10rem
        span
          vertical-align middle
          font-size 16rem
      .icon-address
        background url("~@/assets/imgs/pc/components/icon-address.png") 1.5rem center no-repeat
        background-size 19rem
      .icon-tel
        background url("~@/assets/imgs/pc/components/icon-tel.png") 0 center no-repeat
        background-size 22rem
    .right
      flex 1
      text-align right
      .inline-b
        display inline-block
      .list
        display flex
        justify-content flex-end
        margin-bottom 144rem
        .li
          text-align left
          margin-left 67rem
          &:first-child
            margin-left 0
          .model
            cursor pointer
            font-size 20rem
            font-weight bold
            line-height 24rem
            margin-bottom 32rem
            &:hover
              color #f62
          .txt
            cursor pointer
            font-size 16rem
            line-height 24rem
            margin-bottom 12rem
            &:hover
              color #f62
      .contact
        display flex
        margin-bottom 80rem
        .li
          width 66rem
          height 66rem
          margin-right 40rem
          border-radius 50%
          border 1rem solid #6F7073
          position relative
          @media(min-width: 1000px)
            .qrcode
              display none
              position absolute
              width 161rem
              height 161rem
              left 50%
              top -2rem
              transform translate(-50%,-100%)
              box-sizing border-box
              border 1rem dashed #F5F5F5
              img
                width 100%
            &.icon-weixin
              background url("~@/assets/imgs/pc/components/icon-weixin.png") center no-repeat
              background-size 35rem
            &.icon-sina
              background url("~@/assets/imgs/pc/components/icon-sina.png") center no-repeat
              background-size 35rem
            &.icon-tiktalk
              background url("~@/assets/imgs/pc/components/icon-tiktalk.png") center no-repeat
              background-size 35rem

            &:hover
              background-color #6F7073
              .qrcode
                display block
  .bottom
    color #C5C7CA
    font-size 16rem
    line-height 24rem
    text-align center
    a
      color  #C5C7CA
      &:hover
        color #2e5acc
        text-decoration underline

@media(max-width: 999px)
  .footer
    color #C5C7CA
    background-color #333
    padding 30px 14px 23px
    flex 0 1 auto
    .top
      display block
      position relative
      z-index 1
      margin-bottom 13px
      padding-bottom 24px
      border-bottom 1px solid #626161
      .left
        width 300px
        .company
          width 126px
          height 33px
          background url("~@/assets/imgs/pc/components/logo.png") 0 no-repeat
          background-size 100%
          margin-bottom 9px
        .label
          font-size 12px
          line-height 24px
          padding-left 35px
          margin-bottom 0
          transform-origin 0 0
          transform scale(0.916)
          span
            vertical-align middle
            font-size 12px
        .icon-address
          background url("~@/assets/imgs/pc/components/icon-address.png") 0 center no-repeat
          background-size 14px
        .icon-tel
          background url("~@/assets/imgs/pc/components/icon-tel.png") 0 center no-repeat
          background-size 14px
      .right
        text-align right
        position absolute
        top 5px
        left 50%
        .inline-b
          display inline-block
        .list
          display none

        .contact
          display flex
          margin-bottom 0
          .li
            width 24px
            height 24px
            margin-right 120px
            border-radius 50%
            border 1px solid #6F7073
            position relative
            .qrcode
              display none
              border none
              &.show
                display block
                position fixed
                width 100%
                height 100%
                background rgba(0,0,0,.6)
                left 0
                top 0
                transform translate(0,0)
                display flex
                align-items center
                justify-content center
                img
                  width 30%
              img
                width 100%
            &.icon-weixin
              background url("~@/assets/imgs/pc/components/icon-weixin.png") center no-repeat
              background-size 14px
            &.icon-sina
              background url("~@/assets/imgs/pc/components/icon-sina.png") center no-repeat
              background-size 14px
            &.icon-tiktalk
              background url("~@/assets/imgs/pc/components/icon-tiktalk.png") center no-repeat
              background-size 14px

    .bottom
      color #C5C7CA
      font-size 12px
      line-height 24px
      transform scale(0.916)
      text-align center

</style>
