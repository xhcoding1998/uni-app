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
					<view class="detail-card">
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
						<view class="detail-info">
							<view class="tag">
								限时秒杀
							</view>
							<text>【618新品】全新狗蛋10个装，如果吃不饱你可以买两份</text>
							<text class="tip">一经售出，概不退款</text>
						</view>
					</view>
					<view class="selected-card">
						<view class="selected-info">
							<view class="selected-left">
								<span class="tip">已选</span>
								<span class="desc">蜜桃</span>
							</view>
							<view class="re-select">
								<uni-icons type="forward" size="25"></uni-icons>
							</view>
						</view>
						<view class="selected-info">
							<view class="selected-left">
								<span class="tip">保障</span>
								<span class="desc">48小时内发货 品质无忧 </span>
							</view>
						</view>
					</view>
					<view class="graphic-card">
						<span class="title">图文详情</span>
						<view class="img-list">
							<view 
								class="img-item"
								v-for="(item, idx) in 10">
								图片{{ idx }}
							</view>
						</view>
					</view>
				</view>
			</view>
		</x-scroll>
		<x-goods-nav/>
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
				padding: 0 $uni-1-rpx $uni-8-rpx $uni-1-rpx;
				display: grid;
				grid-template-columns: repeat(1, 1fr);
				gap: $uni-2-rpx;
				.detail-swiper {
					width: 100%;
					height: 500rpx;
					background: $uni-box-bg;
				}
				.detail-card {
					border-radius: $uni-3-rpx;
					background: $uni-box-bg;
					overflow: hidden;
					.price-info {
						padding: $uni-3-rpx;
						background: $uni-price-bg;
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
							color: $uni-body-bg;
						}
					}
					.detail-info {
						padding: $uni-2-rpx $uni-4-rpx;
						font-weight: bold;
						font-size: $uni-h3-size;
						.tag {
							display: inline-block;
							width: auto;
							padding: $uni-3-rpx $uni-1-rpx;
							background: #FFE6D9;
							color: #FF4242;
							border-radius: $uni-2-rpx;
							margin-right: $uni-1-rpx;
						}
						.tip {
							display: block;
							margin-top: $uni-2-rpx;
							font-weight: normal;
							font-size: $uni-3-rpx;
							color: $uni-tip-color;
						}
					}
				}
				.selected-card {
					padding: $uni-3-rpx;
					border-radius: $uni-3-rpx;
					background: $uni-box-bg;
					overflow: hidden;
					display: grid;
					grid-template-columns: repeat(1, 1fr);
					gap: $uni-5-rpx;
					.selected-info {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.selected-left {
							display: flex;
							align-items: flex-start;
							font-size: $uni-font-size;
							.tip {
								display: block;
								font-weight: normal;
								color: $uni-tip-color;
								margin-right: $uni-2-rpx;
							}
							.desc {
								display: block;
								flex: 1;
							}
						}
						.re-select {
							width: auto;
						}
					}
				}
				.graphic-card {
					padding: $uni-3-rpx;
					border-radius: $uni-3-rpx;
					background: $uni-box-bg;
					overflow: hidden;
					.title {
						display: block;
						font-size: $uni-font-size;
						margin-bottom: $uni-3-rpx;
					}
					.img-list {
						display: grid;
						grid-template-columns: repeat(1, 1fr);
						.img-item {
							width: 100%;
							height: 400rpx;
						}
					}
				}
			}
		}
	}
</style>
