<template>
	<view class="content">
		<x-nav-bar ref="navComRef">
			分类
		</x-nav-bar>
		
		<view
			class="view">
			<view
				class="left-tab-list">
				<x-scroll :scrollViewConfig="scrollViewConfig">
					<view :style="{	height: `calc(100vh - ${ calcHeight }px)` }">
						<view class="left-tab-content">
							<view
								class="left-tab-item"
								v-for="(item, idx) in 20">
							
							</view>
						</view>
					</view>
				</x-scroll>
			</view>
			<view class="right-pdc-list">
				<x-scroll
				 :scrollViewConfig="scrollViewConfig">
					<view 
						:style="{	height: `calc(100vh - ${ calcHeight }px)` }">
						<view class="right-pdc-content">
							<view
								class="right-pdc-item"
								v-for="(item, idx) in 100">
								{{ calcHeight }}
							</view>
						</view>
					</view>
				</x-scroll>
			</view>
		</view>
		<x-tab-bar ref="tabComRef"/>
	</view>
</template>

<script setup>
	import { computed, onMounted, reactive, ref } from 'vue'
	import { useScrollConfig, useCalcScrollHeight } from '@/hooks';
	
	const scrollViewConfig = useScrollConfig({
		'scroll-y': true
	})

	const navComRef = ref(null), tabComRef = ref(null)
	const { calcHeight } = useCalcScrollHeight({ navComRef, tabComRef })
</script>

<style scoped lang="scss">
	.content {
		height: 100vh;
		overflow: hidden;
		background: $uni-body-bg;
		.view {
			width: 100%;
			display: flex;
			
			.left-tab-list {
				width: auto;
				height: 100%;
				
				.left-tab-content {
					display: grid;
					gap: $uni-2-rpx;
					grid-template-columns: repeat(1, 1fr);
					border-right: 1px solid $uni-border-color;
					padding: $uni-3-rpx;
					box-sizing: border-box;
					.left-tab-item {
						width: $uni-9-rpx;
						height:$uni-9-rpx;
						border-radius: $uni-2-rpx;
						background: $uni-box-bg;
					}
				}
			}
			.right-pdc-list {
				flex: 1;
				height: 100%;
				.right-pdc-content {
					width: 100%;
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(180rpx, 1fr));
					gap: $uni-3-rpx;
					padding: $uni-3-rpx $uni-3-rpx $uni-2-rpx $uni-3-rpx;
					box-sizing: border-box;
					.right-pdc-item {
						background: $uni-box-bg;
						height: 150rpx;
						border-radius: $uni-2-rpx;
					}
				}
			}
		}
	}
</style>
