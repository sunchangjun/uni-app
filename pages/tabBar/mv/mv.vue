<template>
	<view class="global">
		<view class="title">
			<text class="hello-text">标题:mv</text>
		</view>
		<view class="body">
			 <text>内容区</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.global{
		width: 100%;
	
	
	}
	.title{
		height: 15%;
		color: #ff007f;
		font-size:75rpx;
		font-family:'Courier New', Courier, monospace;
		text-align:center;
		margin-top:auto;
		
		background-color:#4CD964;
	}
	.body{
		height: 85%;
		color: #ffff00;
		background-color:#000000;
			font-size:45rpx;
		
	}

</style>
