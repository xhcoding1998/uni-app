<template>
	<view class="content">
		<x-nav-bar ref="navComRef">
			首页
		</x-nav-bar>
		
		<x-scroll :scrollViewConfig="scrollViewConfig">
			<view
				class="view" 
				:style="{	height: `calc(100vh - ${ calcHeight }px)` }">
				<view class="main-card">
					<view class="center-card user-center">
						<view class="user-info">
							<view class="user-detail">
								<image class="avtar"></image>
								<view class="name">
									<view class="title">
										请先登录
									</view>
								</view>
							</view>
							<view class="code-view">
								
							</view>
						</view>
					</view>
					<view class="center-card order-center">
						<view class="center-header">
							<view class="title">
								我的订单
							</view>
							<view class="tip">
								全部订单
							</view>
						</view>
						<view class="target-list">
							<view 
								class="target-item"
								v-for="(item, idx) in orderTargets">
								<uni-icons 
									custom-prefix="iconfont" 
									:type="item.icon" size="25"/>
								<view class="target-name">
									{{ item.name }}
								</view>
							</view>
						</view>
					</view>
					<view class="center-card service-center">
						<view class="center-header">
							<view class="title">
								我的服务
							</view>
						</view>
						<view class="target-list">
							<view 
								class="target-item"
								v-for="(item, idx) in serviceTargets">
								<uni-icons 
									custom-prefix="iconfont" 
									:type="item.icon" size="25"/>
								<view class="target-name">
									{{ item.name }}
								</view>
							</view>
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
	
	const scrollViewConfig = useScrollConfig({ 'scroll-y': true })
	
	const navComRef = ref(null), tabComRef = ref(null)
	const { calcHeight } = useCalcScrollHeight({ navComRef, tabComRef })
	
	const orderTargets = [
		{
			icon: 'icon-daifahuo',
			name: '待付款'
		},
		{
			icon: 'icon-daifukuan',
			name: '待发货'
		},
		{
			icon: 'icon-daishouhuo',
			name: '待收获'
		},
		{
			icon: 'icon-jisutuikuan',
			name: '退款'
		}
	]
	
	const serviceTargets = [
		{
			icon: 'icon-kefu',
			name: '客服'
		},
		{
			icon: 'icon-shezhi',
			name: '设置'
		},
		{
			icon: 'icon-dizhiguanli',
			name: '地址管理'
		},
		{
			icon: 'icon-duihuanma',
			name: '兑换码'
		},
		{
			icon: 'icon-choujiang',
			name: '抽奖'
		},
		{
			icon: 'icon-jifen',
			name: '积分'
		}
	]
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
			.main-card {
				display: grid;
				grid-template-columns: repeat(1, 1fr);
				gap: $uni-3-rpx;
				.center-card {
					padding: $uni-2-rpx;
					background: #fff;
					border-radius: $uni-2-rpx;
					
					.center-header {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.title {
							font-size: $uni-h3-size;
							font-weight: bold;
						}
						.tip {
							font-size: $uni-font-size;
							color: $uni-tip-color;
						}
					}
					.target-list {
						display: grid;
						grid-template-columns: repeat(4, 1fr);
						gap: $uni-6-rpx $uni-3-rpx;
						padding: $uni-3-rpx;
						.target-item {
							text-align: center;
							margin: 0 auto;
							.target-name {
								font-size: $uni-font-size;
								margin-top: $uni-1-rpx;
							}
						}
					}
				}
				.user-center {
					.user-info {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.user-detail {
							display: flex;
							align-items: center;
							.avtar {
								width: 120rpx;
								height: 120rpx;
								border-radius: 50%;
								background: $uni-border-color;
							}
							.name {
								margin-left: $uni-2-rpx;
								.title {
									font-size: $uni-h2-size;
									font-weight: bold;
								}
							}
						}
						.code-view {
							width: 80rpx;
							height: 80rpx;
							background: $uni-border-color;
							border-radius: $uni-2-rpx;
						}
					}
				}
				.order-center {
					
				}
				.service-center {
					
				}
			}
		}
	}
</style>
