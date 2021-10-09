<template>
  <div class="container payDetail">
    <div class="declaration">以下内容为测试环境，仅供演示使用</div>
    <div class="pay_top">
      <img
        src="@/assets/imgs/product/puhui/pay_bg.png"
        alt=""
        class="top_bg"
      >
      <div class="top_con flex">
        <img
          src="@/assets/imgs/product/puhui/LOGO.png"
          alt=""
          class="top_logo"
        >
        <div class="top_desc">
          <p>安阳普惠健康保</p>
          <span>订单编号：I1450334898992185344</span>
        </div>
      </div>
    </div>
    <div class="pay_con">
      <div class="pay_bg con_list con_list1">
        <div class="list_tit flex">
          <div class="tit_name">
            <span>投保人信息</span>
          </div>
          <img
            src="@/assets/imgs/product/puhui/shadow.png"
            alt=""
          >
        </div>
        <ul>
          <li>
            <p class="li_l">
              投保人：
            </p><p class="li_r">
              <strong>{{ formateName(holder.userName) }}</strong>
            </p>
          </li>
          <li>
            <p class="li_l">
              {{ holder.idType.displayText }}：
            </p><p class="li_r">
              {{ formateId(holder.idNo) }}
            </p>
          </li>
        </ul>
      </div>
      <div class="pay_bg con_list">
        <div class="list_tit flex">
          <div class="tit_name">
            <span>被保人信息</span>
          </div>
          <img
            src="@/assets/imgs/product/puhui/shadow.png"
            alt=""
          >
        </div>
        <div
          v-for="(single,index1) in insures"
          :key="index1+23423001"
        >
          <ul v-for="(item,index2) in single"
              :key="index2+223423001"
          >
            <li
            >
              <p class="li_l">
                被保人：
              </p><p class="li_r">
                <strong>{{ formateName(item.userName) }}</strong><span class="laber2">{{ item.role.displayText }}</span>
              </p>
            </li>
            <li>
              <p class="li_l">
                {{ item.idType.displayText }}：
              </p><p class="li_r">
                {{ formateId(item.idNo) }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="pay_bg con_list con_list3">
        <div class="list_tit flex">
          <div class="tit_name">
            <span>支付方式</span>
          </div>
          <img
            src="@/assets/imgs/product/puhui/shadow.png"
            alt=""
          >
        </div>
        <div
          role="radiogroup"
          class="pay_radio van-radio-group"
        >
          <div class="van-cell-group ">
            <div class="van-cell bottom-bodder" >
              <div class="van-cell__title">
                <div class="flex flex1" @click="curPay=1" :class="curPay==1?'active':''">
                  <img
                    src="@/assets/imgs/product/puhui/icon_yibao.png"
                    alt=""
                    class="radio_img"
                  >
                  <div class="radio_desc">
                    <p>医保个账支付</p>
                    <span>余额不足或账户异常不可用，如有疑问请电联北 京银行</span>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="van-cell ">
              <div class="van-cell__title">
                <div class="flex flex1"  @click="curPay=2" :class="curPay==2?'active':''">
                  <img
                    src="@/assets/imgs/product/puhui/pay-icon4_7bce2c3d.png"
                    alt=""
                    class="radio_img"
                  >
                  <div class="radio_desc">
                    <p>微信支付</p>
                    <!---->
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pay_footer">
      <div class="foot_center flex">
        <div class="c_l">
          <div class="l_con l_top">
            支付剩余时间 {{countDown}}
          </div>
          <div class="l_con l_bottom">
            合计：{{priceSum}}
            <span>元/年</span>
          </div>
        </div>
        <div class="c_r">
          <button
            y-log-id="confirm_payment"
            class="pay_btn van-button van-button--default van-button--normal"
          >
            <div class="van-button__content">
              <span class="van-button__text"><span>确认支付</span></span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      data-v-26e7335d=""
      class="tipDialog"
    >
      <div
        data-v-26e7335d=""
        class="van-overlay tip_overlay"
        style="z-index: 101; display: none;"
      >
        <div
          data-v-26e7335d=""
          class="wrapper"
        >
          <div
            data-v-26e7335d=""
            class="wrap_close"
          >
            <img
              data-v-26e7335d=""
              src="@/assets/imgs/product/puhui/close2_07e69b89.png"
              alt=""
            >
          </div>
          <div
            data-v-26e7335d=""
            class="wrap_main"
          >
            <img
              data-v-26e7335d=""
              src="@/assets/imgs/product/puhui/pop-pao1_514edba8.png"
              alt=""
              class="main_pao"
            >
            <div
              data-v-26e7335d=""
              class="main_tit flex"
            >
              <img
                data-v-26e7335d=""
                src="@/assets/imgs/product/puhui/dot-left_2f8db4cd.png"
                alt=""
              >
              <p data-v-26e7335d="" />
              <img
                data-v-26e7335d=""
                src="@/assets/imgs/product/puhui/dot-left_2f8db4cd.png"
                alt=""
              >
            </div>
            <div
              data-v-26e7335d=""
              class="main_con"
            >
              <p data-v-26e7335d="" />
            </div>
            <div
              data-v-26e7335d=""
              class="main_btn flex wd44"
            >
              <button
                data-v-26e7335d=""
                y-log-id="wechat_payment"
                class="wechat_confirm van-button van-button--default van-button--normal"
              >
                <div
                  data-v-26e7335d=""
                  class="van-button__content"
                >
                  <span
                    data-v-26e7335d=""
                    class="van-button__text"
                  > 用微信支付 </span>
                </div>
              </button>
              <!---->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      data-v-96f74b02=""
      class="tipSheet"
    >
      <div
        data-v-96f74b02=""
        class="van-overlay tip_overlay"
        style="z-index: 100; display: none;"
      >
        <div
          data-v-96f74b02=""
          class="wrapper"
        >
          <div
            data-v-96f74b02=""
            class="wrap_close"
          >
            <img
              data-v-96f74b02=""
              src="@/assets/imgs/product/puhui/close2_07e69b89.png"
              alt=""
            >
          </div>
          <div
            data-v-96f74b02=""
            class="wrap_main"
          >
            <div
              data-v-96f74b02=""
              class="main_tit flex"
            >
              <img
                data-v-96f74b02=""
                src="@/assets/imgs/product/puhui/dot-left_2f8db4cd.png"
                alt=""
              >
              <p data-v-96f74b02="" />
              <img
                data-v-96f74b02=""
                src="@/assets/imgs/product/puhui/shadow.png"
                alt=""
              >
            </div>
            <div class="pay_main_con">
              <ul>
                <li><p>扣款账户名</p><p /></li>
                <li><p>扣款账号</p><p /></li>
                <li><p>扣款金额(元)</p><p /></li>
              </ul>
              <button
                y-log-id="confirm_deduction-individual_account"
                class="refund_btn van-button van-button--default van-button--normal"
              >
                <div class="van-button__content">
                  <span class="van-button__text"> 确认扣款 </span>
                </div>
              </button>
              <div class="refund_agree flex">
                <div
                  role="checkbox"
                  tabindex="0"
                  aria-checked="false"
                  class="agree_checkbox van-checkbox"
                >
                  <div
                    class="van-checkbox__icon van-checkbox__icon--square"
                    style="font-size: 14px;"
                  >
                    <i class="van-icon van-icon-success">
                    <!----></i>
                  </div>
                </div>
                <p> 我已阅读并同意 <span>《医保个人信息查询及个人账户专户支付授权书》</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="action_pop"
      style="display: none;"
    >
      <div class="action_mask" />
      <div class="action_con">
        <div class="action_header">
          <div class="action_tit">
            <p />
            <img
              src="@/assets/imgs/product/puhui/close_9d874087.png"
              alt=""
            >
          </div>
        </div>
        <div class="action_body">
          <div class="body_top" />
          <div class="body_con" />
          <div class="html_loading van-loading van-loading--spinner">
            <span
              class="van-loading__spinner van-loading__spinner--spinner"
              style="color: rgb(25, 137, 250);"
            ><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      price:95,
      countDown:'',
      holder: JSON.parse(sessionStorage.getItem('holder')),
      insures: JSON.parse(sessionStorage.getItem('insures')),
      curPay:1,
      // priceSum:''
    };
  },
  mounted(){
    this.initCountDown()
  },
  computed:{
    priceSum(){
      let count = 0
      for(let key in this.insures){
        let item = this.insures[key]
        for (var i = 0; i < item.length; i++) {
          count++
        }
      }
      return this.price * count
    },
  },
  methods: {
    initCountDown(){
      let secondsSum = 20*60
      let minutes,seconds
      let timer = setInterval(()=>{
        if(secondsSum >0){
          secondsSum--
          minutes = Math.floor(secondsSum/60)
          seconds = secondsSum%60
          this.countDown = `${minutes}:${seconds}`
        }else{
          clearInterval(timer)
        }



      },1000)
    },
    formateName(str) {
      return str.slice(0, str.length - 1) + '*';
    },
    formateId(str) {
      return str.slice(0, 8) + '******' + str.slice(str.length - 4, str.length);
    }
  }
};
</script>

<style lang="stylus" scoped>

  @import './puhuiPay.css'
  .declaration
    height 60px
    background yellow
    color orange
    font-size 30px
    line-height 60px
    text-align center
    width 100%
    z-index 10
  .payDetail
    .pay_con
      .con_list
        .list_tit
          height 70px
          .tit_name
            height 100%
            font-size 0
            >span
              font-size 30px
              color #393D46
              line-height initial
    .van-cell
      padding-bottom 0
      &.bottom-bodder
        border-bottom 1px solid #ebedf0
        margin-bottom 20px
      .flex1
        &.active
          &:after
            background url("~@/assets/imgs/product/puhui/duihao.png") 0 no-repeat
            background-size 100%
            // border 1px solid #1989fa
            border none
        position relative
        padding-right 40px
        &:after
          position absolute
          content ''
          right 0
          top 0
          margin-top 5px
          border-radius 50%
          width 32px
          height 32px
          box-sizing border-box
          background-color #ebedf0
          border 1px solid #c8c9cc
</style>
