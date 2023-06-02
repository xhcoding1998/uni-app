<template>
	<view class="content">
		<x-nav-bar ref="navComRef">
			首页
		</x-nav-bar>
		
		<x-scroll :scrollViewConfig="scrollViewConfig">
			<view
				class="view" 
				:style="{	height: `calc(100vh - ${ calcHeight }px)` }">
				<view class="swiper-banner">
					
				</view>
				<view class="tab-list">
					<view 
						class="tab-item"
						v-for="(item, idx) in 8">
						<view class="tab-content">
							
						</view>
					</view>
				</view>
				<view class="pdc-list">
					<view 
						class="pdc-item"
						v-for="(item, idx) in 20"
						@click="toDetail">
						<img class="pdc-img" src="" alt="">
						<view class="pdc-info">
							
						</view>
					</view>
				</view>
			</view>
		</x-scroll>
		<x-tab-bar ref="tabComRef"/>
	</view>
</template>

<script setup>
	import { computed, onMounted, reactive, ref } from 'vue'
	import { useScrollConfig, useCalcScrollHeight } from '@/hooks';
	const info = uni.getSystemInfoSync()
	const { top, bottom } = info.safeAreaInsets
	
	const scrollViewConfig = useScrollConfig({
		'scroll-y': true,
		'refresher-enabled': true,
		'lower-threshold': 100,
		refresherrefresh: (e) => {
			scrollViewConfig['refresher-triggered'] = true
			setTimeout(() => {
				scrollViewConfig['refresher-triggered'] = false
			}, 3000)
		},
		scrolltolower: (e) => {
			console.log('距离底部小于100px')
		}
	})
	
	const navComRef = ref(null), tabComRef = ref(null)
	const { calcHeight } = useCalcScrollHeight({ navComRef, tabComRef })
	
	const toDetail = () => {
		uni.navigateTo({
			url: '/pages/pdc-detail/index'
		})
	}
</script>

<style scoped lang="scss">
	.content {
		height: 100vh;
		overflow: hidden;
		background: $uni-body-bg;
		.view {
			width: 100%;
			padding: $uni-3-rpx;
			box-sizing: border-box;
			.swiper-banner {
				width: 100%;
				height: 360rpx;
				border-radius: $uni-2-rpx;
				background: $uni-box-bg;
			}
			.tab-list {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(120rpx, 1fr));
				gap: $uni-2-rpx $uni-4-rpx;
				padding: $uni-3-rpx 0;
				.tab-item {
					width: 100%;
					height: $uni-8-rpx;
					border-radius: $uni-2-rpx;
					margin: 0 auto;
					background: $uni-box-bg;
				}
			}
			.pdc-list {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(220rpx, 1fr));
				gap: $uni-4-rpx $uni-2-rpx;
				padding-bottom: $uni-4-rpx;
				.pdc-item {
					width: 100%;
					height: auto;
					border-radius: $uni-2-rpx;
					margin: 0 auto;
					background: $uni-box-bg;
					padding: $uni-2-rpx;
					box-sizing: border-box;
					.pdc-img {
						width: 100%;
						height: 300rpx;
						border-radius: $uni-2-rpx;
						background: $uni-box-bg;
					}
					.pdc-info {
						height: 100rpx;
					}
				}
			}
		}
	}
</style>
