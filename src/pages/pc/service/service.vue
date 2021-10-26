<template>
  <div class="service">
    <div class="top" />

    <div class="content">
      <div class="block branches">
        <div class="title animat-fadeInUp">
          CUSTOMER NOTIFICATION
        </div>
      </div>
      <div class="notify">
        <div class="mail">
          <div class="title">
            易康吉保险经纪有限责任公司
          </div>
          <div class="title">
            客户告知书
          </div>
          <div class="line" />
          <div class="paragraph">
            尊敬的客户∶
          </div>
          <div class="paragraph blank">
            <div class="desc">感谢您委托我公司（易康吉保险经纪有限责任公司）作为您的保险经纪人，为您办理保险业务。本公司是基于投保人的利益，为投保人与保险公司订立保险合同提供中介服务的保险专业中介机构。为了保护您的合法权益，按照《中华人民共和国保险法》、《保险经纪人监管规定》、《互联网保险业务监管办法》的要求，本公司应履行客户告知义务，现将有关事项告知如下，请仔细阅读。</div>
          </div>
          <div class="paragraph bold">
            <div class="label">
              一、
            </div><div class="desc">
              公司基本情况
            </div>
          </div>
          <div class="paragraph">
            <div class="label">
              （一）
            </div><div class="desc">
              名称∶易康吉保险经纪有限责任公司
            </div>
          </div>
          <div class="paragraph">
            <div class="label">
              （二）
            </div><div class="desc">
              住所∶辽宁省沈阳市铁西区北二中18号B座502室
            </div>
          </div>

          <div class="paragraph">
            <div class="label">
              （三）
            </div>
            <div class="desc">
              许可证名称及编号∶ 经营保险经纪业务许可证编号 269665000000800
            </div>
          </div>
          <div class="paragraph">
            <div class="label">
              （四）
            </div>
            <div class="desc">
              许可证有效期∶2021年06月29日至2022年11月01日
            </div>
          </div>
          <div class="paragraph">
            <div class="label">
              （五）
            </div>
            <div class="desc">
              业务范围∶在全国区域内（港、澳、台除外）为投保人拟定投保方案、选择保险人、办理投保手续；协助被保险人或受益人进行索赔；再保险经纪业务；为委托人提供防灾、防损或风险评估、风险管理咨询服务；中国保监会批准的其他业务。
            </div>
          </div>
          <div class="paragraph">
            <div class="label">
              （六）
            </div>
            <div class="desc">
              经营区域∶全国（港、澳、台除外）
            </div>
          </div>

          <div class="paragraph blank">
            <div class="label">
              （七）
            </div>
            <div class="desc">
              联系方式∶<span class="orange">4008015880</span>
            </div>
          </div>
          <div class="paragraph blank bold">
            <div class="label">
              二、
            </div>
            <div class="desc">
              请仔细阅读保险条款，保险产品的广告、公告、彩页等宣传资料不属于保险合同的组成部分。请重点关注保险责任、责任免除或者除外责任、犹豫期后解除合同的损失、投保人和被保险人权利义务、免赔额或免赔率的计算、等待期等内容，并可要求本公司服务人员对上述内容进行详细讲解。
            </div>
          </div>
          <div class="paragraph blank bold">
            <div class="label">
              三、
            </div>
            <div class="desc">
              请向本公司客服人员了解《中华人民共和国保险法》等法律法规对于索赔时效、保险公司理赔时限、合同中止与失效、未成年人投保限额等的相关规定，以及不履行如实告知义务、故意制造保险事故或夸大事故损失、申报年龄或职业不真实等情形导致的法律后果。
            </div>
          </div>
          <div class="paragraph blank bold">
            <div class="label">
              四、
            </div>
            <div class="desc">
              根据《中华人民共和国保险法》的规定，保险经纪机构因过错给投保人、被保险人造成损失的，依法承担赔偿责任。
            </div>
          </div>
          <div class="paragraph blank bold">
            <div class="label">
              五、
            </div>
            <div class="desc">
              本公司已按《保险经纪人监管规定》缴存保证金/投保职业责任保险。
            </div>
          </div>
          <div class="paragraph blank bold">
            <div class="label">
              六、
            </div>
            <div class="desc">
              本公司为您与保险公司订立保险合同提供保险经纪服务，并依据与保险公司签订的协议依法收取经纪费。
            </div>
          </div>
          <div class="paragraph blank bold">
            <div class="label">
              七、
            </div>
            <div class="desc">
              本公司及公司高级管理人员与经纪业务相关的保险公司、其它中介机构不存在关联关系。
            </div>
          </div>
          <div class="paragraph blank bold">
            <div class="label">
              八、
            </div>
            <div class="desc">
              如果您发现本公司服务人员存在误导行为及其他损害您合法权益的行为，请注意保留书面证据或其他证据，可向本公司投诉（电话∶<span class="orange">4008015880</span>）。
            </div>
          </div>
          <div class="paragraph company bold">
            易康吉保险经纪有限责任公司
          </div>
        </div>
        <div class="mail-footer" />
      </div>
    </div>
  </div>
</template>

<script>
import inViewAnimate from '@/mixins/inViewAnimate';
export default {
  name: '',
  mixins: [inViewAnimate],
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
        // padding-bottom 82rem
        .title
          &:after
            content '客户告知书'
    .notify
      // height 1794rem
      position relative
      background url("~@/assets/imgs/pc/service/notify-bg.jpg") 0 0 no-repeat
      background-size 100%
      background-color #F5F5F5
      padding 60rem 0
      .mail
        padding 40rem 43rem 0
        width 1203rem
        margin 0 auto
        background url("~@/assets/imgs/pc/service/left.jpg"),url("~@/assets/imgs/pc/service/right.png")
        background-position 0 0,1194rem 0
        background-size 1194rem 100%,9rem 100%
        background-repeat no-repeat,no-repeat
        .title
          text-align center
          font-size 24rem
          font-family PingFangSC-Semibold, PingFang SC
          font-weight 600
          color #5D5D5D
          line-height 33rem
        .line
          height 0
          width 1119rem
          border-bottom 1px solid
          margin 36rem auto 25rem
          border-image linear-gradient(270deg, rgba(255, 102, 34, 1), rgba(248, 177, 68, 1)) 2 2
      .paragraph
        line-height 55rem
        // text-decoration underline dotted
        font-size 18rem
        color #5D5D5D
        display flex
        background url("~@/assets/imgs/pc/service/dashed.png") 0 0 repeat
        background-size 12rem
        padding 0 20rem
        font-family PingFangSC-Regular, PingFang SC
        font-weight 400
        &.bold
          font-family PingFangSC-Medium, PingFang SC
          font-weight 700
          > div
            font-weight 700
        .label
          flex 0
        .desc
          flex 1
          .orange
            color #FF6622
        &.company
          text-align right
          justify-content flex-end
      .mail-footer
        width 1203rem
        margin 0 auto
        background url("~@/assets/imgs/pc/service/bottom.png") 0 0 no-repeat
        background-size 100%
        height 230rem
@media(max-width: 999px)
  .service
    .top
      height 200px
      background url("~@/assets/imgs/mobile/service/top.jpg") 0 no-repeat
      background-size 100% 100%
    .content
      .block
        &.branches
          .title
            width 100%
      .notify
        padding 52px 30px
        .mail
          width auto
          padding 44px 20px 0
          // background url("~@/assets/imgs/pc/service/left.jpg"),url("~@/assets/imgs/pc/service/right.png")
          background-position 0 0,99.25% 0
          background-size 99.25% 100%,0.75% 100%
          background-repeat no-repeat,no-repeat
          .title
            font-size 28px
            line-height 40px
          .line
            width 652px
            border-bottom 1px solid
            margin 34px auto 10px
            border-image linear-gradient(270deg, rgba(255, 102, 34, 1), rgba(248, 177, 68, 1)) 2 2
        .paragraph
          line-height 48px
          // text-decoration underline dotted
          font-size 24px
          color #5D5D5D
          display flex
          background url("~@/assets/imgs/pc/service/dashed.png") 0 0 repeat
          background-size 12px 48px
          padding 0 16px
          
          &.blank
            .desc
              position relative
              &:after
                content ''
                height 48px
                display block
                width 100%
        .mail-footer
          width auto
          background url("~@/assets/imgs/pc/service/bottom.png") 0 0 no-repeat
          background-size 100%
          height 230px
</style>
