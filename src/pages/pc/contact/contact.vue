<template>
	<div class="contact">
		<div class="top"></div>
		
		<div class="block branches">
			<div class="title">BRANCHES</div>
			<div class="desc">公司自2016年8月成立以来，先后在北京、上海、厦门、江苏、山东等地设立了5家省级分支机构。</div>
			<div class="list">
				<div class="li" :class="curItem.province == key?'cur':''" v-for="(item,key) in branches" @click.stop="changeBranch(key)">{{ key }}
				</div>
			</div>
			<div class="info">
				<div class="company">{{ curItem.company}}</div>
				<div class="text address">{{ curItem.address}}</div>
				<div v-if="curItem.tel" class="text tel">{{ curItem.tel}}</div>
				<div v-if="curItem.postcode" class="text postcode">{{ curItem.postcode}}</div>
			</div>
			<div class="map" id="container">
				
			</div>
		</div>
		<div class="block service">
			<div class="title">CUSTOMER SERVICE</div>
			<div class="desc">全国统一客服电话：<span>4008015880</span></div>
			<div class="list">
				<div class="li">
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
				branches:{
					'辽宁':{
						province:'辽宁',
						company:'易康吉保险经纪有限责任公司',
						address:"辽宁省沈阳市铁西区北二中路 18 号B座502室",
						tel:"024-22559688",
						postcode:"110077",
						position:[123.373912,41.817595]
					},
					'北京':{
						province:'北京',
						company:'易康吉保险经纪有限责任公司北京分公司',
						address:"北京市朝阳区朝阳公园南路10号院骏豪中央公园广场1号楼1704层",
						tel:"010-53519272",
						postcode:"100125",
						position:[116.484137,39.938943]
					},
					'上海':{
						province:'上海',
						company:'易康吉保险经纪有限责任公司上海分公司',
						address:"上海市浦东新区银城中路68号5楼",
						tel:"",
						postcode:"200335",
						position:[121.513273,31.246829]
					},
					'江苏':{
						province:'江苏',
						company:'易康吉保险经纪有限责任公司江苏分公司',
						address:"苏州市姑苏区络香路2号3号楼3002室",
						tel:"0512-67224802",
						postcode:"215004",
						position:[120.586475,31.303787]
					},
					'厦门':{
						province:'厦门',
						company:'易康吉保险经纪有限责任公司厦门分公司',
						address:"厦门市软件园二期观日路18号202室之一",
						tel:"",
						postcode:"361008",
						position:[118.184593,24.492299]
					},
					'山东':{
						province:'山东',
						company:'易康吉保险经纪有限责任公司山东分公司',
						address:"山东省济南市槐荫区齐州路2066号阳光保险大厦20层2010室",
						tel:"0531-55539069",
						postcode:"",
						position:[116.905886,36.67902]
					},
				},
				curItem:null,
				map:null,
			}
		},
		computed:{
			branch(){
				console.log(this.$route.query.branch)
				return this.$route.query.branch||'北京'
			}
		},
		created(){
			this.curItem = this.branches[this.branch]
			console.log(this.branch,this.curItem)
			this.loadScript(()=>{
				let timer = setInterval(()=>{
					console.log(BMapGL)
					if(window.BMapGL){
						clearInterval(timer)
						this.initMap()
					}
				},200)
			})
		},
		methods:{
			changeBranch(key){
				this.curItem=this.branches[key];
				this.initMap()
			},
			initMap(){
				this.map && this.map.removeEventListener('click')
				var map = this.map =  new BMapGL.Map('container'); // 创建Map实例
				var point = new BMapGL.Point(...this.curItem.position);   
				var marker = new BMapGL.Marker(point);        // 创建标注   
				map.addOverlay(marker); 
				map.centerAndZoom(point, 18); // 初始化地图,设置中心点坐标和地图级别
				map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
				map.addEventListener('click', (e)=> {
					var opts = {
					    width: 250,     // 信息窗口宽度
					    height: 100,    // 信息窗口高度
					    title: this.curItem.company  // 信息窗口标题
					}
					var infoWindow = new BMapGL.InfoWindow(`地址：${this.curItem.address}`, opts);  // 创建信息窗口对象
					map.openInfoWindow(infoWindow, point); 
			    });
			},
			loadScript(cb) { 
			  let script = document.createElement("script");
			  script.onload=()=>{
			  	cb&&cb()	
			  }
			  script.src = "https://api.map.baidu.com/api?v=1.0&type=webgl&ak=wfDySRNPfkguB3KbgGEdxNWRyXo0biQj&callback=initialize"
			  document.body.appendChild(script); 
			} 
			 
		}

	}
</script>

<style lang="stylus" scoped>
	
.contact
	.top
		height 320rem
		background url("~@/assets/imgs/pc/contact/top.png") 0 no-repeat
		background-size 100%
	.block
		&.branches
			padding-bottom 82rem
			background url("~@/assets/imgs/pc/contact/branches.png") 0 bottom no-repeat
			background-size 100%
			.title
				&:after
					content '分支机构'
			.desc
				font-size 16rem
				color #515151
				line-height 22rem
				margin-bottom 49rem
			.list
				border-bottom 1px solid #E6E6E7
				font-size 0
				margin-bottom 35rem
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
			.company
				font-size 20rem
				font-weight bold
				line-height 28rem
				color #5d5d5d
				margin-bottom 16rem
			.text
				padding-left 23rem
				line-height 24rem
				margin-bottom 17rem
				font-size 16rem
				color #515151
				&.address
					background url("~@/assets/imgs/pc/contact/icon-address.png") 1rem center no-repeat
					background-size 16rem
				&.tel
					background url("~@/assets/imgs/pc/contact/icon-tel.png") left center no-repeat
					background-size 18rem
				&.postcode
					background url("~@/assets/imgs/pc/contact/icon-postcode.png") left center no-repeat
					background-size 18rem
			.map
				margin-top 55rem
				width 1199rem
				height 600rem
		&.service
			padding-bottom 382rem
			background url("~@/assets/imgs/pc/contact/cus-service.png") 0 bottom no-repeat
			background-size 100%
			// &:after
			// 	content ''
			// 	position absolute
			// 	right 0
			// 	bottom 0
			// 	width 171px 
			// 	height 149px
			// 	box-shadow 0 0 40px 30px inset #fff
			// 	background url("~@/assets/imgs/pc/contact/cus-service.png") 0 no-repeat
			// 	background-size 100%
			.title
				&:after
					content '客服'
			.desc
				padding-left 29rem
				background url("~@/assets/imgs/pc/contact/icon-tel.png") 0 center no-repeat
				background-size 19rem
				font-size 16rem
				color #515151
				line-height 22rem
				span
					color #ff6622

@media(max-width: 999px)
	.contact
		.top
			height 100px
			background url("~@/assets/imgs/mobile/contact/top.png") 0 no-repeat
			background-size 100%
		.block
			padding 0 15px
			&.branches
				padding-bottom 31px
				background url("~@/assets/imgs/mobile/contact/branches.png") 0 bottom no-repeat
				background-size 100%
				.title
					&:after
						content '分支机构'
				.desc
					font-size 12px
					color #515151
					line-height 17px
					margin-bottom 25px
				.list
					border-bottom 1px solid #E6E6E7
					font-size 0
					display flex
					margin-bottom 17px
					.li
						flex  1
						padding 0 0 6px
						line-height 17px
						font-size 12px
						min-width 20px
						&.cur
							background url("~@/assets/imgs/pc/contact/underline.png") center bottom no-repeat
							background-size 100%
				.company
					font-size 12px
					line-height 17px
					margin-bottom 12px
				.text
					transform scale(0.916)
					transform-origin 0 0
					padding-left 23px
					line-height 17px
					margin-bottom 9px
					font-size 12px
					&.address
						background url("~@/assets/imgs/pc/contact/icon-address.png") 1px center no-repeat
						background-size 12px
					&.tel
						background url("~@/assets/imgs/pc/contact/icon-tel.png") left center no-repeat
						background-size 13px
					&.postcode
						background url("~@/assets/imgs/pc/contact/icon-postcode.png") left center no-repeat
						background-size 13px
				.map
					margin-top 27px
					width auto
					height 300px
					>>> .BMap_bubble_title
						font-size 12px
					>>> .BMap_bubble_center
							.BMap_bubble_content
								font-size 12px
			&.service
				padding-top 31px
				padding-bottom 149px
				background #fff
				position relative
				&:after
					content ''
					position absolute
					right 0
					bottom 0
					width 171px 
					height 149px
					box-shadow 0 0 40px 30px inset #fff
					background url("~@/assets/imgs/mobile/contact/cus-service.png") 0 no-repeat
					background-size 100%
				.title
					&:after
						content '客服'
				.desc
					padding-left 29px
					background url("~@/assets/imgs/pc/contact/icon-tel.png") 0 center no-repeat
					background-size 19px
					font-size 16px
					color #515151
					line-height 22px
					span
						color #ff6622
</style>