<script setup lang="ts">
interface Props {
	title: string;
}
defineProps<Props>();
</script>

<template>
	<h1 class="relative my-4 text-xl font-semibold sm:text-2xl lg:text-3xl">
		{{ title }}
	</h1>
</template>
