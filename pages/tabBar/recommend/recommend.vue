<template>
	<view class="global">
		<view class="title">
			<text class="title">推荐详情 </text>
		</view>
		<view class="body">
			<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
				<view class="uni-panel-h" :class="item.open ? 'uni-panel-h-on' : ''" @click="triggerCollapse(index)">
					<text class="uni-panel-text">{{item.name}}</text>
					<text class="uni-panel-icon uni-icon" :class="item.open ? 'uni-panel-icon-on' : ''">&#xe581;</text>
				</view>
				<view class="uni-panel-c" v-if="item.open">
					<view class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key" @click="goDetailPage(item2)">
						<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
						<text class="uni-navigate-icon uni-icon">&#xe470;</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: 'view',
					name: '歌单推荐',
					open: false,
					pages: [{
							name: '欧美歌单',
							url: 'occident_diss'
						}, {
							name: '日韩歌单',
							url: 'JapanAndSouthKorea_diss'
						}
					]
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
			triggerCollapse(e) {
				console.log(e);			
				console.log("56:"+JSON.stringify(this.list[e].pages));
				if (!this.list[e].pages) {
					this.goDetailPage(this.list[e].url);
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
				 let url = !e.url.indexOf('tabBar') ? e.url : '/pages/recommend/' + e.url+'/'+e.url;
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
		color: #ff007f;
		font-size: 75rpx;
		font-family: 'Courier New', Courier, monospace;
		text-align: center;
		margin-top: auto;
		background-color: #55aaff;
	}

	.body {
		height: 85%;
		color: #55ffff;
		font-size: 45rpx;

	}
</style>
