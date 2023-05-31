<template>
	<view class="content">
		<x-nav-bar/>
		
		<x-scroll :scrollViewConfig="scrollViewConfig">
			<view
				class="view" 
				:style="{ 
					height: `calc(100vh - ${ top + bottom + 47*2 }px)` 
				}">
				<view v-for="i in 100">1</view>
			</view>
		</x-scroll>
		<x-tab-bar/>
	</view>
</template>

<script setup>
	import { reactive, ref } from 'vue'
	const info = uni.getSystemInfoSync()
	const { top, bottom } = info.safeAreaInsets
	
	const scrollViewConfig = reactive({
		'scroll-y': true,
		'refresher-enabled': true,
		'lower-threshold': false,
		refresherrefresh: (e) => {
			scrollViewConfig['refresher-triggered'] = true
			setTimeout(() => {
				scrollViewConfig['refresher-triggered'] = false
			}, 3000)
		},
		scrolltolower: (e) => {
			console.log('3213123123123')
		}
	})
</script>

<style scoped lang="scss">
	.content {
		height: 100vh;
		overflow: hidden;
		.view {
			width: 100%;
		}
	}
</style>
