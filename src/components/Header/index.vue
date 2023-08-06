<script setup lang="ts">

</script>

<template>
	<div class="headerContainer">
		<img src="../../assets/VuejsLogo.png"/>
		<div>Vuejs</div>
	</div>
</template>

<style lang="scss" scoped>
	.headerContainer
	{
		position          : relative;
		z-index           : 100;
		display           : flex;
		gap               : 5px;
		background        : var(--primaryColor);
		width             : 100vw;
		height            : 70px;
		padding           : 10px;
		-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing   : border-box; /* Firefox, other Gecko */
		box-sizing        : border-box; /* Opera/IE 8+ */
		box-shadow        : 0px 4px 5px var(--boxShadowColor);

		& > img { height: 100%; };
		& > div
		{
			color      : var(--vuePrimaryColor);
			font-size  : 29px;
			font-weight: 700;
			font-family: sans-serif;
			align-self : center;
		};
	};
</style>