<script setup lang="ts">
	import { ref } from "vue";

	import { type T_TiltCardProps } from "./types";

	const props = defineProps<T_TiltCardProps>();

	const angle = ref<number>(props.angle);
</script>

<template>
	<div class="tiltBoxWrapper">
		<span class="tiltOver"></span>
		<span class="tiltOver"></span>
		<span class="tiltOver"></span>
		<span class="tiltOver"></span>
		<span class="tiltOver"></span>
		<span class="tiltOver"></span>
		<span class="tiltOver"></span>
		<span class="tiltOver"></span>
		<span class="tiltOver"></span>
		<slot class="tiltOver"></slot>
		<div class="tiltBox">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.tiltBoxWrapper
	{
		--anglePos: v-bind('angle + "deg"');
		--angleNeg: v-bind('"-" + angle + "deg"');

		position: relative;
		transition: all 0.6s ease-out;
		perspective: 1000px;
	};
	.tiltBox
	{
		width: 100%;
		height: 100%;
		position: relative;
		transition: all 0.6s ease-out;
		transform: rotateX(0deg) rotateY(0deg); 
		perspective: 1000px;
		transform-style: preserve-3d;
	};
	.tiltOver
	{
		width: 33.333%;
		height: 33.333%;
		position: absolute;
		z-index: 1;
	}

	.tiltOver:nth-child(1) { left:       0; top:       0 };
	.tiltOver:nth-child(2) { left: 33.333%; top:       0 };
	.tiltOver:nth-child(3) { left: 66.666%; top:       0 };
	.tiltOver:nth-child(4) { left:       0; top: 33.333% };
	.tiltOver:nth-child(5) { left: 33.333%; top: 33.333% };
	.tiltOver:nth-child(6) { left: 66.666%; top: 33.333% };
	.tiltOver:nth-child(7) { left:       0; top: 66.666% };
	.tiltOver:nth-child(8) { left: 33.333%; top: 66.666% };
	.tiltOver:nth-child(9) { left: 66.666%; top: 66.666% };

	.tiltOver:nth-child(1):hover ~ .tiltBox { transform: rotateX(var(--angleNeg)) rotateY(var(--anglePos)) };
	.tiltOver:nth-child(2):hover ~ .tiltBox { transform: rotateX(var(--angleNeg)) rotateY(           0deg) };
	.tiltOver:nth-child(3):hover ~ .tiltBox { transform: rotateX(var(--angleNeg)) rotateY(var(--angleNeg)) };
	.tiltOver:nth-child(4):hover ~ .tiltBox { transform: rotateX(           0deg) rotateY(var(--anglePos)) };
	.tiltOver:nth-child(5):hover ~ .tiltBox { transform: rotateX(           0deg) rotateY(           0deg) };
	.tiltOver:nth-child(6):hover ~ .tiltBox { transform: rotateX(           0deg) rotateY(var(--angleNeg)) };
	.tiltOver:nth-child(7):hover ~ .tiltBox { transform: rotateX(var(--anglePos)) rotateY(var(--anglePos)) };
	.tiltOver:nth-child(8):hover ~ .tiltBox { transform: rotateX(var(--anglePos)) rotateY(           0deg) };
	.tiltOver:nth-child(9):hover ~ .tiltBox { transform: rotateX(var(--anglePos)) rotateY(var(--angleNeg)) };
</style>