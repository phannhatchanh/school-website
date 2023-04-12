<script setup lang="ts">
interface Props {
	title: string;
}
defineProps<Props>();
</script>

<template>
	<h2 class="text-lg font-semibold text-slate-900 md:text-xl">
		{{ title }}
	</h2>
</template>
