<template>
  <div class="home">
    <div class="top">
      <!-- <v-header class="home-header"></v-header> -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide1">
            <!-- <img src="@/assets/imgs/pc/home/slide1.png"> -->
            <div class="text-box animat-fadeInUp">
              <div class="txt1">
                DIGITALIZATION
              </div>
              <div class="txt2">
                以数字化重塑民生健康新生态
              </div>
            </div>
          </div>
          <div class="swiper-slide slide2">
            <!-- <img src="@/assets/imgs/pc/home/slide2.png"> -->
            <div class="text-box animat-fadeInUp">
              <div class="txt1">
                DIGITALIZATION
              </div>
              <div class="txt2">
                专注、创新、开放、协同
              </div>
            </div>
          </div>
          <div class="swiper-slide slide3">
            <!-- <img src="@/assets/imgs/pc/home/slide3.png"> -->
            <div class="text-box animat-fadeInUp">
              <div class="txt1">
                DIGITALIZATION
              </div>
              <div class="txt2">
                以数据链为基础的保险经纪服务企业
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
    </div>
    <div class="block mountain">
      <div class="text-box">
        <div class="left">
          <div class="title animat-fadeInUp">
            ABOUT US
          </div>
          <div class="desc animat-fadeInUp">
              易康吉成立于2016年8月，是由易联众信息技术股份有限公司（股票代码： 300096）投资的全国性的保险经纪公司。公司注册地在辽宁省沈阳市，实缴注 册资金5000万。
              2017年起陆续在北京、上海、厦门、江苏等地成立省级分公司，扩大了易康吉全国服务网络。
          </div>
          <div class="desc animat-fadeInUp">
            2021年，公司将进一步贯彻集团公司“让天下没有难过的人生”的企业使命，紧跟 “以数字化重塑民生健康新生态”的企业愿景，本着“专注、创新、开放、协同”的 价值观，打造新型“数字化”易康吉。
          </div>
        </div>
        <div class="right">
          <div class="content">
            <div class="year">
              {{ curYear }}年
            </div>
            <div class="change">
              <div
                v-if="yearsEvent[curYear].title"
                class="type"
              >
                {{ yearsEvent[curYear].title }}
              </div>
              <div class="detail">
                {{ yearsEvent[curYear].desc }}
              </div>
            </div>
          </div>
          <div class="btns">
            <div
              @click="handlerBtn(-1)"
              :class="curYear==2016?'nomore':''"
              class="btn last"
            />
            <div
              @click="handlerBtn(1)"
              :class="curYear==2021?'nomore':''"
              class="btn next"
            />
          </div>
        </div>
      </div>
      <div class="years">
        <div
          :class="[ {'cur':curYear==(count+min-1)},'pos'+(min+count-1) ]"
          v-for="count in 6"
          @click="chooseYear(count)"
          class="year"
        >
          {{ 2016+count-1 }}年
        </div>
      </div>
      <div
        @click.stop="toPage('./about')"
        class="goBtn pos-mountain"
      />
    </div>
    <div class="block map show">
      <div class="bg animat-linearbig" />
      <div class="tool-tips-container dis_none" v-if="showMobileCompanyInfo">
        <div class="line"></div>
        <h4> 公司名称：{{curCompany.company}}</h4>
        <div class="content">地址：{{curCompany.address}}</div>
        <div class="content" v-if="curCompany.tel">电话：{{curCompany.tel}}</div>
        <div class="content" v-if="curCompany.postcode">邮编：{{curCompany.postcode}}</div>
      </div>
      <div class="content">
        <div class="text-box">
          <div class="left">
            <div class="title animat-fadeInUp">
              BRANCHES
            </div>
            <div class="desc animat-fadeInUp">
              公司自2016年8月成立以来，先后在北京、上海、厦门、江苏等地设立了4家省级分支机构。
            </div>
          </div>
          <div class="right">
            <div class="search-box">
              <div class="s-left">
                <div
                  @click.stop="slide=!slide"
                  class="select"
                >
                  {{ branch.name }}
                </div>
                <div
                  v-show="slide"
                  @click.stop="slide=slide"
                  class="options"
                >
                  <div
                    @click.stop="branch=item;slide=false"
                    :class="branch.name==item.name?'cur':''"
                    v-for="item in branches"
                    class="option"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <div
                @click.stop="$router.push(`./contact?branch=${branch.name}`)"
                class="s-right"
              />
            </div>
          </div>
        </div>
        <div
          ref="myEchart"
          class="map-container"
          @click.stop="showMobileCompanyInfo=false"
        />
        <div
          @click.stop="toPage('./contact')"
          class="goBtn pos-map"
        />
      </div>
      <!-- <div class="addInfoWindow">
        <div class="textn line">{{curCompany.company}}</div>
        <div class="textn"></div>
        <div class="textn"></div>
        <div class="textn"></div>
      </div> -->
    </div>
    <div class="block partners">
      <div class="text-box">
        <div class="left">
          <div class="title animat-fadeInUp">
            OUR PARTNERS
          </div>
        </div>
        <div class="right" />
      </div>
      <div class="partner-list">
        <div class="li">
          <img
            src="@/assets/imgs/pc/home/partner1.png"
            alt=""
          >
        </div>
        <div class="li">
          <img
            src="@/assets/imgs/pc/home/partner2.png"
            alt=""
          >
        </div>
        <div class="li">
          <img
            src="@/assets/imgs/pc/home/partner3.png"
            alt=""
          >
        </div>
      </div>
      <div class="bgTitle">
        PARTNERS
      </div>
      <div
        @click.stop="toPage('./info/1')"
        class="goBtn pos-partner"
      />
    </div>
  </div>
</template>

<script>
// import vHeader from '@/components/pc/header'
import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';
import * as echarts from 'echarts';
import china from 'js/china.js';
import branches from 'js/branches.js';
import { throttle, isM } from 'js/util';
  import inViewAnimate from '@/mixins/inViewAnimate'
export default {
  name: '',
  mixins:[inViewAnimate],
  components: {
    // vHeader
  },
  data() {
    return {
      timer:null,
      mySwiper: null,
      curYear: 2016,
      min: 2016,
      max: 2021,
      myEchart: null,
      slide: false,
      branch: {},
      yearsEvent: {
        2016: {
          title: '',
          desc: '易康吉成立'
        },
        2017: {
          title: '',
          desc: '易康吉北京分公司成立'
        },
        2018: {
          title: '',
          desc: '易康吉上海分公司成立2018年实现主营业务收入4472万元'
        },
        2019: {
          title: '',
          desc: '易康吉安徽、厦门、江苏、分公司在各地成立2019年实现主营业务收入1580余万元'
        },
        2020: {
          title: '',
          desc: '2020年实现主营业务收入11931.71万元'
        },
        2021: {
          title: '数字化转型',
          desc: '构建以用户为中心的保啦&易康吉数字化保险保障运营销售平台生态'
        }
      },
      curCompany:null,
      showMobileCompanyInfo:false,
      branches: [
        {
          name: '辽宁',
          index: 1
        },
        {
          name: '北京',
          index: 2
        },
        {
          name: '上海',
          index: 3
        },
        {
          name: '福建',
          index: 4
        },
        {
          name: '江苏',
          index: 5
        },
        // {
        //   name: '山东',
        //   index: 6
        // }
      ]
    };
  },
  created() {
    this.branch = this.branches[0];
    this.curCompany = branches['北京']
  },
  mounted() {
    this.initSwiper();
    this.initMap();
    this.bindDocument();
    this.initChangeYear()
  },
  beforeRouteLeave(to, from, next) {
    document.removeEventListener('click', this.changeSlide);
    window.removeEventListener('click', this.throttleResize);
    next();
  },
  methods: {
    throttleResize() {
      return throttle(() => this.myEchart.resize(), 200)();
    },
    changeSlide() {
      console.log(1);
      this.slide = false;
      this.showMobileCompanyInfo =false
    },
    toPage(path) {
      this.$router.push(path);
    },

    bindDocument() {
      document.addEventListener('click', this.changeSlide, false);
      window.addEventListener('resize', this.throttleResize, false);
    },
    initSwiper() {
      this.mySwiper = new Swiper('.swiper-container', {
        autoplay: true, // 可选选项，自动滑动
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'bullet-normal',
          bulletActiveClass: 'active',
          clickable: true
        }
      });
      this.$nextTick(()=>{
        this.init()
      })
    },
    calculateSize(num) {
      const dpr = window.devicePixelRatio;
      const innerWidth = window.innerWidth;
      if (dpr == 1) {
        return innerWidth / 1920 * num;
      } else {
        if(isM()){

          return dpr / 2 * num / 2.5;
        }else{
          return innerWidth / 1920 * num;
        }
      }
    },
    getMarkPointData() {
      const chinaArr = china.features;
      let arr = [];
      let symbol = ''
      for (var i = chinaArr.length - 1; i >= 0; i--) {
        const item = chinaArr[i];
        const province = item.properties.name;
        if (branches.hasOwnProperty(province)) {
        console.log(...branches[province].position,...item.properties.cp)
          let size = this.calculateSize(14)
          if (province == '辽宁') {
            symbol = 'image://data:image/png;base64,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';
            arr.unshift({
              name: province,
              value: [
                // ...branches[province].position,
                ...item.properties.cp,
                branches[province]
              ],
              symbol,
              symbolSize: this.calculateSize(20)
              // coord: branches[province].position,

            });
          }else{
            let position = branches[province].position
            if(province == '江苏'){
              position[1]+=1
              position[0]-=0.5
            }
            arr.unshift({
              name: province,
              value: [
                ...branches[province].position,
                // ...item.properties.cp,
                branches[province]
              ],
              // symbol,
              symbolSize: size
              // coord: branches[province].position,

            });
          }
        } 
      }
      console.log(arr)
      return arr;
    },
    initMap() {
      echarts.registerMap('china', china);
      this.myEchart = echarts.init(this.$refs.myEchart);
      let tooltip ={
        show:false
      }
      if(!isM()){
        tooltip =  {
          triggerOn:'click',
          trigger: 'item',
          backgroundColor: '#fff',
          borderWidth:'0',
          extraCssText:'white-space:normal',
          formatter: function(params) {
            console.log(params)
            const tempArr = params.value.slice(2);
            let html = '';
            tempArr.forEach(item => {
              console.log(item)
              const { company, address, tel, postcode } = item.value || item;
              // if(item.province == '北京'||item.province == '北京'){

              // }
              html += `<div class="tool-tips-container">
                        <div class="line"></div>
                        <h4> 公司名称：${company}</h4>
                        <div class="tips-divider"></div>`+
                        (address?`<div class="content">地址：${address}</div>`:'')+
                        (tel?`<div class="content">电话：${tel}</div>`:'')+
                        (postcode?`<div class="content">邮编：${postcode ||'暂未公示'}</div>`:'')+
                      `</div>`;
            });
            return html;
          }
        }
      }
      const option = {
        tooltip,
        // 地理坐标系组件
        geo: {
          map: 'china',
          zoom: 1.23,
          center: [105, 36],
          label: {
            // true会显示城市名
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            // 地图背景色
            normal: {
              areaColor: '#fc8430',
              borderColor: '#fff'
            },
            // 悬浮时
            emphasis: {
              areaColor: '#fc8430'
            }
          }
        },
        // 系列列表
        series: [
          {
            name: '公司地址',
            // 表的类型 这里是散点
            type: 'effectScatter',
            // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件
            coordinateSystem: 'geo',
            data:this.getMarkPointData(),
            // 鼠标悬浮的时候在圆点上显示数值
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            showEffectOn: 'emphasis',
            rippleEffect: { period: 6, scale: 6, color: '#FFE89E' },
            itemStyle: {
              normal: {
                color: '#FFE89E',
                borderRadius: '10px'
              }
              // 鼠标悬浮的时候圆点样式变化
            },
            emphasis: {}
          }
        ]
      };
      this.myEchart.setOption(option);
      this.myEchart.on('click', 'series',  (params)=> {
        console.log(params)
        this.curCompany = params.data.value[2]
        setTimeout(()=>{
          this.showMobileCompanyInfo = true
        },200)
      });
    },
    chooseYear(count){
      clearInterval(this.timer)
      this.curYear=this.min+count-1
      this.initChangeYear()

    },
    handlerBtn(num){
      clearInterval(this.timer)
      this.changeYear(num)
      this.initChangeYear()
    },
    changeYear(num) {
      if ((this.curYear > this.min && num < 0) || (this.curYear < this.max && num > 0)) {
        this.curYear += num;
      }
    },
    initChangeYear(){
      this.timer = setInterval(()=>{
        if(this.curYear==this.max){
          this.curYear = this.min-1
        }
        this.changeYear(1)
      },3000)
    }
  }
};
</script>

<style lang="stylus" scoped>

>>>.bullet-normal
  margin 0 30rem 0 0
  display inline-block
  width 32rem
  height 8rem
  background-color #fff
  opacity .4
  border-radius 4rem
>>>.active
  opacity 1
.goBtn
  width 58rem
  height 58rem
  border-radius 50%
  overflow hidden
  background url("~@/assets/imgs/pc/home/go.png") center no-repeat
  background-size 100%
  cursor pointer
.home
  .top
    position relative
    .swiper-slide
      height 1082rem
      &.slide1
        background url("~@/assets/imgs/pc/home/slide1.png") 0 no-repeat
        background-size 100% 100%
        color #855C4E
      &.slide2
        background url("~@/assets/imgs/pc/home/slide2.png") 0 no-repeat
        background-size 100% 100%
        color #204979
        .text-box
          .txt1
            &:after
              border-color #204979
      &.slide3
        background url("~@/assets/imgs/pc/home/slide3.png") 0 no-repeat
        background-size 100% 100%
        color #395A96
        .text-box
          .txt1
            &:after
              border-color #395A96
      .text-box

        font-family "Noto Sans SC", sans-serif
        text-align center
        position absolute
        left 0
        top 360rem
        width 100%
        .txt1
          display inline-block
          font-size 53rem
          line-height 78rem
          margin-bottom 35rem
          position relative
          font-weight 200
          &:after
            content ''
            position absolute
            left 0
            bottom -20rem
            border-bottom 2rem solid #855C4E
            opacity  .5
            width 100%
            height 0
            font-size 0
        .txt2
          font-size 72rem
          line-height 107rem
          font-weight 500

    .home-header
      position absolute
      width 100%
      z-index 2
  .block
    position relative
    padding 102rem 0 0 160rem
    box-sizing border-box
    background-color #F5F5F5
    .text-box
      display flex
      justify-content space-between
      .left
        width 796rem
        .title
          line-height 112rem
          font-size 80rem
          color #e6e6e7
          position relative
          margin-bottom 48rem
          &:before
            height 0
          &:after
            font-size 35rem
            bottom 15rem
            color #515356
            position absolute
            left 0
            line-height 1
            font-weight bold
        .desc
          line-height 24rem
          font-size 16rem
          color #515356
    &.mountain
      background url("~@/assets/imgs/pc/home/mountain.png") left bottom no-repeat
      background-size 100%
      height 1080rem
      .text-box
        .left
          .title
            &:after
              content "关于我们"
        .right
          position relative
          box-sizing border-box
          width 745rem
          height 212rem
          border-radius 18rem
          padding 26rem 0 0 89rem
          box-shadow 5rem 10rem 30rem -5rem #ccc
          background url("~@/assets/imgs/pc/home/small-mountain.png") center bottom no-repeat
          background-size 100%
          .content
            width 300rem
            .year
              line-height 28rem
              color #ff6622
              font-size 20rem
              margin-bottom 10rem
              position relative
              font-weight bold
              &:after
                content ''
                height 2rem
                background #ff6622
                font-size 0
                width 81rem
                left -89rem
                position absolute
                bottom 13rem
            .change
              font-size 20rem
              line-height 28rem
              color #4a4a4a
              .type
                font-weight bold
          .btns
            position absolute
            left 462rem
            bottom 73rem
            display flex
            .btn
              width 35rem
              height 35rem
              border-radius 50%
              margin-right 54rem
              cursor pointer
              &.last
                background url("~@/assets/imgs/pc/home/last.png") 0 no-repeat
                background-size 100%
                &.nomore
                  background url("~@/assets/imgs/pc/home/lastNomore.png") 0 no-repeat
                  background-size 100%
              &.next
                background url("~@/assets/imgs/pc/home/next.png") 0 no-repeat
                background-size 100%
                &.nomore
                  background url("~@/assets/imgs/pc/home/nextNomore.png") 0 no-repeat
                  background-size 100%
      .years
        .year
          position absolute
          text-align center
          width 90rem
          line-height 30rem
          font-size 20rem
          color #4A4A4A
          padding-bottom 125rem
          background url("~@/assets/imgs/pc/home/year.png") center bottom no-repeat
          background-size 42rem
          cursor pointer
          &.cur
            &:after
              transform scale(2)
          &:after
            transition all 0.3s
            content ''
            position absolute
            left 35.4rem
            // margin-left -10rem
            bottom 85rem
            border-radius 50%
            width 12rem
            height 12rem
            background-color #ff6622
            border 4rem solid #FACDB8
          &.pos2016
            left 225rem
            bottom 310rem
          &.pos2017
            left 370rem
            bottom 330rem
          &.pos2018
            left 642rem
            bottom 339rem

          &.pos2019
            left 900rem
            bottom 347rem
          &.pos2020
            left 1168rem
            bottom 408rem
          &.pos2021
            left 1540rem
            bottom 510rem
      .pos-mountain
        position absolute
        right 171px
        bottom 30px
    &.map
      padding-right 160rem
      padding-bottom 100rem
      background url("~@/assets/imgs/pc/home/branch_bg.png") 0 bottom no-repeat
      background-size 100% 100%
      position relative
      overflow hidden
      .bg
        position absolute
        z-index 1
        width 30rem
        height 30rem
        left 50%
        top 50%
        margin -15rem 0 0 -15rem
        background-color #fff
        border-radius 50%
        transition all 1s
        &.animate__linearbig
          transform scale(48)
      .content
        position relative
        z-index 2
      .pos-map
        position absolute
        right 162rem
        bottom 145rem
      .text-box
        position relative
        z-index 2
        .left
          .title
            &:after
              content "分支机构分布图"
        .right
          .search-box
            width 520rem
            height 62rem
            display flex
            align-items flex-start
            box-shadow 0rem 0rem 10rem 0rem #ccc
            .s-left
              flex 0 0 393rem
              .select
                cursor pointer
                background-color #fff
                height 62rem
                padding-left 28rem
                line-height 62rem
                font-size 20rem
                color #5d5d5d
                position relative
                &:after
                  content ''
                  position absolute
                  width 0
                  height 0
                  border-left 10rem solid transparent
                  border-right 10rem solid transparent
                  border-top 10rem solid #A3A3A3
                  right 20rem
                  top 50%
                  margin-top -5rem
              .options
                box-shadow 0rem 0rem 10rem 0rem #ccc
                height 243rem
                background-color #fff
                margin-top 2rem
                padding 52rem 22rem
                overflow auto
                display flex
                flex-wrap wrap
                justify-content space-between
                &:after
                  content ''
                  width 110rem
                  height 0
                  font-size 0
                .option
                  cursor pointer
                  background-color #F5F5F5
                  width 110rem
                  height 26rem
                  line-height 26rem
                  text-align center
                  font-size 16rem
                  color #5D5D5D
                  &.cur
                    background-color #FEEAD7
                    color #FF6622
            .s-right
              border-radius 5%
              cursor pointer
              background-image url('~@/assets/imgs/pc/home/search.png'), linear-gradient(to right, #F9A840 , #FE7328)
              background-size 33rem,100%
              background-repeat no-repeat,no-repeat
              background-position center center, 0 0
              flex 1
              height 100%
              transition all .4s
              &:hover
                background-size 40rem,100%
                

      .map-container
        height 780rem
        >>>.tool-tips-container
          width 504rem
          padding 21rem 39rem 25rem
          color #515356
          background-color rgba(255,255,255,.7)
          font-size 16rem
          line-height 24rem
          box-shadow 10rem 10rem 0 10rem rgba(255,255,255,.5)
          .h4
            line-height 24rem
          .content
            line-height 24rem
          .line
            font-size 0
            height 2rem
            background-color #FF6622
            width 38rem
            margin-bottom 7rem
    &.partners
      padding-right 160rem
      padding-bottom 148rem
      background url("~@/assets/imgs/pc/home/partners_bg.png") 0 bottom no-repeat
      background-size 100% 100%
      .pos-partner
        position absolute
        left 932rem
        bottom 145rem
      .text-box
        position relative
        z-index 2
        .left
          .title
            &:after
              content "合作机构LOGO展示"
      .partner-list
        display flex
        justify-content center
        margin-bottom 31rem
        .li
          height 318rem
          margin-right 2rem
          img
            height 100%
      .bgTitle
        line-height 273rem
        font-size 195rem
        color #E8E8E8
        font-weight bold
        text-align center
        opacity 0.7

@media(max-width: 999px)
  >>>.bullet-normal
    margin 0 15px 0 15px
    display inline-block
    width 16px
    height 4px
    background-color #fff
    opacity .4
    border-radius 2px
  >>>.active
    opacity 1
  .goBtn
    width 30px
    height 30px
  .home
    .top
      .swiper-slide
        height 492px
        &.slide1
          background url("~@/assets/imgs/mobile/home/m-slide1.png") 0 no-repeat
          background-size 100% 100%
        &.slide2
          background url("~@/assets/imgs/mobile/home/m-slide2.png") 0 no-repeat
          background-size 100% 100%
        &.slide3
          background url("~@/assets/imgs/mobile/home/m-slide3.png") 0 no-repeat
          background-size 100% 100%
        .text-box
          left 0
          top 160px
          width 100%
          .txt1
            font-size 16px
            line-height 24px
            margin-bottom 20px
            &:after
              bottom -10px
              border-bottom 2px solid #855C4E
              opacity  .5
              width 100%
              height 0
              font-size 0
          .txt2
            font-size 20px
            line-height 29px
            font-weight 500
      .home-header
        position relative
    .block
      padding 33px 0 0 17px
      background-color #F5F5F5
      .text-box
        display block
        .left
          width auto
          .title
            line-height 32px
            padding-top 0
            font-size 25px
            color #e6e6e7
            position relative
            margin-bottom 64px
            &:before
              height 0
            &:after
              margin-bottom -18px
              font-size 20px
              bottom 14px
              color #515356
              position absolute
              left 0
              line-height 1
              font-weight bold
          .desc
            line-height 20px
            padding-right 10px
            font-size 12px
            color #515356
            margin-bottom 10px
      &.mountain
        background url("~@/assets/imgs/mobile/home/mountain.png") left bottom no-repeat
        background-size 100%
        height 670px
        .text-box
          .right
            position relative
            box-sizing border-box
            width 306px
            height 112px
            margin-left 52px
            border-radius 10px
            padding 19px 0 0 20px
            box-shadow 5px 10px 30px -5px #ccc
            background url("~@/assets/imgs/pc/home/small-mountain.png") center bottom no-repeat
            background-size 100%
            .content
              width 180px
              .year
                line-height 18px
                color #ff6622
                font-size 13px
                margin-bottom 3px
                position relative
                padding-left 58px
                &:after
                  content ''
                  height 1px
                  background #ff6622
                  font-size 0
                  width 45px
                  left 0
                  position absolute
                  bottom 9px
              .change
                font-size 12px
                line-height 17px
                color #4a4a4a
                .type
                  font-weight bold
            .btns
              position absolute
              left 210px
              bottom 21px
              display flex
              .btn
                width 23px
                height 23px
                border-radius 50%
                margin-right 15px
                cursor pointer
                &.last
                  background url("~@/assets/imgs/pc/home/last.png") 0 no-repeat
                  background-size 100%
                  &.nomore
                    background url("~@/assets/imgs/pc/home/lastNomore.png") 0 no-repeat
                    background-size 100%
                &.next
                  background url("~@/assets/imgs/pc/home/next.png") 0 no-repeat
                  background-size 100%
                  &.nomore
                    background url("~@/assets/imgs/pc/home/nextNomore.png") 0 no-repeat
                    background-size 100%
        .years
          .year
            position absolute
            text-align center
            width 40px
            line-height 17px
            font-size 12px
            color #4A4A4A
            padding-bottom 73px
            background url("~@/assets/imgs/pc/home/year.png") center bottom no-repeat
            background-size 21px
            cursor pointer
            &.cur
              &:after
                transform scale(2)
            &:after
              transition all 0.3s
              content ''
              position absolute
              left 15px
              // margin-left -10px
              bottom 45px
              border-radius 50%
              width 6px
              height 6px
              background-color #ff6622
              border 2px solid #FACDB8
            &.pos2016
              left 0px
              bottom 50px
            &.pos2017
              left 67px
              bottom 53px
            &.pos2018
              left 119px
              bottom 64px

            &.pos2019
              left 165px
              bottom 73px
            &.pos2020
              left 217px
              bottom 85px
            &.pos2021
              left 289px
              bottom 102px
        .pos-mountain
          position absolute
          right 171px
          bottom 30px
      &.map
        padding-right 0
        padding-bottom 93px
        background url("~@/assets/imgs/mobile/home/map-bg.png") 0 bottom no-repeat
        background-size 100% 100%
        position relative
        overflow hidden
        .tool-tips-container
          position absolute
          z-index 20
          display block
          bottom 300px
          left 20px
          width 300px
          padding 21px 25px
          color #515356
          background-color rgba(255,255,255,.9)
          font-size 12px
          line-height 17px
          box-shadow 5px 5px 0 5px rgba(255,255,255,.7)
          .h4
            line-height 17px
          .content
            line-height 17px
          .line
            font-size 0
            height 2px
            background-color #FF6622
            width 38px
            margin-bottom 7px
        .bg
          position absolute
          width 30px
          height 30px
          left 50%
          top 68%
          margin -15px 0 0 -15px
          &.animate__linearbig
            transform scale(14)
        .content
          position relative
          z-index 2
        .pos-map
          position absolute
          right 171px
          bottom -80px
        .text-box
          position relative
          z-index 2
          margin-bottom 132px
          .left
            .title
              &:after
                content "分支机构分布图"
          .right
            .search-box
              margin-left 20px
              width 302px
              height 28px
              display flex
              align-items flex-start
              box-shadow 0px 0px 10px 0px #ccc
              .s-left
                flex 0 0 228px
                .select
                  cursor pointer
                  background-color #fff
                  height 28px
                  padding-left 20px
                  line-height 28px
                  font-size 12px
                  color #5d5d5d
                  position relative
                  &:after
                    content ''
                    position absolute
                    width 0
                    height 0
                    border-left 6px solid transparent
                    border-right 6px solid transparent
                    border-top 6px solid #A3A3A3
                    right 12px
                    top 50%
                    margin-top -3px
                .options
                  box-shadow 0px 0px 10px 0px #ccc
                  height 142px
                  background-color #fff
                  margin-top 2px
                  padding 19px 20px
                  overflow auto
                  display flex
                  flex-wrap wrap
                  justify-content space-between
                  &:after
                    content ''
                    width 100%
                    height 0
                    font-size 0
                  .option
                    cursor pointer
                    background-color #F5F5F5
                    width 88px
                    height 20px
                    line-height 20px
                    text-align center
                    font-size 12px
                    color #5D5D5D
                    &.cur
                      background-color #FEEAD7
                      color #FF6622
              .s-right
                cursor pointer
                background-size 18px,100%
                flex 1
                height 100%

        .map-container
          width 340px
          height 280px
      &.partners
        padding-right 0
        padding-bottom 80px
        background url("~@/assets/imgs/pc/home/partners_bg.png") 0 bottom no-repeat
        background-size 100% 100%
        .pos-partner
          position absolute
          left 171px
          bottom 30px
        .text-box
          position relative
          z-index 2
          .left
            .title
              &:after
                content "合作机构LOGO展示"
        .partner-list
          display flex
          justify-content center
          margin-bottom 31px
          .li
            width 73px
            height 81px
            margin-right 2px
            img
              height 100%
        .bgTitle
          line-height 56px
          font-size 40px
          color #E8E8E8
          font-weight bold
          text-align center
          opacity 0.7
</style>
