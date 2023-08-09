<script setup lang="ts">
	import { ref, type Ref } from "vue";

	import type { T_AutoScrollTextProps } from "./types";

	const props = defineProps<T_AutoScrollTextProps>();

	const element = ref<HTMLDivElement>();
</script>

<template>
	<div :class="$style.container">
		<div ref="element" :class="$style.scrollingText">{{ props.text }}</div>
	</div>
</template>


<style module lang="scss">
	.container
	{
		--animationDuration: v-bind('props.duration + "s"');
		--elementHeight: v-bind('"-" + element?.clientHeight + "px"');

		position  : relative;
		width     : 100%;
		height    : 100%;
		overflow-y: hidden;
		box-sizing: border-box;
		z-index: 2000;
	};
	.scrollingText
	{
		position     : absolute;
		padding      : 5px;
		overflow-wrap: break-word;
	};
	.container:hover .scrollingText
	{
		animation: autoscroll var(--animationDuration) linear infinite;
	}
	@keyframes autoscroll
	{
		0%   { top:  100%; }
		100% { top: var(--elementHeight); }
	};
</style>
