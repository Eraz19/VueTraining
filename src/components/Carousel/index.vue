<script setup lang="ts" generic="T">
	import { ref, watchEffect, type Ref } from "vue";

	import LeftArrow from "../Icons/LeftArrow.vue";
	import RightArrow from "../Icons/RightArrow.vue";
	import type { T_CarouselProps } from "./types";

	const props = defineProps<T_CarouselProps>();

	const carouselNames : Ref<string[]> = ref(props.elementsNames);
	const scrollingSide : Ref<"left"|"right"|undefined> = ref();

	watchEffect(() => { carouselNames.value = props.elementsNames; });

	function ScrollLeft() : void
	{
		scrollingSide.value = "left";
		/*const firstElement : string|undefined = carouselNames.value.shift();

		if (firstElement)
			carouselNames.value.push(firstElement);*/
	};
	function ScrollRight() : void
	{
		scrollingSide.value = "right";
		/*const lastElement : string|undefined = carouselNames.value.pop();

		if (lastElement)
			carouselNames.value.unshift(lastElement);*/
	};
</script>

<template>
	<div :class="$style.container">
		<LeftArrow
			:class="[$style.arrow, $style.left]"
			@click="ScrollLeft"
		/>
		<RightArrow
			:class="[$style.arrow, $style.right]"
			@click="ScrollRight"
		/>
		<div :class="$style.wrapper" ref="element">
			<div :class="[$style.inner, (scrollingSide != undefined) ? $style[scrollingSide] : undefined]">
				<slot v-for="name in carouselNames" :name=name></slot>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
	.container
	{
		--gap: v-bind('props.gap + "px"');

		position   : relative;
		height     : 100%;
		width      : 100%;
		overflow   : hidden;
		display    : flex;
		align-items: center;
	};
	.arrow
	{
		position: absolute;
		z-index: 5000;
		width: 50px;
		height: 50px;
		border-radius: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(60, 60, 60, 0.7);
		cursor: pointer;
	};
	.arrow.left  { left: 10px; };
	.arrow.right { right: 10px; };
	.wrapper
	{
		position: relative;
		box-sizing: border-box;
		border    : blue solid 2px;
		width     : 100%;
		height    : 80%;
		margin    : 0 var(--gap);
	};
	.inner
	{
		--numVisibleElement: v-bind(props.numberElement);
		--numVisibleGaps   : calc(var(--numVisibleElement) - 1);
		--totalNumOfElement: v-bind(carouselNames.length);
		--totalNumberGaps  : calc(v-bind(carouselNames.length) - 1);

		position: absolute;
		box-sizing: border-box;
		border    : rgb(217, 255, 0) solid 2px;
		width     : calc((((100% - (var(--gap) * var(--numVisibleGaps))) / var(--numVisibleElement)) * var(--totalNumOfElement)) + (var(--totalNumberGaps) * var(--gap)));
		height    : 100%;
		display   : flex;
		gap       : var(--gap);
	};
	.inner.left  { transform: translateX( calc( (-100% + (var(--totalNumberGaps) * var(--gap)) ) / var(--totalNumOfElement) - var(--gap)) ) };
	.inner.right { transform: translateX( calc( ( 100% - (var(--totalNumberGaps) * var(--gap)) ) / var(--totalNumOfElement) + var(--gap)) ) };
</style>

