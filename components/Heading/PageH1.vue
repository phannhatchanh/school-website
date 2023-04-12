<script setup lang="ts">
interface Props {
	title: string;
}
defineProps<Props>();
</script>

<template>
	<h1 class="text-lg font-semibold text-slate-900 md:text-2xl">
		{{ title }}
	</h1>
</template>
