<template>
  <div class="questions">
    <div
      v-for="(item,index) in questions"
      :key="index + '23432'"
      v-show="curIndex==index"
      class="question"
    >
      <div class="moon" :class="curIndex==index?`moon${index}`:''" />
      <div class="bottom" :class="curIndex==index?`bottom${index}`:''" />
      <div
        class="star"
      />
      <div
        :class="curIndex==index?`light${index}`:''"
        class="light"
      />

      <div
        :class="curIndex==index?`question${index}`:''"
        class="question-single"
      >
        <div class="question-title">
          {{ item.question }}
        </div>
        <div class="options">
          <div
            :class="[ `option${ind}`,{checked:checked===ind} ]"
            v-for="(option,ind) in item.options"
            :key="ind+'23421455'"
            @click="choose(index,ind)"
            class="option"
          >
            {{ option }}
          </div>
        </div>
        <div
          v-if="checked!==false"
          :class="{'active':touching,'resultBtn':index==4}"
          @touchstart.stop="touchstartHandler"
          @touchmove.stop="touchmoveHandler"
          @touchend.stop="touchendHandler(index)"
          class="next"
          @click.stop="touchendHandler(index)"
        />
      </div>
    </div>
    <div
      v-if="showResult"
      class="result"
    >
      <div class="img-box">
        <img
          :src="resultSrc"
          alt=""
        >
      </div>
      <div
        :class="{'active':touching}"
        @touchstart.stop="touchstartHandler"
        @touchmove.stop="touchmoveHandler"
        @touchend.stop="touchendHandlerSave()"
        class="saveBtn"
      >
        <img
          :src="resultSrc"
          class="bigImg"
          alt=""
        >
      </div>
      <div class="tip" />
    </div>
  </div>
</template>

<script>
import { preLoadImage } from 'js/preLoadImage';

export default {
  name: '',
  data() {
    return {
      showResult: false,
      touching: false,
      _score: 0,
      checked: false,
      resultSrc: '',
      results: [
        require('@/assets/imgs/activity/midAutumn/result-1.png'),
        require('@/assets/imgs/activity/midAutumn/result-2.png'),
        require('@/assets/imgs/activity/midAutumn/result-3.png'),
        require('@/assets/imgs/activity/midAutumn/result-4.png'),
        require('@/assets/imgs/activity/midAutumn/result-5.png'),
        require('@/assets/imgs/activity/midAutumn/result-6.png'),
        require('@/assets/imgs/activity/midAutumn/result-7.png')
      ],
      questions: [
        {
          question: '1. 你认为下⾯哪个词更贴近你的性格描述',
          options: [
            '热情似火',
            '温和安静',
            '动静结合'
          ]
        },
        {
          question: '2. ⽣活中，你更喜欢看哪类新闻',
          options: [
            '商业累',
            '社会类',
            '娱乐类'
          ]
        },
        {
          question: '3. ⼀天中，什么时间你感觉最好',
          options: [
            '早晨',
            '下午及傍晚',
            '夜晚'
          ]
        },
        {
          question: '4. 当你去⼀个社交场合时，你会  ',
          options: [
            '想办法引起别⼈注意',
            '只和认识的⼈聚堆',
            '⾮常安静、尽量不被注意'
          ]
        },
        {
          question: '5. 下列⾊系中，你更喜欢哪类',
          options: [
            '暖⾊系，如红、橙、⻩',
            '冷⾊系，如蓝、绿、紫',
            '中性⾊，⿊、⽩、灰'
          ]
        }
      ]
    };
  },
  computed: {
    curIndex() {
      return this.$route.params.index || 0;
    },
    score() {
      return this.$route.query.score || 0;
    }
  },
  watch: {
    curIndex(val) {
      if (val < 4) {
        this.showResult = false;
      }
    }
  },
  created() {
    // alert(window.innerHeight);
    // this.curIndex = this.$route.params.index
    // console.log(this.$route.query)
    const imgArr2 = [
      require('@/assets/imgs/activity/midAutumn/q-moon-2.png'),
      require('@/assets/imgs/activity/midAutumn/q-mooned-2.png'),
      require('@/assets/imgs/activity/midAutumn/q-bottom-2.png')
    ];
    const imgArr3 = [
      require('@/assets/imgs/activity/midAutumn/q-moon-3.png'),
      require('@/assets/imgs/activity/midAutumn/q-mooned-3.png'),
      require('@/assets/imgs/activity/midAutumn/q-bottom-3.png')
    ];
    const imgArr4 = [
      require('@/assets/imgs/activity/midAutumn/q-moon-4.png'),
      require('@/assets/imgs/activity/midAutumn/q-mooned-4.png'),
      require('@/assets/imgs/activity/midAutumn/q-bottom-4.png')
    ];
    const imgArr5 = [
      require('@/assets/imgs/activity/midAutumn/q-moon-5.png'),
      require('@/assets/imgs/activity/midAutumn/q-mooned-5.png'),
      require('@/assets/imgs/activity/midAutumn/q-bottom-5.png'),
      require('@/assets/imgs/activity/midAutumn/q-bottomed-5.png'),
      require('@/assets/imgs/activity/midAutumn/saveBtn.png'),
      require('@/assets/imgs/activity/midAutumn/tip.png')
    ];
    preLoadImage(imgArr2, () => {
      preLoadImage(imgArr3, () => {
        preLoadImage(imgArr4, () => {
          preLoadImage(imgArr5, () => {
            preLoadImage(this.results);
          });
        });
      });
    });
    // require(''),
    // require(''),
  },
  methods: {
    touchendHandlerSave() {
      this.touching = false;
    },
    choose(question, option) {
      console.log(typeof option, option);
      this._score = this.score * 1;
      let score;
      switch (option) {
        case 0:
          score = 8;
          break;
        case 1:
          score = 6;
          break;
        case 2:
          score = 4;
          break;
      }
      this._score += score;
      console.log(this._score);
      this.checked = option;
    },
    touchstartHandler() {
      this.touching = true;
    },
    touchmoveHandler() {
    },
    touchendHandler(index) {
      this.touching = false;
      console.log(this.score);
      let srcIndex;
      if (index == 4) {
        // this.$router.push({
        //   path:'../midAutumnResult',
        //   query:{
        //     score:this._score
        //   }
        // })

        this.showResult = true;
        switch (true) {
          case (this._score <= 22):
            srcIndex = 0;
            break;
          case (this._score <= 25 && this._score >= 23):
            srcIndex = 1;
            break;
          case (this._score <= 28 && this._score >= 26):
            srcIndex = 2;
            break;
          case (this._score <= 31 && this._score >= 29):
            srcIndex = 3;
            break;
          case (this._score <= 34 && this._score >= 32):
            srcIndex = 4;
            break;
          case (this._score <= 37 && this._score >= 35):
            srcIndex = 5;
            break;
          case (this._score >= 38):
            srcIndex = 6;
            break;
        }
        this.resultSrc = this.results[srcIndex];
        this.checked = false;
      } else {
        this.checked = false;
        this.$router.push({
          path: `./${index + 1}`,
          query: {
            score: this._score
          }
        });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@keyframes fadeInOut
  0%
    opacity 0.3
  50%
    opacity 1
  100%
    opacity .3
.questions
  height 100%
  width 100%
  overflow hidden
  position relative
  .question
    height 100%
    background url("~@/assets/imgs/activity/midAutumn/question-bg.jpg") 0 no-repeat
    background-size 100% 100%
    position relative
    .star
      position relative
      z-index 1
      height 1079px
      background url("~@/assets/imgs/activity/midAutumn/star1.png") 0 no-repeat
      background-size 100%
      animation fadeInOut 1.6s infinite
    .question-single
      position absolute
      z-index 4
      width 100%
      top 35%
      .question-title
        font-size 32px
        line-height 24px
        text-align center
        margin-bottom 96px
        color #f2d081
      .options
        display flex
        flex-direction column
        .option
          text-align left
          border-radius 6px
          margin 0 auto 46px
          background-color #0f7384
          padding 0 105px
          line-height 50px
          font-size 32px
          color #ffd781
          position relative
          &.checked
            border 1px solid #ffd781
            &:after
              content ""
              position absolute
              right -25px
              bottom 30%
              width 77px
              height 43px
              background url("~@/assets/imgs/activity/midAutumn/right.png") 0 no-repeat
              background-size 100%

          &.option0
            &:before
              content ""
              position absolute
              left 10px
              bottom 40%
              width 68px
              height 44px
              background url("~@/assets/imgs/activity/midAutumn/option-1.png") 0 no-repeat
              background-size 100%
          &.option1
            &:before
              content ""
              position absolute
              left 10px
              bottom 40%
              width 68px
              height 44px
              background url("~@/assets/imgs/activity/midAutumn/option-2.png") 0 no-repeat
              background-size 100%
          &.option2
            &:before
              content ""
              position absolute
              left 10px
              bottom 40%
              width 68px
              height 44px
              background url("~@/assets/imgs/activity/midAutumn/option-3.png") 0 no-repeat
              background-size 100%
      .next
        width 384px
        height 81px
        box-sizing content-box
        background url("~@/assets/imgs/activity/midAutumn/next.png") 0 no-repeat
        background-size 100% 100%
        border 1px solid transparent
        margin 0 auto
        border-radius 8px
        &.resultBtn
          width 424px
          height 81px
          background url("~@/assets/imgs/activity/midAutumn/nexted.png") 0 no-repeat
          background-size 100% 100%
        &.active
          border 1px solid #f2d182
    .moon0
      height 445px
      background url("~@/assets/imgs/activity/midAutumn/q-moon-1.png") 0 no-repeat
      background-size 100% 100%
      position absolute
      width 100%
      z-index 2
    .bottom0
      height 760px
      background url("~@/assets/imgs/activity/midAutumn/q-bottom-1.png") 0 no-repeat
      background-size 100%
      position absolute
      bottom 0
      width 100%
      z-index 2
      &:after
        position absolute
        right 0
        top 0
        content ''
        width 179px
        height 550px
        background url("~@/assets/imgs/activity/midAutumn/q-bottomed-1.png") 0 no-repeat
        background-size 100%
        animation fadeInOut 1.5s infinite
    .light0
      top 192px
      position absolute
      z-index 3
      width 100%
      height 249px
      background url("~@/assets/imgs/activity/midAutumn/q-light-1.png") 0 no-repeat
      background-size 100%
      &:after
        position absolute
        content ''
        width 100%
        height 100%
        background url("~@/assets/imgs/activity/midAutumn/q-lighted-1.png") 0 no-repeat
        background-size 100%
        animation fadeInOut 2s infinite
    .moon1
      height 448px
      width 498px
      background url("~@/assets/imgs/activity/midAutumn/q-moon-2.png") 0 no-repeat
      background-size 100%
      position absolute
      z-index 1
      &:after
        position absolute
        content ""
        left 0
        top 0
        width 100%
        height 100%
        background url("~@/assets/imgs/activity/midAutumn/q-mooned-2.png") 0 no-repeat
        background-size 100% 100%
        animation fadeInOut 1.5s infinite
    .bottom1
      height 100%
      background url("~@/assets/imgs/activity/midAutumn/q-bottom-2.png") 0 no-repeat
      background-size 100% 100%
      position absolute
      bottom 0
      width 100%
      z-index 2
      &:after
        content ''
        position absolute
        width 100%
        height 609px
        background url("~@/assets/imgs/activity/midAutumn/q-bottomed-2.png") 0 no-repeat
        background-size 100%
        bottom 0
    .question1
      width 498px
      top 33%
    .moon2
      height 653px
      width 100%
      background url("~@/assets/imgs/activity/midAutumn/q-moon-3.png") 0 no-repeat
      background-size 100%
      position absolute
      z-index 1
      &:after
        position absolute
        content ""
        left 0
        top 0
        width 100%
        height 100%
        background url("~@/assets/imgs/activity/midAutumn/q-mooned-3.png") 0 no-repeat
        background-size 100% 100%
        animation fadeInOut 1.5s infinite
    .bottom2
      height 555px
      background url("~@/assets/imgs/activity/midAutumn/q-bottom-3.png") 0 no-repeat
      background-size 100% 100%
      position absolute
      bottom 0
      width 100%
      z-index 2
    .question2
      width 100%
      top 25%
      .option
        width 50%
    .moon3
      height 654px
      width 100%
      background url("~@/assets/imgs/activity/midAutumn/q-moon-4.png") 0 no-repeat
      background-size 100%
      position absolute
      z-index 1
      &:after
        position absolute
        content ""
        left 0
        top 0
        width 100%
        height 100%
        background url("~@/assets/imgs/activity/midAutumn/q-mooned-4.png") 0 no-repeat
        background-size 100% 100%
        animation fadeInOut 1.5s infinite
    .bottom3
      height 970px
      background url("~@/assets/imgs/activity/midAutumn/q-bottom-4.png") 0 no-repeat
      background-size 100% 100%
      position absolute
      bottom 0
      width 100%
      z-index 2
    .question3
      width 623px
      top 28%
      // .question-title
      //   margin-bottom 40px
      .options
        .option
          width 80%
          padding-right 30px
    .moon4
      height 624px
      width 100%
      background url("~@/assets/imgs/activity/midAutumn/q-moon-5.png") 0 no-repeat
      background-size 100%
      position absolute
      z-index 1
      &:after
        position absolute
        content ""
        left 0
        top 0
        width 100%
        height 100%
        background url("~@/assets/imgs/activity/midAutumn/q-mooned-5.png") 0 no-repeat
        background-size 100% 100%
        animation fadeInOut 1.5s infinite
    .bottom4
      height 804px
      background url("~@/assets/imgs/activity/midAutumn/q-bottom-5.png") 0 no-repeat
      background-size 100%
      position absolute
      bottom 0
      width 100%
      z-index 2
      &:after
        position absolute
        left 0
        top 0
        content ''
        width 223px
        height 100%
        background url("~@/assets/imgs/activity/midAutumn/q-bottomed-5.png") 0 no-repeat
        background-size 100%
        animation fadeInOut 1.5s infinite
    .question4
      width 100%
      top 30%
      // .question-title
      //   margin-bottom 40px
      .options
        .option
          width 80%
          padding-right 30px
  .result
    position absolute
    left 0
    top 0
    overflow hidden
    z-index 10
    display flex
    flex-direction column
    justify-content space-between
    background-color rgba(0,0,0,.7)
    width 100%
    height 100%
    align-items center
    padding 30px 30px
    .img-box
      height 82%
      width 100%
      text-align center
      img
        max-width 100%
        max-height 100%
    .saveBtn
      height 81px
      width 235px
      background url("~@/assets/imgs/activity/midAutumn/saveBtn.png") 0 no-repeat
      background-size 100%
      border 1px solid transparent
      border-radius 8px
      &.active
        border-color #f2d182
      .bigImg
        width 100%
        height 100%
        opacity 0.01
    .tip
      width 387px
      height 27px
      background url("~@/assets/imgs/activity/midAutumn/tip.png") center 0 no-repeat
      background-size 100%
@media(max-height: 657px)
  .questions
    .question
      .question-single
        .question-title
          margin-bottom 60px
        &.question1
          margin-top -80px
        &.question2
          margin-top -40px
        &.question3
          margin-top -40px
        &.question4
          margin-top -60px
      .moon
        top -100px
      .moon1
        top 0
      .light0
        margin-top -100px
      .question0
        margin-top -80px
      .bottom
        bottom -100px
      .bottom1
        bottom 0
        &:after
          bottom -20px
      .bottom3
        bottom -120px
</style>
