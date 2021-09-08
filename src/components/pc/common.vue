<template>
	<div class="pc">
		<v-header class="vheader" v-if="showHeader"></v-header>
		<router-view class="vbody"></router-view>
		<v-footer class="vfooter"></v-footer>
	</div>
</template>

<script>

	import vHeader from './header'
	import vFooter from './footer'
	import { mapState } from 'vuex'

	export default {
		name:'',
		data(){
			return {
			}
		},
		computed:{
			...mapState(['page']),
			showHeader(){
				return this.page !== 'home'
			}
		},
		components:{
			vHeader,
			vFooter
		}
	}
</script>

<style lang="stylus">
.pc	
	height 100%
	display flex
	flex-direction column
	justify-content space-between
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