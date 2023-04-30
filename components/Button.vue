<script setup lang="ts">
interface Props {
	to: string;
	targetBlank?: boolean;
}
withDefaults(defineProps<Props>(), {
	targetBlank: false,
});
</script>

<template>
	<NuxtLink :to="to" :target="targetBlank ? '_blank' : '_self'" class="btn">
		<slot />
	</NuxtLink>
</template>

<style scoped lang="scss">
.btn {
	display: block;
	width: max-content;
	margin: 10px;
	border-radius: 0.5em;
	padding: 0.35em;
	transition: background-color 0.2s, color 0.1s, border 0.2s;
	color: inherit;
	text-decoration: none;

	border: 2px solid var(--blue);

	&:hover {
		border: 2px solid var(--yellow);
		background-color: var(--yellow);
		color: #252525;
	}
}
</style>
