<template>
	<view class="footer-bar" :style="{ paddingBottom: bottom - 15 +'px' }">
		<view class="tab-content">
			<view class="tab-item" v-for="(item, idx) in tabList" :key="item.icon">
				<uni-icons
				 :type="item.icon" size="20" 
				 :color="currentPage.route === item.path? '#007aff' : ''"
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
		{ title: '首页', icon: 'home', path: 'pages/index/index' },
		{ title: '分类', icon: 'list', path: 'pages/classification/index' },
		{ title: '购物车', icon: 'cart', path: 'pages/shoppingCart/index' },
		{ title: '我的', icon: 'person', path: 'pages/main/index' },
	]
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
			padding: 10px 0;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			.tab-item {
				text-align: center;
				.title {
					display: block;
					font-size: 12px;
				}
			}
		}
	}
</style>