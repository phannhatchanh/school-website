<script setup lang="ts">
interface Props {
	to: string;
}
defineProps<Props>();
</script>

<template>
	<NuxtLink :to="to" class="back">
		<Icon name="mdi:chevron-left" size="25" />
		<slot />
	</NuxtLink>
</template>

<style scoped>
.back {
	text-decoration: none;
	font-size: 1.25em;
	display: block;
	padding: 1em 0;
}
</style>
