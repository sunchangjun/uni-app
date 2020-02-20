<template>
	<view class="global">
		<view class="title">
			<text class="title">热门推荐 </text>
		</view>
		<view class="body">
			<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
				<view class="uni-panel-h" :class="item.open ? 'uni-panel-h-on' : ''" @click="triggerCollapse(index)">
					<text class="uni-panel-text">{{item.name}}</text>
					<text class="uni-panel-icon uni-icon" :class="item.open ? 'uni-panel-icon-on' : ''">&#xe581;</text>
				</view>
				<view class="uni-panel-c" v-if="item.open">
					<view class="uni-navigate-item" :data-rid="item.rid" v-for="(item2,key) in item.pages" :key="key" @click="goDetailPage(item2)">
						<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
						<text class="uni-navigate-icon uni-icon">&#xe470;</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		uniBadge
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				list: [{
					id: 'view',
					name: '歌单推荐',
					open: false,
					pages: [{
						name: '欧美歌单',
						url: 'occident_diss',
						rid: 11
					}, {
						name: '日韩歌单',
						url: 'JapanAndSouthKorea_diss'
					}]
				}, {
					id: 'mv',
					name: 'MV推荐',
					open: false,
					pages: ['大陆', '港台', '欧美']
				}, {
					id: 'song',
					name: '歌曲推荐',
					open: false,
					pages: ['大陆', '港台', '欧美']
				}]
			}
		},
		methods: {
			goPay(index, sid) {
			  this.$router.push({
			    path: '/payment',
			    query: {
			      tit: index,
			      price: this.cost[index].price,
			      sid: sid,
			    }
			  })},
			triggerCollapse(e) {
				console.log(e);
				console.log("56:" + JSON.stringify(this.list[e].pages));
				if (!this.list[e].pages) {
					this.goDetailPage(this.list[e]);
					return;
				}
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[e].open;
					} else {
						this.list[i].open = false;
					}
				}
			},
			goDetailPage(e) {
				console.log(e);
				let data_rid = e.rid;
				 var navData = JSON.stringify(e.id); 
				let url = !e.url.indexOf('tabBar') ? e.url : '/pages/recommend/' + e.url + '/' + e.url+"?rid="+data_rid+"&type=2";
				console.log(url);
				// if (this.navigateFlag) {
				// 	return;
				// }
				this.navigateFlag = true;
				if (typeof url === 'string') {
					console.log('跳转页面' + url)
					uni.navigateTo({
						url: url
					})
				} else {
					uni.navigateTo({
						url: e.url
					})
				}
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200)
			}

		}
	}
</script>

<style>
	.global {
		width: 100%;


	}

	.title {
		height: 15%;
		color: #55aaff;
		font-size: 75upx;
		font-family: 'Courier New', Courier, monospace;
		text-align: center;
		margin-top: auto;
		background-color: #ffffff;
	}

	.body {
		height: 1000rpx;
		color: #55ffff;
		font-size: 45upx;
		flex-direction: row;
		margin: 10upx;
		padding: 12upx;
		border: 10upx;
		background-image:url('/static/kdwlll.jpg');
	}

	.uni-panel-text {
		flex: 1;
		text-align: center;
		color: #000000;
		font-size: 50px;
		font-weight: normal;
		margin:20px 0px 20px 40px;
	}
	.uni-panel-c{
		margin:10px 5px 15px 60px;
	}
	.uni-navigate-text{
		font-size: 35upx;
	}
</style>
