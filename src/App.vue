<script setup lang="ts">
	import type { T_CarouselElement } from "./components/Carousel/types";

	import Header from "./components/Header/index.vue";
	import CardNavigation from "./components/CardNavigation/index.vue";
	import Carousel       from "./components/Carousel/index.vue";

	import borderland1 from "./assets/borderland1.jpg";
	import borderland2 from "./assets/borderland2.jpg";
	import borderland3 from "./assets/borderland3.png";
	import borderland4 from "./assets/borderland4.jpg";

	const carouselElements : T_CarouselElement<{ image: string }>[] =
	[
		{ name: "borderland1", image: borderland1, },
		{ name: "borderland2", image: borderland2, },
		{ name: "borderland3", image: borderland3, },
		{ name: "borderland4", image: borderland4, },
	];
</script>

<template>
	<div class="appContainer">
		<Header/>
		<div class="appContent">
			<Carousel
				class="carousel"
				:gap="35"
				:numberElement="3"
				:elementsNames="carouselElements.map((carouselElement) => { return (carouselElement.name); })"
			>
				<template v-for="(carouselElement, index) in carouselElements" v-slot:[carouselElement.name]>
					<div class="cardNavigation">
						{{ carouselElement.name }}
						<!--<CardNavigation
							:brightnessOnHover ="20"
							:zoomOnHover       ="1.1"
							:tiltAngle         ="5"
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
						</CardNavigation>-->
					</div>
				</template>
			</Carousel>
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
			background: var(--secondaryColor);
			flex-grow : 1;
			display: flex;
			gap: 10vw;
			align-items: center;
			padding: 0 2vw;
		};
	};
	.carousel
	{
		border: red solid 2px;
		box-sizing: border-box;
	}
	.cardNavigation
	{
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: green solid 2px;
	};

</style>
