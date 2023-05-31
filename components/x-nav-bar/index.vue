<template>
	<view class="nav-bar" :style="{ paddingTop: top+'px' }">
		<view class="nav-content">
			<slot>标题</slot>
		</view>
	</view>
</template>

<script setup>
	const info = uni.getSystemInfoSync()
	const { top, bottom } = info.safeAreaInsets
</script>

<style lang="scss">
	.nav-bar {
		position: sticky;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 88rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: $uni-nav-bar-bg;
		color: $uni-font-color;
		border-bottom: 1rpx solid $uni-border-color;
	}
</style>