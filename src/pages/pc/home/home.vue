<template>
	<div class="home">
		<div class="top">
			<v-header class="home-header"></v-header>
			<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide slide1">
			    	<!-- <img src="@/assets/imgs/pc/home/slide1.png"> -->
			    	<div class="text-box">
			    		<div class="txt1">DIGITALIZATION</div>
			    		<div class="txt2">以数字化重塑民生健康新生态</div>
			    	</div>
			    </div>
			    <div class="swiper-slide slide2">
			    	<!-- <img src="@/assets/imgs/pc/home/slide2.png"> -->
			    	<div class="text-box">
			    		<div class="txt1">DIGITALIZATION</div>
			    		<div class="txt2">专注、创新、开放、协同</div>
			    	</div>
			    </div>
			    <div class="swiper-slide slide3">
			    	<!-- <img src="@/assets/imgs/pc/home/slide3.png"> -->
			    	<div class="text-box">
			    		<div class="txt1">DIGITALIZATION</div>
			    		<div class="txt2">以数据链为基础的保险经纪服务企业</div>
			    	</div>
			    </div>
			  </div>
			  <div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="block mountain">
			<div class="text-box">
				<div class="left">
					<div class="title">ABOUT US</div>
					<div class="desc">易康吉成立于2016年8月，是由易联众信息技术股份有限公司（股票代码：300096）投资的全国性的保险经纪公司。公司注册地在辽宁省沈阳市，实缴注册资金5000万。2020年，实现主营业务收入11955.54万元。2017年起陆续在北京、上海、山东、厦门、江苏等地成立省级分公司，扩大了易康吉全国服务网络。</div>
				</div>
				<div class="right">
					
				    <div class="content">
				    	<div class="year">{{curYear}}年</div>
				    	<div class="change">
				    		<div class="type" v-if="yearsEvent[curYear].title">{{yearsEvent[curYear].title}}</div>
				    		<div class="detail">{{yearsEvent[curYear].desc }}</div>
				    	</div>
				    </div>
				    <div class="btns">
				    	<div @click="changeYear(-1)"  class="btn last" :class="curYear==2016?'nomore':''"></div>
				    	<div @click="changeYear(1)" class="btn next" :class="curYear==2021?'nomore':''"></div>
				    </div>
					
				</div>
			</div>
			<div class="years">
				<div class="year"  :class="[{'cur':curYear==(count+min-1)},'pos'+(min+count-1)]" v-for="count in 6" @click="curYear=min+count-1">{{2016+count-1}}年</div>
			</div>
			<div class="goBtn pos-mountain"></div>
		</div>
		<div class="block map show">
			<div class="bg"></div>
			<div class="content">
				<div class="text-box">
					<div class="left">
						<div class="title">BRANCHES</div>
						<div class="desc">公司自2016年8月成立以来，先后在北京、上海、厦门、江苏、山东等地设立了5家省级分支机构。</div>
					</div>
					<div class="right">
						<div class="search-box">
							<div class="s-left">
								<div class="select" @click.stop="slide=!slide">{{ branch.name }}</div>
								<div class="options" v-show="slide" @click.stop='slide=slide'>
									<div class="option" @click.stop="branch=item;slide=false" :class="branch.name==item.name?'cur':''" v-for="item in branches">{{ item.name }}</div>
								</div>
							</div>
							<div class="s-right" @click.stop="$router.push(`./contact?branch=${branch.name}`)"></div>
						</div>
					    
						
					</div>
				</div>
				<div class="map-container" ref="myEchart"></div>
				<div class="goBtn pos-map"></div>
			</div>
		</div>
		<div class="block partners">
			<div class="text-box">
				<div class="left">
					<div class="title">OUR PARTNERS</div>
				</div>
				<div class="right">
				</div>
			</div>
			<div class="partner-list">
				<div class="li">
					<img src="@/assets/imgs/pc/home/partner1.png" alt="">
				</div>
				<div class="li">
					<img src="@/assets/imgs/pc/home/partner2.png" alt="">
				</div>
				<div class="li">
					<img src="@/assets/imgs/pc/home/partner3.png" alt="">
				</div>
			</div>
			<div class="bgTitle">PARTNERS</div>
			<div class="goBtn pos-partner"></div>
			
		</div>
	</div>
</template>

<script>
	import vHeader from '@/components/pc/header'
	import "swiper/css/swiper.min.css"
	import Swiper from "swiper"
	import  * as echarts from "echarts"
	import china from 'js/china.js'
	import { throttle } from 'js/util'
	export default {
		name:'',
		data(){
			return {
				mySwiper:null,
				curYear:2016,
				min:2016,
				max:2021,
				myEchart:null,
				slide:false,
				branch:{},
				yearsEvent:{
					2016:{
						title:'',
						desc:'易康吉成立'
					},
					2017:{
						title:'',
						desc:'易康吉北京分公司成立'
					},
					2018:{
						title:'',
						desc:'易康吉上海分公司成立2018年实现主营业务收入4472万元'
					},
					2019:{
						title:'',
						desc:'易康吉安徽、山东、厦门、江苏、分公司在各地成立2019年实现主营业务收入1580余万元'
					},
					2020:{
						title:'',
						desc:'2020年实现主营业务收入11931.71万元'
					},
					2021:{
						title:'数字化转型',
						desc:'构建以用户为中心的保啦&易康吉数字化保险保障运营销售平台生态'
					},
				},
				branches:[
					{
						name:'辽宁',
						index:1
					},
					{
						name:'北京',
						index:2
					},
					{
						name:'上海',
						index:3
					},
					{
						name:'厦门',
						index:4
					},
					{
						name:'江苏',
						index:5
					},
					{
						name:'山东',
						index:6
					}
				]
			}
		},
		components:{
			vHeader
		},
		created(){
			this.branch = this.branches[0]
		},
		mounted(){
			this.initSwiper()
			this.initMap()
			this.bindDocument()
		},
		methods:{
			bindDocument(){
				document.addEventListener('click',(e)=>{
					this.slide=false
				},false)
				window.addEventListener('resize',throttle(()=>this.myEchart.resize(),200),false)
			},
			initSwiper(){

				this.mySwiper = new Swiper('.swiper-container',{
					autoplay: true,//可选选项，自动滑动
					loop:true,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						bulletClass:'bullet-normal',
						bulletActiveClass:'active',
						clickable:true
					},
				})
			},
			initMap(){
				echarts.registerMap('china', china)
				this.myEchart = echarts.init(this.$refs.myEchart);
				let option = {
				        tooltip: {
				          show: false
				        },
				        // geo: {
				        //   map: "china",
				        //   roam: false,// 一定要关闭拖拽
				        //   zoom: 1.23,
				        //   center: [105, 36], // 调整地图位置
				        //   label: {
				        //     normal: {
				        //       show: false, //关闭省份名展示
				        //       fontSize: "10",
				        //       color: "rgba(0,0,0,0.7)"
				        //     },
				        //     emphasis: {
				        //       show: false
				        //     }
				        //   },
				        //   itemStyle: {
				        //     normal: {
				        //       areaColor: "#0d0059",
				        //       borderColor: "#389dff",
				        //       borderWidth: 1, //设置外层边框
				        //       shadowBlur: 5,
				        //       shadowOffsetY: 8,
				        //       shadowOffsetX: 0,
				        //       shadowColor: "#01012a"
				        //     },
				        //     emphasis: {
				        //       areaColor: "#184cff",
				        //       shadowOffsetX: 0,
				        //       shadowOffsetY: 0,
				        //       shadowBlur: 5,
				        //       borderWidth: 0,
				        //       shadowColor: "rgba(0, 0, 0, 0.5)"
				        //     }
				        //   }
				        // },
				        series: [
				          {
				            type: "map",
				            map: "china",
				            roam: false,
				            zoom: 1.23,
				            center: [105, 36],
				            // geoIndex: 1,
				            // aspectScale: 0.75, //长宽比
				            showLegendSymbol: false, // 存在legend时显示
				            label: {
				              normal: {
				                show: false
				              },
				              emphasis: {
				                show: false,
				                textStyle: {
				                  color: "#fff"
				                }
				              }
				            },
				            itemStyle: {
				              normal: {
				                areaColor: "#f8ae42",
				                // areaColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
			                 //        offset: 0,
			                 //        color: '#508DFF'
			                 //    }, {
			                 //        offset: 1,
			                 //        color: '#26C5FE'
			                 //    }]),
				                borderColor: "#fff",
				                borderWidth: 0.5
				              },
				              emphasis: {
				                areaColor: "#fc8430",
				                // shadowOffsetX: 0,
				                // shadowOffsetY: 0,
				                // shadowBlur: 5,
				                // borderWidth: 0,
				                // shadowColor: "rgba(0, 0, 0, 0.5)"
				              }
				            }
				          }
				        ]
				      };
				this.myEchart.setOption(option);
			},
			changeYear(num){
				if((this.curYear> this.min&&num<0)||(this.curYear< this.max&&num>0)){
					this.curYear+=num
				}
			},
		}
	}
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
			&.slide3
				background url("~@/assets/imgs/pc/home/slide3.png") 0 no-repeat
				background-size 100% 100%
				color #395A96
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
						border-bottom 2px solid #855C4E
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
				transition all .3s
			&.show
				.bg
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
							cursor pointer
							background-image url('~@/assets/imgs/pc/home/search.png'), linear-gradient(to right, #F9A840 , #FE7328)
							background-size 44rem,100%
							background-repeat no-repeat,no-repeat
							background-position center center, 0 0	
							flex 1
							height 100%		

			.map-container
				height 780rem
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
		margin 0 30px 0 0
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
						margin-bottom 50px
			&.mountain
				background url("~@/assets/imgs/mobile/home/mountain.png") left bottom no-repeat
				background-size 100%
				height 632px
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
				.bg
					position absolute
					z-index 1
					width 30px
					height 30px
					left 50%
					top 70%
					margin -15px 0 0 -15px
					background-color #fff
					border-radius 50%
					transition all .3s
				&.show
					.bg
						transform scale(10)
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
								background-image url('~@/assets/imgs/pc/home/search.png'), linear-gradient(to right, #F9A840 , #FE7328)
								background-size 22px,100%
								background-repeat no-repeat,no-repeat
								background-position center center, 0 0	
								flex 1
								height 100%		

				.map-container
					width 260px
					margin 0 auto 0 40px 
					height 190px
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