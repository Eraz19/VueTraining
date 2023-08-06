<script setup lang="ts">
	import Header from "./components/Header/index.vue";
	import TiltCard from "./components/TiltCard/index.vue";
</script>

<template>
	<div class="appContainer">
		<Header/>
		<div class="appContent">
			<TiltCard class="card" :angle="15">
				<template v-slot:content><div class="cardContent"></div></template>
			</TiltCard>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.appContainer
	{
		height        : 100vh;
		width         : 100%;
		display       : flex;
		flex-direction: column;

		& > .appContent
		{
			background: var(--secondaryColor);
			flex-grow : 1;
			padding: 50px;

			& > .card
			{
				width: 300px;
				height: 200px;
				border-radius: 10px;
			}
			& > .card:hover
			{
				transition: all 0.3s linear;
				transform: scale(1.1);
			}
		};
	};

	.cardContent
	{
		position: absolute;
		width: 100%;
		height: 100%;
		background: red;
	}
</style>
