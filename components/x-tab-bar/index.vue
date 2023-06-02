<template>
	<view class="footer-bar" :style="{ paddingBottom: bottom - 15 +'px' }">
		<view class="tab-content">
			<view 
				class="tab-item" 
				v-for="(item, idx) in tabList" :key="item.icon"
				@click="navigatorTo(item)"
			>
				<uni-icons
					custom-prefix="iconfont" 
					:type="item.icon" size="25" 
					:color="'/'+currentPage.route === item.path? '#007aff' : ''"
				/>
				<span class="title">{{ item.title }}</span>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from "vue";
	const info = uni.getSystemInfoSync()
	const { top, bottom } = info.safeAreaInsets
	
	const pages = getCurrentPages()
	const currentPage = pages[pages.length-1]
	console.log(currentPage)
	const tabList = [
		{ title: '首页', icon: 'icon-shouye', path: '/pages/index/index' },
		{ title: '分类', icon: 'icon-fenlei', path: '/pages/classification/index' },
		{ title: '购物车', icon: 'icon-gouwuche', path: '/pages/shoppingCart/index' },
		{ title: '我的', icon: 'icon-wode', path: '/pages/main/index' },
	]
	const navigatorTo = (item) => {
		uni.switchTab({
			url: item.path
		})
	}
</script>

<style lang="scss">
	.footer-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: auto;
		background: $uni-tab-bar-bg;
		color: $uni-font-color;
		box-sizing: border-box;
		border-top: 1px solid $uni-border-color;
		.tab-content {
			padding: 20rpx 0;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			.tab-item {
				text-align: center;
				.title {
					display: block;
					font-size: 24rpx;
				}
			}
		}
	}
</style>