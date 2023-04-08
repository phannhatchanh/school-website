<script setup lang="ts">
const props = defineProps<{
	reference: {
		_ref: string;
	};
}>();
const data = await useSanity().fetch<{ path: string }>(
	"*[_id==$ref][0]{path}",
	{ ref: props.reference._ref }
);
</script>
<template>
	<NuxtLink :to="data.path">
		<slot />
	</NuxtLink>
</template>
