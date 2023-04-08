<script setup lang="ts">
interface Props {
	title: string;
	description: string;
	path?: string;
	targetBlank?: boolean;
}
withDefaults(defineProps<Props>(), {
	targetBlank: false,
});
</script>

<template>
	<NuxtLink
		:to="path"
		:target="targetBlank ? '_blank' : '_self'"
		class="category-button"
	>
		<div class="text">
			<div class="title">{{ title }}</div>
			<div class="description">{{ description }}</div>
		</div>
		<div class="arrow">
			<Icon name="mdi:arrow-right" size="25" />
		</div>
	</NuxtLink>
</template>

<style lang="scss" scoped>
.category-button {
	font-size: 0.9em;
	border: 1px solid rgba(0, 0, 0, 0.125);
	text-decoration: none;
	margin: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	.text {
		padding: 1em;
		padding-right: 1.5em;

		.title {
			font-size: 1.3em;
			font-weight: 500;
		}

		.description {
			padding-top: 0.7em;
			color: #252525;
		}
	}

	.arrow {
		position: relative;
		display: grid;
		place-items: center;
		padding: 20px;
	}

	&::before {
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		background-color: var(--yellow);
		z-index: -1;
		transition: clip-path 0.3s ease-out;
		clip-path: circle(0% at top left);
	}

	&:hover {
		&::before {
			clip-path: circle(150% at top left);
		}
	}
}
</style>
