<script setup lang="ts">
	import { ref, type Ref } from "vue";

	import { type T_CardNavigationProps } from "./types";
	import TiltCard                       from "../TiltCard/index.vue";
	import AutoScrollText                 from "../AutoScrollText/index.vue";

	const props = defineProps<T_CardNavigationProps>();

	const isTextScrolling : Ref<boolean> = ref<boolean>(false);

	function TextStartScrolling() : void { isTextScrolling.value = true; };
	function TextStopScrolling() : void { isTextScrolling.value = false; };
</script>

<template>
	<div :class="$style.cardNavigationContainer" @mouseover="TextStartScrolling" @mouseleave="TextStopScrolling">
		<TiltCard :angle="props.tiltAngle" :class="$style.cardNavigation">
			<template v-slot:content>
				<div :class="$style.cardNavigationContent">
					<img :class="$style.cardNavigationBackground" :src="props.backgroundImagePath"/>
				</div>
				<div :class="$style.cardNavigationText">
					<div :class="$style.cardNavigationTextTitle">{{ props.title }}</div>
					<div :class="$style.cardNavigationTextContent">
						<AutoScrollText
							:duration="20"
							:text="props.text"
							:is-scrolling="isTextScrolling"
						/>
					</div>
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

		width     : 100%;
		height    : 100%;
		transition: transform 0.6s;
	};
	.cardNavigationContainer:hover
	{
		transform : scale(var(--zoom));
		transition: transform 0.6s;
	}
	.cardNavigation
	{
		width : 100%;
		height: 100%;
	};
	.cardNavigationContent
	{		
		width     : 100%;
		height    : 100%;
		transition: filter 0.6s;
	};
	.cardNavigationContainer:hover .cardNavigationContent
	{		
		filter    : brightness(var(--brightness));
		transition: filter 0.6s;
	}
	.cardNavigationText
	{
		position      : absolute;
		top           : 0;
		height        : 100%;
		width         : 100%;
		display       : flex;
		flex-direction: column;
		color         : rgb(200, 200, 200);
		font-family   : sans-serif;
	};
	.cardNavigationTextTitle
	{
		position      : relative;
		height        : 10%;
		padding       : 10px;
		font-size     : 2rem; 
		opacity       : 0%;
		display: flex;
		align-items: center;
	};
	.cardNavigationTextContent
	{
		position: relative;
		height  : 90%;
		padding : 10px;
		opacity : 0%;
	};
	.cardNavigationContainer:hover .cardNavigationTextTitle
	{
		animation: 0.5s ease-in fadeIn 0.1s;
  		animation-fill-mode: forwards;
	};
	.cardNavigationContainer:hover .cardNavigationTextContent
	{
		animation: 0.5s ease-in fadeIn 0.1s;
  		animation-fill-mode: forwards;
	};
	.cardNavigationBackground
	{
		height          : 100%;
		width           : 100%;
		object-fit      : cover;
		border-radius   : inherit;
		background-color: inherit;
		border-radius   : 10px;
	};
	@keyframes fadeIn
	{
		0%   { opacity: 0%;   }
		60%  { opacity: 60%;  }
		100% { opacity: 100%; }
	};
</style>
