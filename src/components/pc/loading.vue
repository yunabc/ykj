
<template>
  <div class="loading-wrap" :class="slowHide?'hide':''" v-if="showFlag">
    <div
      class="loading"
    >
      <div
        class="lds-ring"
      >
        <div /><div /><div /><div />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      showFlag:true,
      slowHide:false,
    };
  },
  methods:{
    hide(){
      this.slowHide = true
      setTimeout(()=>this.showFlag = false,1000)
      // this.showFlag = false
    }
  }
};
</script>

<style lang="stylus" scoped>
.loading-wrap{
  position fixed
  width 100%
  height 100%
  background #fff
  z-index 10
  left 0
  top 0
  transition opacity 1s
  &.hide{
    opacity 0
  }
}
.loading {
    width: 100rem;
    height: 100rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 80rem;
    height: 80rem;
    display: flex;
    justify-content: center;
    align-items: center
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64rem;
    height: 64rem;
    margin: 8rem;
    border: 8rem solid #ff5c31;
    border-radius: 50%;
    -webkit-animation: lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;
    animation: lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;
    border-color: #fe5e17 transparent transparent transparent
}

.lds-ring div:first-child {
    -webkit-animation-delay: -.45s;
    animation-delay: -.45s
}

.lds-ring div:nth-child(2) {
    -webkit-animation-delay: -.3s;
    animation-delay: -.3s
}

.lds-ring div:nth-child(3) {
    -webkit-animation-delay: -.15s;
    animation-delay: -.15s
}

@-webkit-keyframes lds-ring {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

</style>
