<template>
	<view class="content">
		<x-nav-bar ref="navComRef">
			<view class="back" @click="toBack">
				<uni-icons type="back" size="20"></uni-icons>
			</view>
		</x-nav-bar>
		
		<x-scroll :scrollViewConfig="scrollViewConfig">
			<view
				class="view" 
				:style="{	height: `calc(100vh - ${ calcHeight }px)` }">
				<view class="detail-view">
					<view class="detail-swiper">
						
					</view>
					<view class="price-info">
						<view class="price-count">
							<view class="pay-price">
								$99.99
							</view>
							<view class="origin-price">
								￥39.99
							</view>
						</view>
						<view class="price-other">
							限时秒杀
						</view>
					</view>
				</view>
			</view>
		</x-scroll>
	</view>
</template>

<script setup>
	import { computed, onMounted, reactive, ref } from 'vue'
	import { useScrollConfig, useCalcScrollHeight } from '@/hooks';
	const info = uni.getSystemInfoSync()
	const { top, bottom } = info.safeAreaInsets
	
	const scrollViewConfig = useScrollConfig({ 'scroll-y': true })
	
	const { calcHeight } = useCalcScrollHeight()
	
	const toBack = () => {
		uni.navigateBack()
	}
</script>

<style scoped lang="scss">
	.content {
		height: 100vh;
		overflow: hidden;
		background: $uni-body-bg;
		:deep(.nav-bar) {
			position: fixed;
			padding: $uni-3-rpx;
			background: none;
			border: none;
			display: flex;
			justify-content: start;
			.back {
				padding: $uni-1-rpx;
				border-radius: 50%;
				background: $uni-box-bg;
			}
		}
		.view {
			.detail-view {
				padding: 0 $uni-3-rpx $uni-8-rpx $uni-3-rpx;
				.detail-swiper {
					width: 100%;
					height: 500rpx;
					background: $uni-box-bg;
				}
				.price-info {
					padding: $uni-3-rpx;
					background: $uni-price-bg;
					border-radius: $uni-3-rpx $uni-3-rpx 0 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.price-count {
						display: flex;
						align-items: center;
						color: #fff;
						.pay-price {
							font-size: $uni-5-rpx;
						}
						.origin-price {
							margin-left: $uni-1-rpx;
							font-size: $uni-3-rpx;
							color: $uni-body-bg;
							text-decoration: line-through
						}
					}
					.price-other {
						color: red;
					}
				}
			}
		}
	}
</style>
