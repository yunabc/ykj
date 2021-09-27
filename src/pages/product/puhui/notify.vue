<template>
  <div class="notify" v-if="showFlag">
    <div class="win">
      
      <div class="win-title"><span>消费者权益保障服务</span></div>
      <div class="content">尊敬的客户，您即将进入<span class="orange">安阳普惠健康保产品投保流程</span>。根据中国银保监会有关规定，为了保障您的权益，您在销售页面的操作将会被记录和保存。请您在投保时仔细阅读保险条款、投保须知、 <span  class="blue color_click" @click.stop="$emit('showdoc-event')"> 《客户告知书》 </span>等内容。</div>
      <div class="desc">本产品由中国人民财产保险股份有限公司、中国人寿财产保险股份有限公司、泰康养老保险股份有限公司、中国太平洋人寿保险股份有限公司和中国平安财产保险股份有限公司共同承保，由易康吉保险经纪有限公司提供保险经纪服务并代收保费。</div>
      <div class="footer">
        <div class="btn" @click="notifyHandler">我已知晓</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      showFlag:false,
    };
  },
  methods:{
    show(){
      this.showFlag = true
    },
    close(){
      this.showFlag = false
    },
    notifyHandler(){
      sessionStorage.setItem('notifyed',true)
      this.showFlag = false
      this.$emit('notify-event',true)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './common.styl';
.orange
  color #FF6622!important
.blue
  color #388CF7!important
.notify
  z-index  50
  position fixed
  width 100%
  height 100%
  background rgba(0,0,0,.6)
  top 0
  left 0
  .win
    position absolute
    padding 76px 31px 28px
    border-radius 20px 20px 0 0 
    overflow hidden
    bottom 0
    background-color #fff
    .content 
      text-align left
      font-size 30px  
      color #393D46
      line-height 45px
      margin-bottom 20px
    .desc
      text-align left
      font-size 26px
      line-height 36px
      color #888B8E 
      margin-bottom 30px
    .footer
      padding 60px 55px 28px
      border-top 1px solid #D8D8D8
      .btn
        background: linear-gradient(270deg, #FF6622 0%, #F8B144 100%)
        line-height 100px
        border-radius 50px
        font-size 30px
        color #fff
</style>
