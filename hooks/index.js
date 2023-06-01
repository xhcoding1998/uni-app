import { reactive, ref, computed, onMounted } from 'vue'
export const useScrollConfig = (config = {}) => {
	return reactive({
		'scroll-y': config['scroll-y'] || false,
		'refresher-enabled': config['refresher-enabled'] || false,
		'lower-threshold': config['lower-threshold'] || 0,
		refresherrefresh: config['refresherrefresh'] || (() => {}),
		scrolltolower: config['scrolltolower'] || (() => {}),
	})
}

export const useCalcScrollHeight = ({ navComRef, tabComRef }) => {
	const info = uni.getSystemInfoSync()
	const { top, bottom } = info.safeAreaInsets
	
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
	return {
		calcHeight
	}
}