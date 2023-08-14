<script setup lang="ts">
	import { ref, type Ref, watchEffect } from "vue";

	import type { T_AutoScrollTextProps } from "./types";

	const props = defineProps<T_AutoScrollTextProps>();

	const element       : Ref<HTMLDivElement|undefined> = ref<HTMLDivElement>();
	const needScrolling : Ref<boolean> = ref<boolean>(false);
	const isScrolling   : Ref<boolean> = ref<boolean>(false);

	watchEffect(() => { isScrolling.value = props.isScrolling });
	watchEffect(() =>
	{
		const containerHeight : number = element.value?.clientHeight ?? 0;
		const textHeight      : number = element.value?.firstElementChild?.clientHeight ?? 0;
		
		if (textHeight > containerHeight) needScrolling.value = true;
		else                              needScrolling.value = false;
	});
</script>

<template>
	<div ref="element" :class="$style.container">
		<div :class="[$style['scrollingText'], (needScrolling && isScrolling) ? $style['hover'] : '' ]">
			{{ props.text }}
		</div>
	</div>
</template>

<style module lang="scss">
	.container
	{
		--animationDuration: v-bind('props.duration + "s"');
		--elementHeight    : v-bind('"-" + element?.clientHeight + "px"');

		position  : relative;
		width     : 100%;
		height    : 100%;
		overflow-y: hidden;
		box-sizing: border-box;
	};
	.scrollingText
	{
		position     : absolute;
		overflow-wrap: break-word;
	};
	.scrollingText.hover
	{
		animation: autoscroll var(--animationDuration) 1s linear infinite;
	};
	@keyframes autoscroll
	{
		0% { top: 0%; }
		49.7%
		{
			top: var(--elementHeight);
			opacity: 100%;
		}
		49.9%
		{
			top: var(--elementHeight);
			opacity: 0%;
		}
		50.1%
		{
			top: 100%;
			opacity: 0%;
		}
		50.3% { opacity: 100%; }
		100% { top: 0%; }
	};
</style>
