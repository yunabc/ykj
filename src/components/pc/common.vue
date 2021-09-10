<template>
  <div class="official" :class="fixedOfficial?'noScroll':''">
    <v-header @fixedheader="fixedHandler" class="vheader" />
    <router-view class="vbody" />
    <v-footer class="vfooter" />
  </div>
</template>

<script>

import vHeader from './header';
import vFooter from './footer';

export default {
  name: '',

  components: {
    vHeader,

    vFooter
  },
  data() {
    return {
      fixedOfficial:false
    };
  },
  methods:{
    fixedHandler(bool){
      this.fixedOfficial = bool
    }
  }
};
</script>

<style lang="stylus">
.official
  height 100%
  display flex
  flex-direction column
  justify-content space-between
  &.noScroll
    overflow hidden
  .vheader
    flex 0 0 100rem
    position relative
    z-index 2
  .vbody
    flex 1 1 auto
  .vfooter
    flex 0 0 100rem
    position relative
    z-index 2
</style>
