<script setup lang="ts">
defineProps<{
	href: string;
	targetBlank?: boolean;
}>();
</script>
<template>
	<NuxtLink :to="href" :target="targetBlank ? '_blank' : '_self'">
		<slot />
	</NuxtLink>
</template>
