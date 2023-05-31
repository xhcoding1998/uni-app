<template>
	<scroll-view 
		:scroll-y="scrollViewConfig['scroll-y']" 
		:refresher-enabled="scrollViewConfig['refresher-enabled']"
		:refresher-triggered="scrollViewConfig['refresher-triggered']"
		:lower-threshold="scrollViewConfig['lower-threshold']"
		@refresherrefresh="scrollViewConfig['refresherrefresh']"
		@scrolltolower="scrollViewConfig['scrolltolower']"
	>
		<slot></slot>
	</scroll-view>
</template>

<script setup>
	import { toRef } from 'vue'
	
	const props = defineProps(['scrollViewConfig'])
	const scrollViewConfig = toRef(props, 'scrollViewConfig')
</script>

<style>
</style>