<script setup lang="ts">
	import { type T_TiltCardProps } from "./types";

	const props = defineProps<T_TiltCardProps>();
</script>

<template>
	<div :class="$style.tiltCardContainer">
		<span :class="$style.tiltCardOver"></span>
		<span :class="$style.tiltCardOver"></span>
		<span :class="$style.tiltCardOver"></span>
		<span :class="$style.tiltCardOver"></span>
		<span :class="$style.tiltCardOver"></span>
		<span :class="$style.tiltCardOver"></span>
		<span :class="$style.tiltCardOver"></span>
		<span :class="$style.tiltCardOver"></span>
		<span :class="$style.tiltCardOver"></span>
		<slot :class="$style.tiltCardOver"></slot>
		<div :class="$style.tiltCard">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style module lang="scss">
	.tiltCardContainer
	{
		--anglePos: v-bind('props.angle + "deg"');
		--angleNeg: v-bind('"-" + props.angle + "deg"');

		position   : relative;
		transition : all 0.6s ease-out;
		perspective: 1000px;
		width      : 100%;
		height     : 100%;
	};
	.tiltCardOver
	{
		position: absolute;
		width   : 33.333%;
		height  : 33.333%;
		z-index : 1000;
	}
	.tiltCard
	{
		width          : 100%;
		height         : 100%;
		position       : relative;
		transition     : all 0.6s ease-out;
		transform      : rotateX(0deg) rotateY(0deg); 
		perspective    : 1000px;
		transform-style: preserve-3d;
		overflow       : hidden;
	};
	.tiltCardOver:nth-child(1)                   { left:       0; top:       0                                  };
	.tiltCardOver:nth-child(2)                   { left: 33.333%; top:       0                                  };
	.tiltCardOver:nth-child(3)                   { left: 66.666%; top:       0                                  };
	.tiltCardOver:nth-child(4)                   { left:       0; top: 33.333%                                  };
	.tiltCardOver:nth-child(5)                   { left: 33.333%; top: 33.333%                                  };
	.tiltCardOver:nth-child(6)                   { left: 66.666%; top: 33.333%                                  };
	.tiltCardOver:nth-child(7)                   { left:       0; top: 66.666%                                  };
	.tiltCardOver:nth-child(8)                   { left: 33.333%; top: 66.666%                                  };
	.tiltCardOver:nth-child(9)                   { left: 66.666%; top: 66.666%                                  };
	.tiltCardOver:nth-child(1):hover ~ .tiltCard { transform: rotateX(var(--angleNeg)) rotateY(var(--anglePos)) };
	.tiltCardOver:nth-child(2):hover ~ .tiltCard { transform: rotateX(var(--angleNeg)) rotateY(           0deg) };
	.tiltCardOver:nth-child(3):hover ~ .tiltCard { transform: rotateX(var(--angleNeg)) rotateY(var(--angleNeg)) };
	.tiltCardOver:nth-child(4):hover ~ .tiltCard { transform: rotateX(           0deg) rotateY(var(--anglePos)) };
	.tiltCardOver:nth-child(5):hover ~ .tiltCard { transform: rotateX(           0deg) rotateY(           0deg) };
	.tiltCardOver:nth-child(6):hover ~ .tiltCard { transform: rotateX(           0deg) rotateY(var(--angleNeg)) };
	.tiltCardOver:nth-child(7):hover ~ .tiltCard { transform: rotateX(var(--anglePos)) rotateY(var(--anglePos)) };
	.tiltCardOver:nth-child(8):hover ~ .tiltCard { transform: rotateX(var(--anglePos)) rotateY(           0deg) };
	.tiltCardOver:nth-child(9):hover ~ .tiltCard { transform: rotateX(var(--anglePos)) rotateY(var(--angleNeg)) };
</style>
