<template>
	<view class="global">

		<view class="body">
			<button type="primary" @click="request_diss">发起请求（Callback）</button>
			<view class="content">
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
						<view class="uni-list-cell-navigate uni-navigate-right">
							{{ccc}}
							<button type="primary" @click="request_diss"> {{111}} </button>

						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var data_rid= null;
	export default {
		onLaunch: function() {
			console.log('App 初始化完成时触发')
		},
		
		onHide: function() {
			console.log('App 从前台进入后台')
		},
		onError: function() {
			console.error('App Error')
		},
		onUniNViewMessage: function() {
			console.log('App 页面发送的数据进行监听')
		},
		onLoad :function(options) {
		            //options可以接到index 传过来的值
					  data_rid=options.rid
		        },
		onShow: function() {
			console.log('App 启动，或从后台进入前台显示')
		},
		mounted: function() {
			console.log('App mounted加载时调用')
			//this.request_diss();
		},
		updated: function () {
			console.log("updated "+data_rid);
		},
		props: ['yourAttribute'],
		data() {
			return {
				list: [1, 2, 3],
				ccc: null
			}
		},
	
		methods: {
			sendRequest(mode) {
				
			},
			request_diss() {
				console.log(data_rid);
				uni.request({
					url: "http://47.98.153.144:9999/sun/uni/get_data",
					dataType: 'json',
					method: 'POST',
					data: {
						userName: 'scj',
						password: '111'

					},
					success: (res) => {
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						uni.showModal({
							title: '配置信息',
							content: '测试模态框',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}

						})
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete: () => {
						console.log('request end');
					}
				});
			}

		}
	}
</script>

<style>
	.global {
		height: auto;
	}

	.title {
		height: 20%;
		background-color: #55FFFF;
		color: #F8F8F8;
		text-align: center;
		font-size: 75rpx;
	}
</style>
