<template>
  <div
    id="app"
    v-cloak
    class="ignore"
  >
    <v-loading />
    <keep-alive>
      <router-view
        v-if="$route.meta.keepAlive"
        v-wechat-title="titlemsg"
      />
    </keep-alive>
    <!-- <router-view v-if="!$route.meta.keepAlive" v-wechat-title="titlemsg"></router-view> -->
    <router-view />
  </div>
</template>

<script>
import vLoading from '@/components/pc/Loading';
import { mapState } from 'vuex';
import fixedInput from '@/mixins/fixedInput';
export default {
  name: 'App',
  components: {
    vLoading
  },

  mixins: [fixedInput],
  data() {
    return {
      titlemsg: ''
    };
  },
  updated() {
    // console.log('updated')
    // 解决ios输入框弹出的页面样式问题
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');
    const textareas = document.querySelectorAll('textarea');
    inputs.length > 0 && inputs.forEach(item => {
      // console.log(item)
      item.onblur = this.temporaryRepair;
    });
    selects.length > 0 && selects.forEach(item => {
      item.onchange = this.temporaryRepair;
    });
    textareas.length > 0 && textareas.forEach(item => {
      item.onblur = this.temporaryRepair;
    });
  },
  created() {
    (function() {
      function resetFontSize() {
        setTimeout(function() {
          // 设置网页字体为默认大小
          WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
        }, 0);
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
          WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
        });
      }
      if (typeof WeixinJSBridge === 'undefined') {
        document.addEventListener('WeixinJSBridgeReady', function(e) {
          resetFontSize();
        });
      } else {
        resetFontSize();
      }
    })();
  },
  computed: {
    ...mapState(['title'])
  },
  watch: {
    '$route'(val) {
      this.$store.dispatch('set_title', this.$route.meta.title);
    },
    'title'(newval, oldval) {
      this.titlemsg = newval;
    }
  }

};
</script>

<style lang="stylus">
@import './assets/css/common/index.styl'
#app
  height 100%
  font-family PingFangSC-Regular,"Microsoft YaHei", sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  -webkit-text-size-adjust none
</style>
