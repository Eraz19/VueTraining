<script setup lang="ts">
	import Header from "./components/Header/index.vue";
	import CardNavigation from "./components/CardNavigation/index.vue";

	import image from "./assets/borderland3.png";

	const images : string[] = [image];
</script>

<template>
	<div class="appContainer">
		<Header/>
		<div class="appContent">
			<div v-for="image in images" class="cardNavigation">
				<CardNavigation
					:brightnessOnHover ="20"
					:zoomOnHover       ="1.1"
					:tiltAngle         ="2"
					title              ="Test"
					:backgroundImagePath="image"
					text               =
					"
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae 
						iste quae hic possimus reiciendis dolorem soluta suscipit explicabo quo
						aut nulla dignissimos expedita alias, ipsum in omnis corrupti. Aperiam
						autem ab harum eos aliquid sunt eveniet pariatur, sint quibusdam est illum,
						cum reprehenderit quasi atque voluptas. Aperiam dolor, soluta deleniti, illo
						nesciunt eum amet deserunt fuga impedit voluptate quae reiciendis cumque,
						iusto expedita totam minima! Commodi dignissimos ipsa dolorum suscipit laudantium?
						In, repellat ducimus error quibusdam eius exercitationem perspiciatis eaque minus,
						soluta quis reiciendis aperiam! Saepe, alias, magni deleniti suscipit et debitis
						laborum asperiores, eveniet ratione quam ea quos assumenda!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae 
						iste quae hic possimus reiciendis dolorem soluta suscipit explicabo quo
						aut nulla dignissimos expedita alias, ipsum in omnis corrupti. Aperiam
						autem ab harum eos aliquid sunt eveniet pariatur, sint quibusdam est illum,
						cum reprehenderit quasi atque voluptas. Aperiam dolor, soluta deleniti, illo
						nesciunt eum amet deserunt fuga impedit voluptate quae reiciendis cumque,
						iusto expedita totam minima! Commodi dignissimos ipsa dolorum suscipit laudantium?
						In, repellat ducimus error quibusdam eius exercitationem perspiciatis eaque minus,
						soluta quis reiciendis aperiam! Saepe, alias, magni deleniti suscipit et debitis
						laborum asperiores, eveniet ratione quam ea quos assumenda!
					"
				>
				</CardNavigation>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.appContainer
	{
		height        : 100vh;
		width         : 100%;
		display       : flex;
		flex-direction: column;

		& > .appContent
		{
			overflow-x: hidden;
			padding: 5vw;
			background: var(--secondaryColor);
			flex-grow : 1;
			display: flex;
			gap: 10vw;
			align-items: center;
		};
	};
	.cardNavigation
	{
		width: 400px;
		height: 90%;
	};
</style>
