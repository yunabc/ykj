<template>
  <div
    v-show="showLoading"
    class="loading"
  >
    <div class="loader">
      <div />
    </div>
  </div>
</template>

<script>

/* 与 Loading.vue 的区别: .loading 的定位方式改成了 absolute, 方便自适应盒子大小 */

export default {
  name: 'Loading2',
  computed: {
    showLoading() {
      return this.$store.state.showLoading;
    }
  }
};
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
}
.loader {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  margin-top: -30px;
  left: 50%;
  margin-left: -30px;
   background-color: transparent;
  /* border-radius: 5px; */
  /* z-index: 10006; */
  /* overflow: hidden; */
}
.loader > div {
  border-radius: 100%;
  margin: 1px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  border: 4px solid #FFA100;
  border-bottom-color: transparent;
  height: 48px;
  width: 48px;
  /* background: transparent !important; */
  /* display: inline-block; */
  -webkit-animation: rotate 0.75s 0s linear infinite;
          animation: rotate 0.75s 0s linear infinite;
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg); }

  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

</style>
