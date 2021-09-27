<template>
  <div class="contact">
    <div class="top" />

    <div class="block branches">
      <div class="title animat-fadeInUp">
        BRANCHES
      </div>
      <div class="desc">
        公司自2016年8月成立以来，先后在北京、上海、厦门、江苏等地设立了4家省级分支机构。
      </div>
      <div class="list">
        <div
          :class="curItem.province == key?'cur':''"
          v-for="(item,key) in branches"
          @click.stop="changeBranch(key)"
          class="li"
        >
          {{ key }}
        </div>
      </div>
      <div class="info">
        <div class="company">
          {{ curItem.company }}
        </div>
        <div class="text address">
          {{ curItem.address }}
        </div>
        <div
          v-if="curItem.tel"
          class="text tel"
        >
          {{ curItem.tel }}
        </div>
        <div
          v-if="curItem.postcode"
          class="text postcode"
        >
          {{ curItem.postcode }}
        </div>
      </div>
      <div
        id="container"
        class="map"
      />
    </div>
    <div class="block service">
      <div class="title animat-fadeInUp">
        CUSTOMER SERVICE
      </div>
      <div class="desc">
        全国统一客服电话：<span>4008015880</span>
      </div>
      <div class="list">
        <div class="li" />
      </div>
    </div>
  </div>
</template>

<script>
import branches from 'js/branches'
import inViewAnimate from '@/mixins/inViewAnimate'
export default {
  name: '',
  data() {
    return {
      branches,
      curItem: null,
      map: null
    };
  },
  mixins:[inViewAnimate],
  computed: {
    branch() {
      console.log(this.$route.query.branch);
      return this.$route.query.branch || '辽宁';
    }
  },
  created() {
    this.curItem = this.branches[this.branch];
    console.log(this.branch, this.curItem);
    this.loadScript(() => {
      const timer = setInterval(() => {
        if (window.BMapGL) {
          clearInterval(timer);
          this.initMap();
        }
      }, 200);
    });
  },
  methods: {
    changeBranch(key) {
      this.curItem = this.branches[key];
      this.initMap();
    },
    initMap() {
      this.map && this.map.removeEventListener('click');
      var map = this.map = new BMapGL.Map('container'); // 创建Map实例
      var point = new BMapGL.Point(...this.curItem.position);
      var marker = new BMapGL.Marker(point); // 创建标注
      map.addOverlay(marker);
      map.centerAndZoom(point, 18); // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      map.addEventListener('click', (e) => {
        var opts = {
          width: 250, // 信息窗口宽度
          height: 100, // 信息窗口高度
          title: this.curItem.company // 信息窗口标题
        };
        var infoWindow = new BMapGL.InfoWindow(`地址：${this.curItem.address}`, opts); // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point);
      });
    },
    loadScript(cb) {
      const script = document.createElement('script');
      script.onload = () => {
        cb && cb();
      };
      script.src = 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=wfDySRNPfkguB3KbgGEdxNWRyXo0biQj&callback=initialize';
      document.body.appendChild(script);
    }

  }

};
</script>

<style lang="stylus" scoped>

.contact
  .top
    height 320rem
    background url("~@/assets/imgs/pc/contact/top.jpg") 0 no-repeat
    background-size 100%
  .block
    &.branches
      padding-bottom 82rem
      background url("~@/assets/imgs/pc/contact/branches.jpg") 0 bottom no-repeat
      background-size 100%
      .title
        &:after
          content '分支机构'
      .desc
        font-size 16rem
        color #515151
        line-height 22rem
        margin-bottom 49rem
      .list
        border-bottom 1px solid #E6E6E7
        font-size 0
        margin-bottom 35rem
        .li
          display inline-block
          padding 11rem 0
          line-height 28rem
          font-size 20rem
          color #515151
          min-width 141rem
          text-align center
          &.cur
            color #ff6622
            background url("~@/assets/imgs/pc/contact/underline.png") center bottom no-repeat
            background-size 141rem
      .company
        font-size 20rem
        font-weight bold
        line-height 28rem
        color #5d5d5d
        margin-bottom 16rem
      .text
        padding-left 23rem
        line-height 24rem
        margin-bottom 17rem
        font-size 16rem
        color #515151
        &.address
          background url("~@/assets/imgs/pc/contact/icon-address.png") 1rem center no-repeat
          background-size 16rem
        &.tel
          background url("~@/assets/imgs/pc/contact/icon-tel.png") left center no-repeat
          background-size 18rem
        &.postcode
          background url("~@/assets/imgs/pc/contact/icon-postcode.png") left center no-repeat
          background-size 18rem
      .map
        margin-top 55rem
        width 1199rem
        height 600rem
    &.service
      padding-bottom 382rem
      background url("~@/assets/imgs/pc/contact/cus-service_02.jpg") right bottom no-repeat
      background-size auto 100%
      // &:after
      //   content ''
      //   position absolute
      //   right 0
      //   bottom 0
      //   width 171px
      //   height 149px
      //   box-shadow 0 0 40px 30px inset #fff
      //   background url("~@/assets/imgs/pc/contact/cus-service.png") 0 no-repeat
      //   background-size 100%
      .title
        &:after
          content '客服'
      .desc
        padding-left 29rem
        background url("~@/assets/imgs/pc/contact/icon-tel.png") 0 center no-repeat
        background-size 19rem
        font-size 16rem
        color #515151
        line-height 22rem
        span
          color #ff6622

@media(max-width: 999px)
  .contact
    .top
      height 200px
      background url("~@/assets/imgs/mobile/contact/top.jpg") 0 no-repeat
      background-size 100%
    .block
      padding 60px 30px 0
      &.branches
        padding-bottom 62px
        background url("~@/assets/imgs/mobile/contact/branches.png") 0 bottom no-repeat
        background-size 100%
        .title
          &:after
            content '分支机构'
        .desc
          font-size 24px
          color #515151
          line-height 32px
          margin-bottom 50px
        .list
          border-bottom 1px solid #E6E6E7
          font-size 0
          display flex
          margin-bottom 34px
          .li
            flex  1
            padding 0 0 12px
            line-height 34px
            font-size 24px
            min-width 40px
            &.cur
              background url("~@/assets/imgs/pc/contact/underline.png") center bottom no-repeat
              background-size 100%
        .company
          font-size 24px
          line-height 34px
          margin-bottom 24px
        .text
          transform scale(0.916)
          transform-origin 0 0
          padding-left 46px
          line-height 34px
          margin-bottom 18px
          font-size 24px
          &.address
            background url("~@/assets/imgs/pc/contact/icon-address.png") 1px center no-repeat
            background-size 24px
          &.tel
            background url("~@/assets/imgs/pc/contact/icon-tel.png") left center no-repeat
            background-size 26px
          &.postcode
            background url("~@/assets/imgs/pc/contact/icon-postcode.png") left center no-repeat
            background-size 26px
        .map
          margin-top 54px
          width auto
          height 600px
          >>> .BMap_bubble_title
            font-size 24px
          >>> .BMap_bubble_center
              .BMap_bubble_content
                font-size 24px
      &.service
        padding-top 62px
        padding-bottom 298px
        background #fff
        position relative
        &:after
          content ''
          position absolute
          right 0
          bottom 0
          width 342px
          height 298px
          box-shadow 0 0 80px 60px inset #fff
          background url("~@/assets/imgs/mobile/contact/cus-service.png") 0 no-repeat
          background-size 100%
        .title
          &:after
            content '客服'
        .desc
          padding-left 42px
          background url("~@/assets/imgs/pc/contact/icon-tel.png") 0 center no-repeat
          background-size 26px
          font-size 24px
          color #515151
          line-height 34px
          span
            color #ff6622
</style>
