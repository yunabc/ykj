<template>
	<div class="info">
		<div class="top">
			
			<div class="tabs">
				<div class="tab" :class="curIndex==index?'cur':''" @click.stop="curIndex=index" v-for="(item,index) in tabs">{{ item }}</div>
			</div>
		</div>
		<div class="contents">
			<div class="block qualification" v-show="curIndex == 0">
				<div class="title">BUSINESS QUALIFICATION</div>
				<div class="photos">
					<div class="imgbox">
						<img src="~@/assets/imgs/pc/info/photo1.png" alt="">
						<div class="toPdf" @click="">
							查看营业执照PDF
							<span><img src="~@/assets/imgs/pc/home/next.png"/></span>
						</div>

					</div>
					<div class="imgbox">
						<img src="~@/assets/imgs/pc/info/photo2.png" alt="">
						<div class="toPdf">
							查看营业执照PDF
							<span><img src="~@/assets/imgs/pc/home/next.png"/></span>
						</div>

					</div>
				</div>
			</div>
			<div class="block parnters" v-show="curIndex == 1">
				<div class="title">OUR PARTNERS</div>
				<!-- <div class="list">
					<div class="li" :class="curKey == key?'cur':''" v-for="(item,key) in partners" @click.stop="changeCategory(key)">{{ key }}
					</div>
				</div> -->
				<div class="logos">
					<div class="logo animate__fadeInUp" v-for="item in curItem">
						<img :src="item" alt="">
					</div>
				</div>
			</div>
			<div class="block internet" v-show="curIndex == 2">
				<div class="title">ONLINE INSURANCE</div>
				<div class="content">
					<div class="title1 black">网销平台及网址</div>
					<div class="net block1">
						<div class="left  textCenter bg lineHeight white">易康吉保险经纪官网</div>
						<div class="right textCenter lineHeight blue"><a href="www.ekangji.com" target="_blank"></a>www.ekangji.com</div>
					</div>
					<div class="desc gray">
						上述平台在中保协官网（
						<a class="blue" href="http://icid.iachina.cn/?columnid_url=201509301401" target="_blank">http://icid.iachina.cn/?columnid_url=201509301401</a>
						）的信息披露情况可通过中保协官网-信息披露-互联网保险信息披露-搜索“易康吉保险经纪”进行查询。
					</div>
				</div>
				<div class="content">
					<div class="title1 black">合作保险公司情况介绍</div>
					<div class="net textCenter bg lineHeight">
						<div class="left borderR white">保险机构名称</div>
						<div class="right  white">保险机构信息查询网址</div>
					</div>
					<div class="table textLeft">
						<div class="line lineHeight black">
							<div class="left">泰康养老保险股份有限公司北京分公司</div>
							<div class="right " ><a class="blue" target="_blank" href="http://tkyl.pension.taikang.com/cms/static/xxplnew/xxpl_index.html">http://tkyl.pension.taikang.com/cms/static/xxplnew/xxpl_index.html</a></div>
						</div>
						<div class="line lineHeight black">
							<div class="left">中国太平洋财险保险股份有限公司</div>
							<div class="right" ><a target="_blank" class="blue" href="http://www.cpic.com.cn/xccbx/gkxxbl/cfnlxxzq/?subMenu=4&inSub=3">http://www.cpic.com.cn/xccbx/gkxxbl/cfnlxxzq/?subMenu=4&inSub=3</a></div>
						</div>
						<div class="line lineHeight black">
							<div class="left">中国人民健康保险股份有限公司</div>
							<div class="right" ><a class="blue" target="_blank" href="http://www.picchealth.com/tabid/2331/Default.aspx">http://www.picchealth.com/tabid/2331/Default.aspx</a></div>
						</div>
					</div>
					<div class="desc gray">
						合作保险公司的详情如一年来综合偿付能力充足率、风险综合评级、消费者权益保护监管评价等相关监管评价信息详见各保险公司官网。
					</div>
				</div>
				<div class="content">
					<div class="title1 black ">合作保险机构</div>
					<div class="net textCenter bg lineHeight white mTable">
						<div class="left borderR">保险机构名称</div>
						<div class="center borderR">合作业务范围</div>
						<div class="right ">协议止期</div>
					</div>
					<div class="table textLeft black table3">
						<div class="line lineHeight">
							<div class="left">泰康养老保险股份有限公司北京分公司</div>
							<div class="center">健康险</div>
							<div class="right" >2021.8.2-2022.8.1</div>
						</div>
						<div class="line lineHeight mcenter">
							<div class="left">中国太平洋财险保险股份有限公司</div>
							<div class="center">健康险、意外险</div>
							<div class="right" >2021.5.1-2022.4.30</div>
						</div>
						<div class="line lineHeight mright">
							<div class="left">中国人民健康保险股份有限公司</div>
							<div class="center">健康险、意外险</div>
							<div class="right" >2020.11.13-2021.11.12</div>
						</div>
						
					</div>
					
				</div>
			</div>
			<div class="block product" v-show="curIndex == 3">
				<div class="title">PRODUCT</div>
				<div class="content">
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return {
				tabs:[
					"经营资质",
					"合作机构",
					"互联网保险",
					"产品披露"
				],
				curIndex:0,
				curKey:'全部',
				curItem:null,
				partners:{
					'全部':[
						require('@/assets/imgs/pc/info/partner1.png'),
						require('@/assets/imgs/pc/info/partner2.png'),
						require('@/assets/imgs/pc/info/partner3.png'),
					],
					// '人寿保险':[
					// 	require('@/assets/imgs/pc/info/partner3.png'),
					// ],
					// '健康保险':[
						
					// ],
					// '养老保险':[
					// 	require('@/assets/imgs/pc/info/partner1.png'),
					// ],
					// '财产保险':[
					// 	require('@/assets/imgs/pc/info/partner2.png'),
					// ]
				}
			}
		},
		methods:{
		},
		created(){
			this.curIndex = this.sectionIndex
			this.curItem = this.partners[this.curKey]
		},
		computed:{
			sectionIndex(val){
				console.log(val)
				return this.$route.params.id
			}
		},
		watch:{
			sectionIndex(val){
				this.curIndex = val
			}
		}
	}
</script>

<style lang="stylus" scoped>
.textLeft
	text-align left
.textCenter
	text-align center
.bg
	background linear-gradient(270deg, #FF6622 0%, #F8B144 100%)
.lineHeight
	line-height 60rem
.white
	color #fff
.black
	color #515151
.blue
	color #2E5ACC
.gray
	color #A3A3A3
.borderR
	position relative
	&:after
		content ''
		position absolute
		right 0
		margin-right -1rem
		top 17rem
		height 25rem
		width 1rem
		background-color #fff
.info
	.top
		height 320rem
		position relative
		background url("~@/assets/imgs/pc/info/top.png") 0 no-repeat
		background-size 100% 100%
		// img
			// width 100%
		.tabs
			position absolute
			left 50%
			bottom 0rem
			margin-left -600rem
			width 1200rem
			display flex
			line-height 77rem
			.tab
				flex 1
				color #515151
				text-align center
				font-size 24rem
				inline-height 33rem
				background rgba(255,255,255,0.6)
				border-radius 2rem
				position relative
				&:last-child
					&:after
						border none
				&:after
					content ''
					position absolute
					border-right 2rem solid #fff
					width 0
					height 40rem
					font-size 0
					right -2rem
					bottom 18.5rem
				&.cur
					background-image linear-gradient(311deg, #FF6622 0%, #F8B144 100%)
					color #fff
					font-weight bold
					&:after
						border none
					

	.block
		// min-height 600rem
		padding-bottom 168rem
		&.qualification
			.title
				&:after
					content '经营资质'
			.photos
				display flex
				.imgbox
					box-shadow 0 0 10rem -5rem #ccc
					width 513rem
					margin-right 20rem
					img
						width 100%
					.toPdf
						cursor pointer
						color #A3A3A3
						text-align center
						line-height 35rem
						font-size 16rem
						vertical-align middle
						span
							display inline-block
							width 35rem
							height 35rem
							border-radius 50%
							img
								width 100%

		&.parnters
			.title
				&:after
					content '合作机构'	
			.list
				border-bottom 1px solid #E6E6E7
				font-size 0
				width 1200rem
				margin-bottom 40rem
				.li
					display inline-block
					padding 11rem 0
					line-height 28rem
					font-size 20rem
					color #515151
					min-width 141rem
					text-align center
					&.cur
						color #ff6622
						background url("~@/assets/imgs/pc/contact/underline.png") center bottom no-repeat
						background-size 141rem
			.logos
				width 1200rem
				display flex
				justify-content space-between
				flex-wrap wrap
				min-height 200rem

				&:after
					content ''
					width 340rem
					height 0
					font-size 0
				.logo
					flex 0 0 340rem
					height 158rem
					img
						width 100%
		&.internet
			.title
				&:after
					content '互联网保险'
			.content
				width 1200rem
				.title1
					font-size 20rem
					line-height 28rem
					padding-left 29rem
					position relative
					margin-bottom 25rem
					&:after
						content ''
						position absolute
						left 4rem
						top 50%
						margin-top -9rem
						width 9rem
						height 9rem 
						border 2rem solid #f8b044
						border-radius 50%
				.desc
					line-height 24rem
					font-size 14rem
					margin-bottom 60rem
					padding-left 10rem
					position relative
					&:after
						content '*'
						position absolute
						left 0
						top 4rem
						line-height 24rem
						font-size 20rem
						color #E54141
						
				.net
					display flex
					>.left
						flex 1
					>.right 
						flex 1
					>.center
						flex 1
					&.block1
						margin-bottom 20rem
						.right 
							border 1rem solid #E6E6E7
							border-left none
				.table
					margin-bottom 20rem
					&.table3
						.line
							>div
								&:nth-child(2)
									border-right 1px solid #E6E6E7
					.line
						display flex
						border 1px solid #E6E6E7
						border-top none
						>div
							padding-left 20rem
							flex 1
							line-height 60rem
							font-size 16rem
							&:first-child
								border-right 1px solid #E6E6E7
		&.product
			.title
				&:after
					content '产品披露'
@media(max-width: 999px)
	.lineHeight
		line-height 28px
	.borderR
		&:after
			content ''
			position absolute
			right 0
			margin-right 0
			top 8px
			height 12px
			width 1px
	.info
		.top
			background url("~@/assets/imgs/mobile/info/top.png") 0 no-repeat
			background-size 100%
			height 100px
			.tabs
				display none
		.block
			// min-height 300px
			padding-bottom 0
			&.qualification
				.title
					&:after
						content '经营资质'
				.photos
					display flex
					.imgbox
						width 171px
						margin-right 14px
						box-shadow 0 0 10px -5px #ccc
						img
							width 100%
						.toPdf
							cursor pointer
							color #A3A3A3
							text-align center
							line-height 16px
							font-size 11px
							vertical-align middle
							span
								display inline-block
								width 16px
								height 16px
								border-radius 50%
								img
									width 100%	
			&.parnters
				
				.logos
					width auto
					min-height 200px
					padding-right 17px
					&:after
						content ''
						width 340rem
						height 0
						font-size 0
					.logo
						flex 0 0 102px
						height 45px
						img
							width 100%		
			&.internet
				.content
					width auto
					padding-right 17px
					.title1
						font-size 14px
						line-height 20px
						padding-left 18px
						position relative
						margin-bottom 17px
						&:after
							content ''
							position absolute
							left 4px
							top 50%
							margin-top -4px
							width 4px
							height 4px 
							border 1px solid #f8b044
							border-radius 50%
					.desc
						line-height 16px
						font-size 11px
						margin-bottom 24px
						padding-left 8px
						position relative
						&:after
							content '*'
							position absolute
							left 0
							top 4px
							line-height 12px
							font-size 12px
							color #E54141
							
					.net
						border-radius 4px 4px 0 0
						overflow hidden
						display flex
						font-size 12px
						&.mTable
							>.left
								flex 0 0 36%
							>.right 
								flex 0 0 33%
							>.center
								flex 0 0 31%
						>.left
							flex 1
						>.right 
							flex 1
						>.center
							flex 1
						&.block1
							margin-bottom 20px
							.right 
								border 1px solid #E6E6E7
								border-left none
								
					.table
						margin-bottom 20px
						&.table3
							.line
								>.left
									flex 0 0 36%
								>.right 
									flex 0 0 33%
								>.center
									flex 0 0 31%
									
						.line
							display flex
							border 1px solid #E6E6E7
							border-top none
							>div
								text-align center
								padding 24px 10px
								flex 1
								line-height 17px
								font-size 12px
								&.right
									text-align left
									position relative
									a
										word-break break-all
								&:first-child
									border-right 1px solid #E6E6E7			
</style>