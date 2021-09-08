<template>
	<div class="about">
		<div class="top"></div>
		<div class="block company clearfix">
			<div class="right">
				<div class="title animate__animated animate__fadeInUp">COMPANY PROFILE</div>
				<div class="desc animate__animated animate__fadeInRight">易康吉成立于2016年8月，是由易联众信息技术股份有限公司（股票代码： 300096）投资的全国性的保险经纪公司。公司注册地在辽宁省沈阳市，实缴注 册资金5000万。</div>
				<div class="desc animate__animated animate__fadeInRight"> 2017年起陆续在北京、上海、山东、厦门、江苏等地成立省级分公司，扩大了易 康吉全国服务网络。 </div>
				<div class="desc animate__animated animate__fadeInRight">2021年，公司将进一步贯彻集团公司“让天下没有难过的人生”的企业使命，紧跟 “以数字化重塑民生健康新生态”的企业愿景，本着“专注、创新、开放、协同”的 价值观，打造新型“数字化”易康吉。</div>
			</div>
			<div class="left"></div>
		</div>
		<div class="block business">
			<div class="title animate__animated animate__fadeInUp">MAIN BUSINESS</div>
			<div class="list">
				<div class="li">
					<div class="imgbox icon1">
						<img src="@/assets/imgs/pc/about/business1.png" alt="">
					</div>
					<div class="text animate__animated animate__fadeInUp">“惠民保”业务</div>
				</div>
				<div class="li">
					<div class="imgbox icon2">
						<img src="@/assets/imgs/pc/about/business2.png" alt="">
					</div>
					<div class="text animate__animated animate__fadeInUp">BBC职域开拓业务</div>
				</div>
				<div class="li">
					<div class="imgbox icon3">
						<img src="@/assets/imgs/pc/about/business3.png" alt="">
					</div>
					<div class="text animate__animated animate__fadeInUp">垂直类业务场景</div>
				</div>
			</div>
			
		</div>
		<div class="block culture">
			<div class="title">CORPORATE CULTURE</div>
			<div class="list">
				<div class="li">
					<div class="txt1">使命</div>
					<div class="txt2">让天下没有难过的人生</div>
				</div>
				<div class="li">
					<div class="txt1">愿景</div>
					<div class="txt2">以数字化重塑民生健康新生态</div>
				</div>
				<div class="li">
					<div class="txt1">价值观</div>
					<div class="txt2">专注、创新、开放、协同</div>
				</div>
				<div class="li">
					<div class="txt1">战略定位</div>
					<div class="txt2">以数据链为基础的技术与服务企业</div>
				</div>
				<div class="li">
					<div class="txt1">业务发展</div>
					<div class="txt2">一切业务数据化，一切数据业务化</div>
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
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
.about
	.top
		height 320rem
		background url("~@/assets/imgs/pc/about/top.jpg") 0 no-repeat
		background-size 100%
	.block
		&.company
			padding-left 0
			.title
				&:after
					content '公司介绍'		
			.left
				float left
				width 960rem
				margin-right 40rem
				height 573rem
				background url("~@/assets/imgs/pc/about/company.png") 0 no-repeat
				background-size 100%
			.right
				width 920rem
				float right
				.desc
					width 565rem
					font-size 16rem
					color #5d5d5d
					line-height 24rem
					margin-bottom 22rem
		&.business
			background linear-gradient(to bottom,white 0%,white 60%,#f5f5f5 60%,#f5f5f5 100%)
			padding-left 361rem
			padding-bottom 61rem
			.list
				display inline-block
				background-color #fff
				font-size 0

				.li
					width 398rem
					display inline-block
					margin-right 2rem
					&:last-child
							.text
								&:after
									width 0
					.imgbox
						position relative
						&:after
							content ''
							position absolute
							left 0
							top 0
							width 100%
							height 100%
							background-color rgba(0,0,0,0.35)
							
						&.icon1
							&:after
								background-image url("~@/assets/imgs/pc/about/icon-b1.png")
								background-position center
								background-size 150rem
								background-repeat no-repeat
						&.icon2
							&:after
								background-image url("~@/assets/imgs/pc/about/icon-b2.png")
								background-position center
								background-size 150rem
								background-repeat no-repeat
						&.icon3
							&:after
								background-image url("~@/assets/imgs/pc/about/icon-b3.png")
								background-position center
								background-size 150rem
								background-repeat no-repeat
						img
							width 100%
					.text
						height 100rem
						line-height 100rem
						text-align center
						font-size 24rem
						color #515151
						position relative
						background-color #fff
						
						&:after
							content ''
							position absolute
							right -2rem
							width 2rem
							height 50rem
							top 25rem
							background-color #e6e6e7
			.title
				&:after
					content '主营业务'				
		&.culture
			background url("~@/assets/imgs/pc/about/culture.png") left bottom no-repeat
			background-size 100%
			padding-left 361rem
			padding-bottom 61rem
			.title
				&:after
					content '企业文化'		
			.list
				.li
					padding-left 629rem
					.txt1
						line-height 33rem
						font-size 24rem
						color #ff6622
						margin-bottom 11rem
						position relative
						font-weight bold
						&:before
							content ''
							width 540rem
							height 2rem
							background-color #e6e6e7
							font-size 0
							position absolute
							left -629rem
							top 15.5rem
						&:after
							content ''
							width 0
							height 0
							font-size 0
							position absolute
							left -40rem
							top 10rem
							border-top 6rem solid transparent
							border-left 12rem solid #FF6622
							border-bottom 6rem solid transparent
					.txt2
						margin-bottom 29rem	
						font-size 	20rem
						color #5d5d5d
						line-height 28rem
@media(max-width: 999px) 	
	.about
		.top
			height 100px
			background url("~@/assets/imgs/mobile/about/top.png") 0 no-repeat
			background-size 100%
		.block
			&.company
				padding-left 0
				.left
					float none
					width auto
					margin-right 0
					width 100%
					height 349px
					background url("~@/assets/imgs/mobile/about/company.png") 0 no-repeat
					background-size 100%
				.right
					float none	
					width auto
					padding-left 15px
					.desc
						padding-right 15px
						width auto
						font-size 12px
						line-height 17px
						margin-bottom 18px
			&.business
				background #fff
				padding-left 0
				padding-bottom 0
				.title
					margin-left 15px
				.list
					display flex
					justify-content space-between

					.li
						width 124px
						margin-right 0
						&:last-child
								.text
									&:after
										width 0
						.imgbox
							height 110px
							position relative
							&:after
								content ''
								position absolute
								left 0
								top 0
								width 100%
								height 100%
								background-color rgba(0,0,0,0.35)
								
							&.icon1
								&:after
									background-image url("~@/assets/imgs/pc/about/icon-b1.png")
									background-position center
									background-size 44px
									background-repeat no-repeat
							&.icon2
								&:after
									background-image url("~@/assets/imgs/pc/about/icon-b2.png")
									background-position center
									background-size 44px
									background-repeat no-repeat
							&.icon3
								&:after
									background-image url("~@/assets/imgs/pc/about/icon-b3.png")
									background-position center
									background-size 44px
									background-repeat no-repeat
							img
								width 100%
								height 100%
						.text
							height 37px
							line-height 37px
							text-align center
							font-size 12px
							color #515151
							position relative
							background-color #fff
							
							&:after
								content ''
								position absolute
								right -1px
								width 1px
								height 22px
								top 7.5px
								background-color #e6e6e7
			&.culture
				background url("~@/assets/imgs/mobile/about/culture.png") 0 no-repeat
				background-size 100% 100% 
				padding 30px 15px 0
				padding-bottom 0px
				.title
					&:after
						content '企业文化'		
				.list
					.li
						padding-left 160px
						.txt1
							line-height 17px
							font-size 12px
							margin-bottom 4px
							&:before
								width 133px
								height 1px
								left -160px
								top 8px
							&:after
								content ''
								width 0
								height 0
								font-size 0
								position absolute
								left -16px
								top 5px
								border-top 4px solid transparent
								border-left 8px solid #FF6622
								border-bottom 4px solid transparent
						.txt2
							margin-bottom 29px	
							font-size 	12px
							color #5d5d5d
							line-height 17px
</style>