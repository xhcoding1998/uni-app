<template>
	<view class="content">
		<x-nav-bar ref="navComRef">
			分类
		</x-nav-bar>
		
		<x-scroll :scrollViewConfig="scrollViewConfig">
			<view
				class="view" 
				:style="{ 
					height: `calc(100vh - ${ calcHeight }px)` 
				}">
				<view v-for="i in 100">{{ calcHeight }}</view>
			</view>
		</x-scroll>
		<x-tab-bar ref="tabComRef"/>
	</view>
</template>

<script setup>
	import { computed, onMounted, reactive, ref } from 'vue'
	const info = uni.getSystemInfoSync()
	const { top, bottom } = info.safeAreaInsets
	
	const scrollViewConfig = reactive({
		'scroll-y': true,
		'refresher-enabled': true,
		'lower-threshold': false,
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
	
	const navComRef = ref(null)
	const tabComRef = ref(null)
	
	let navPosition = ref({})
	let tabPosition = ref({})
	
	onMounted(() => {
		const query = uni.createSelectorQuery().in(navComRef.value)
		query.select('.nav-bar').boundingClientRect(data => {
			navPosition.value = data
		}).exec();
		
		const query2 = uni.createSelectorQuery().in(tabComRef.value)
		query2.select('.footer-bar').boundingClientRect(data => {
			tabPosition.value = data
		}).exec();
	})
	
	const calcHeight = computed(() => {
		return navPosition.value.height + tabPosition.value.height
	})
	
	console.log(calcHeight)
	
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
