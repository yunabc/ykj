<template>
  <div
    v-show="showVerifyCode"
    class="verify-code"
  >
    <div class="content">
      <div class="win-title">
        <span>快捷登录</span>
      </div>
      <div
        @click="close"
        class="close"
      >
        <img
          src="https://static1.webao99.com/newbeijing/img/close_9d874087.png"
        >
      </div>
      <div class="sub-title">
        需要验证您的手机号
      </div>

      <div class="desc">
        验证码已发送至 {{ mobile }} <span
          :class="sending?'sending':''"
          @click="sendCode"
          class="resend"
        >{{ resendTxt }}</span>
      </div>
      <div
        @click="scrollToView"
        class="v-code"
      >
        <input
          id="vcode"
          ref="vcode"
          v-model="code"
          @focus="focusHandler"
          @blur="focused = false"
          :disabled="telDisabled"
          type="tel"
          maxlength="6"
        >

        <label
          v-for="item,index in codeLength"
          :class="{'animated': focused && cursorIndex === index}"
          v-text="codeArr[index]"
          for="vcode"
          class="line"
        />
      </div>
      <div
        @click="uploadVerify"
        class="btn"
      >
        确定
      </div>
      <div
        @click="checked=!checked"
        :class="checked?'checked':''"
        class="radio"
      >
        我已阅读并同意<span @click.stop="$emit('showdoc-event')">《个人信息保护及隐私政策》</span><span @click.stop="$emit('showdoc-event')">《用户协议》</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['mobile'],
  data() {
    return {
      checked: false,
      showVerifyCode: false,
      code: '',
      codeLength: 6,
      telDisabled: false,
      focused: false,
      resendTxt: '重新发送',
      sending: false,
      timer: null
    };
  },
  computed: {
    codeArr() {
      return this.code.split('');
    },
    cursorIndex() {
      return this.code.length;
    }
  },
  watch: {
    code(newVal) {
      this.code = newVal.replace(/[^\d]/g, '');
      if (newVal.length > 5) {
        this.$refs.vcode.blur();
      }
    }
  },
  methods: {
    sendCode() {
      if (this.sending) { return; }
      this.sending = true;
      let count = 59;
      const recodeTxt = this.resendTxt;
      this.resendTxt = `${count}s后重新发送`;
      this.timer = setInterval(() => {
        if (count > 0) {
          count--;
          this.resendTxt = `${count}s后重新发送`;
        } else {
          clearInterval(this.timer);
          this.resendTxt = recodeTxt;
          this.sending = false;
        }
        this.$emit('send-code-event', {
          sending: this.sending,
          resendTxt: this.resendTxt
        });
      }, 1000);
    },
    uploadVerify() {
      if (this.checked) {
        if (this.code.length == 6) {
          // 默认填写即可不校验
          this.$emit('verifyed-event')
          sessionStorage.setItem('mobile',this.mobile)
          this.close();
        } else {
          this.$toast('请填写验证码');
        }
      } else {
        this.$toast('请阅读并同意相关协议');
      }
    },
    close() {
      this.showVerifyCode = false;
    },
    show() {
      this.showVerifyCode = true;
    },
    focusHandler(e) {
      let timer;
      this.focused = true;
      clearInterval(timer);
      timer = setInterval(() => {
        document.documentElement.scrollTop = 1000000;
        clearInterval(timer);
      }, 300);
    },
    scrollToView(e) {
      const target = e.target;
      setTimeout(() => {
        target.scrollIntoView();
      }, 300);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './common.styl'
.verify-code
  position fixed
  z-index 50
  height 100vh
  width 100%
  left 0
  top 0
  background rgba(0,0,0,.6)
  .content
    padding-top 50px
    width 100%
    position fixed
    bottom 0
    background-color #fff
    padding-bottom 50px
    .close
      position absolute
      right 20px
      top 20px
      width 40px
      height 40px
      font-size 0
      img
        width 100%
    .title
      text-align center
      padding-top 20px
      font-size 36px
      line-height 60px
      font-weight bold
      color #333
    .sub-title
      font-size 28px
      line-height 46px
      color #666
      margin-bottom 50px
    .desc
      line-height 50px
      font-size 28px
      color #666
      margin-bottom 30px
      span
        padding 10px 20px
        color #61a2f3
        background-color #f2f8ff
        border-radius 25px
        &.sending
          background-color #ebebeb;
          color #999
    .v-code
      width 700px
      margin 0 auto 100px
      .line
        width 90px
        height 90px
        font-size 34px
        line-height 90px
        background #f7f7f7
        border 1px solid #e3e3e3
        border-radius 6px
    .btn
      width 590px
      margin 70px auto
      line-height 98px
      color #fff
      text-align center
      background linear-gradient(90deg,#ffaf40,#ff7108)
      border-radius 49px
      font-size 28px
    .radio
      width 700px
      margin 0 auto
      position relative
      font-size 24px
      color #666
      line-height 36px
      &.checked
        &:after
          background url("~@/assets/imgs/product/puhui/duihao.png") 0 no-repeat
          background-size 100%
          border none
      &:after
        content ""
        box-sizing border-box
        border-radius 50%
        position absolute
        left 0
        top 2px
        width 26px
        height 26px
        border 1px solid #7d8ba2
      span
        color #4b8dfa

  .v-code
    margin-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
  .v-code input
    position: absolute;
    top: 200%;
    opacity:0;
  .v-code .line
    position: relative;
    width: 40px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 28px;

  .v-code .line.animated::before
    display: block;
    position: absolute;
    left: 50%;
    top: 20%;
    width: 1px;
    height: 60%;
    content: '';
    background-color: #333333;
    animation-name: coruscate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  @keyframes coruscate
    0%
      opacity: 0
    25%
      opacity: 0
    50%
      opacity: 1
    75%
      opacity: 1
    to
      opacity: 0
</style>
