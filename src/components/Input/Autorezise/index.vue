<script setup lang="ts">
	import { type Ref, ref } from "vue";

	import type { T_AutoresizeProps } from "./types";


	const props = defineProps<T_AutoresizeProps>();

	const element : Ref<HTMLTextAreaElement|undefined> = ref();

	function AutoResize() : void
	{
		if (element.value && element.value.clientHeight < element.value.scrollHeight)
			element.value.style.height = element.value.scrollHeight + "px";
	};

	function InputHandler(e : Event) : void
	{
		const newInput : string = ((e.target) as HTMLTextAreaElement).value;

		props.bubbleUpInput(newInput);
		AutoResize();
	};
</script>

<template>
	<textarea ref="element" @input="InputHandler" :placeholder="props.placeholder"/>
</template>

<style scoped>
	textarea
	{
		border: none;
		resize: none;
	}
</style>