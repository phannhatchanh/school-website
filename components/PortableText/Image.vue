<script setup lang="ts">
const props = defineProps<{
	asset: {
		_ref: string;
	};
}>();

const data = await useSanity().fetch<{ url: string; altText: string }>(
	"*[_id==$id][0]{url, altText}",
	{ id: props.asset._ref }
);
</script>

<template>
	<div class="img-wrapper">
		<NuxtImg :src="data.url" :alt="data.altText" />
	</div>
</template>

<style scoped lang="scss">
.img-wrapper {
	margin: 8px;
	display: grid;
	place-items: center;
	img {
		max-width: min(100%, 650px);
	}
}
</style>
