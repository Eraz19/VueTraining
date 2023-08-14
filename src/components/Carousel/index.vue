<script setup lang="ts" generic="T">
	import { ref, watchEffect, type Ref } from "vue";

	import LeftArrow from "../Icons/LeftArrow.vue";
	import RightArrow from "../Icons/RightArrow.vue";
	import type { T_CarouselProps } from "./types";

	const props = defineProps<T_CarouselProps>();

	const carouselNames : Ref<string[]> = ref(props.elementsNames);

	watchEffect(() => { carouselNames.value = props.elementsNames; });

	function ScrollLeft() : void
	{
		const firstElement : string|undefined = carouselNames.value.shift();

		if (firstElement)
			carouselNames.value.push(firstElement);
	};
	function ScrollRight() : void
	{
		const lastElement : string|undefined = carouselNames.value.pop();

		if (lastElement)
			carouselNames.value.unshift(lastElement);
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
		<div :class="$style.wrapper">
			<slot v-for="name in carouselNames" :name=name></slot>
		</div>
	</div>
</template>

<style module lang="scss">
	.container
	{
		--gap       : v-bind('props.gap + "px"');
		--numElement: v-bind(props.numberElement);

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
	/*.inner
	{
		box-sizing: border-box;
		border    : rgb(217, 255, 0) solid 2px;
		//width     : 100%;
		height    : 80%;
		white-space: "nowrap";
	};*/
	.wrapper
	{
		transition: all 2s;
		box-sizing       : border-box;
		border           : blue solid 2px;
		width            : 100%;
		height           : 80%;
		margin           : 0 var(--gap);
		display          : grid;
		grid-auto-flow   : column;
		grid-auto-columns: calc( (100% / var(--numElement)) - (var(--gap) * ((var(--numElement) - 1) / var(--numElement)) ));
		column-gap       : var(--gap);
	};
</style>

