<template>
  <div
    :class="{'absolute':absoluteHeader,'navZIndex':showNavs}"
    class="header"
  >
    <div class="logo" />
    <div class="pages">
      <div
        v-for="(item) in mNavs"
        @click.stop="toPage(item)"
        :class="{'cur':page.indexOf(item.path) > -1}"
        class="page"
      >
        {{ item.nav }}
      </div>
      <!--     <div class="page" @click.stop="toPage('home')" :class="{'cur':page=='home'}">首页</div>
      <div class="page" @click.stop="toPage('service')" :class="{'cur':page=='service'}">客户服务</div>
      <div class="page" @click.stop="toPage('info')" :class="{'cur':page=='info'}">信息披露</div>
      <div class="page" @click.stop="toPage('about')" :class="{'cur':page=='about'}">关于易康吉</div>
      <div class="page" @click.stop="toPage('market')" :class="{'cur':page=='market'}">商城</div>
      <div class="page" @click.stop="toPage('contact')" :class="{'cur':page=='contact'}">联系我们</div> -->
    </div>
    <div
      :class="showNavs?'close':''"
      @click.stop="showNavs=!showNavs"
      class="dis_none m-nav"
    />
    <div
      v-show="showNavs"
      class="dis_none m-navs"
    >
      <div
        v-for="(item) in mNavs"
        class=""
      >
        <div class="section">
          <div
            @click.stop="goPath(item)"
            :class="item.slide?'cur':''"
            class="line"
          >
            {{ item.nav }}
            <span
              v-if="item.children.length > 0"
              :class="item.slide?'arrowBottom':''"
              class="arrowRight"
            />
          </div>
          <div
            :class="item.slide?'slide':''"
            class="opts"
          >
            <div
              v-for="(itemChild) in item.children"
              @click.stop="goPath(itemChild)"
              class="opt"
            >
              {{ itemChild.nav }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog />
  </div>
</template>

<script>
  import Vue from 'vue'
import { isM } from 'js/util';
import VModal from 'vue-js-modal'
Vue.use(VModal,{ dialog: true })
export default {
  name: '',
  data() {
    return {
      showNavs: false,
      absoluteHeader: false,
      mNavs: [
        {
          nav: '首页',
          path: '/official/home',
          children: []
        },
        {
          nav: '客户服务',
          path: '/official/service',
          children: []
        },
        {
          nav: '信息披露',
          path: '/official/info',
          slide: false,
          children: [
            {
              nav: '经营资质',
              path: '/official/info/0'
            },
            {
              nav: '合作机构',
              path: '/official/info/1'
            },
            {
              nav: '互联网保险',
              path: '/official/info/2'
            },
            {
              nav: '产品披露',
              path: '/official/info/3'
            }
          ]
        },
        {
          nav: '关于易康吉',
          path: '/official/about',
          children: []
        },
        // {
        //   nav: '商城',
        //   path: '/official/market',
        //   children: [],
        //   href: 'http://www.ebaocloud.com/en'
        // },
        {
          nav: '联系我们',
          path: '/official/contact',
          children: []
        }

      ]
    };
  },
  computed: {
    page() {
      console.log(11);
      return this.$route.path;
    }
  },
  watch: {
    page(val) {
      console.log(22);

      // 首页 导航栏浮动
      this.changeHeader();
    },
    showNavs(val) {
      if (isM()) {
        this.$emit('fixedheader', val);
      }
    }
  },
  created() {
    this.changeHeader();
  },
  mounted() {
    console.log(this.page);
  },
  methods: {
    changeHeader() {
      if (this.page.indexOf(this.mNavs[0].path) > -1) {
        this.absoluteHeader = true;
      } else {
        this.absoluteHeader = false;
      }
    },
    goPath(item) {
      if (item.children && item.children.length > 0) {
        return item.slide = !item.slide;
      }

      if (this.page == item.path) {
        return this.showNavs = false;
      }

      this.toPage(item);
      this.showNavs = false;
    },
    toPage(item) {
      if (item.path.indexOf('/official/market') > -1) {
        // window.location.href = item.href;
        // debugger
        this.$modal.show('dialog', {
          title: '建设中 ...，敬请期待',
          // text: '建设中 ...，敬请期待',
          buttons: [
            {
              title: '确定',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
        return;
      }
      this.$router.push({
        path: item.path
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.header
  height 120rem
  padding 0 160rem 0 134rem
  display flex
  justify-content space-between
  &.absolute
    z-index 2
    position absolute
    width 1920rem
  &.home-header
    .logo
      background url("~@/assets/imgs/pc/components/logo.png") left center no-repeat
      background-size 100%
    .pages
      .page
        color #fff
  .logo
    height 100%
    width  314rem
    background url("~@/assets/imgs/pc/components/logo-black.png") left center no-repeat
    background-size 100%
  .pages
    display flex

    .page
      cursor pointer
      margin-left 79rem
      line-height 120rem
      font-size 24rem
      color #515151
      &.cur
        color #ff6622
        font-weight bold
@media(max-width: 999px)
  .header
    padding 0 15px
    margin 0
    width 100%
    height 54px
    align-items center
    flex 0 0 54px
    background-color #fff
    &.navZIndex
      z-index 100
      width 100%
      // height 100%
      position fixed
    &.absolute
      position relative
      width 100%
    .logo
      width 115px
      height 36px
      background-size 100%
    .pages
      display none
    .m-nav
      display block
      width 40px
      height 40px
      background url("~@/assets/imgs/mobile/components/m-nav.png") center no-repeat
      background-size 14px
      &.close
        background url("~@/assets/imgs/mobile/components/close.png") center no-repeat
        background-size 14px

    .m-navs
      background-color #fff
      position absolute
      left 0
      top 54px
      display block
      overflow auto
      width 100%
      height calc(100vh - 54px)
      .section
        border-bottom 1px solid #E6E6E7
        .line
          padding-left 35px
          line-height 50px
          position relative
          font-size 15px
          color #515151
          &.cur,&:active
            background-color #FFF9EE
            &:after
              background-color #FFF9EE
            .arrowRight
              transform rotate(90deg)
          &:before
            content ""
            position absolute
            width 6px
            height 6px
            border-radius 50%
            background-color #E6E6E7
            left 15px
            top 20px
            margin-top 3px
          .arrowRight
            float right
            margin 20px 20px 0 0
            width 6px
            height 10px
            transition all .2s
            background url("~@/assets/imgs/mobile/components/arrow.png") center no-repeat
            background-size 6px
        .opts
          transition max-height .3s
          overflow hidden
          max-height 0
          &.slide
            max-height 1000px
          .opt
            padding-left 35px
            font-size 13px
            line-height 40px
            background-color #fff
            transition all .2s
            &:active
              background-color #FFF9EE

</style>
