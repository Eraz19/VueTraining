<script setup lang="ts">
	import { type T_CardNavigationProps } from "./types";
	import TiltCard                       from "../TiltCard/index.vue";

	const props = defineProps<T_CardNavigationProps>();
</script>

<template>
	<div :class="$style.cardNavigationContainer">
		<TiltCard :angle="props.tiltAngle" :class="$style.cardNavigation">
			<template v-slot:content>
				<div :class="$style.cardNavigationContent">
					<img :class="$style.cardNavigationBackground" :src="props.backgroundImagePath"/>
				</div>
				<div :class="$style.cardNavigationText">
					<div :class="$style.cardNavigationTextTitle">{{ props.title }}</div>
					<div :class="$style.cardNavigationTextContent">{{ props.text }}</div>
				</div>
			</template>
		</TiltCard>
	</div>
</template>

<style module lang="scss">
	.cardNavigationContainer
	{
		--brightness: v-bind('props.brightnessOnHover + "%"');
		--zoom      : v-bind(props.zoomOnHover);

		position: relative;
		width: 100%;
		height: 100%;
		transition: all 0.6s ease-in-out;
	};
	.cardNavigationContainer:hover
	{
		transition: all 0.6s ease-in-out;
		transform : scale(var(--zoom));
	}
	.cardNavigation
	{
		width     : 100%;
		height    : 100%;
	};
	.cardNavigationContent
	{		
		width: 100%;
		height: 100%;
		transition: all 0.6s ease-in-out;
	};
	.cardNavigationContainer:hover .cardNavigationContent
	{		
		transition: all 0.6s ease-in-out;
		filter    : brightness(var(--brightness));
	}
	.cardNavigationText
	{
		position          : absolute;
		top               : 0;
		padding           : 5px;
		overflow-wrap     : break-word;
		height            : 100%;
		box-sizing        : border-box;
		display           : flex;
		flex-direction    : column;
		color             :white;
	};
	.cardNavigationTextTitle
	{
		position  : relative;
		height    : 10%;
		transform : translate(-102%);
		transition: transform 0.3s ease-in-out;
	};
	.cardNavigationTextContent
	{
		position  : relative;
		height    : 90%;
		transform : translate(102%);
		transition: transform 0.3s ease-in-out;
	};
	.cardNavigationContainer:hover .cardNavigationTextTitle
	{
		transform : translate(0);
		transition: transform 0.6s ease-in-out;
	};
	.cardNavigationContainer:hover .cardNavigationTextContent
	{
		transform : translate(0);
		transition: transform 0.6s ease-in-out;
	};
	.cardNavigationBackground
	{
		object-fit      : cover;
		height          : 100%;
		width           : 100%;
		border-radius   : inherit;
		background-color: inherit;
		border-radius   : 10px;
	};
</style>
