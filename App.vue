<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError: function() {
			console.error('App Error')
		},
		onUniNViewMessage: function() {
			console.log('App UniNViewMessage')
		}
		
	}
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	/* icon.css - 自定义图标库 */
	@import './common/icon.css';
	/*每个页面公共css,引用公用样式 */
</style>
