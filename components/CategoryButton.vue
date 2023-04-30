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
	@apply flex justify-between items-center relative text-[0.9em] border-[1px] border-[#00000020] rounded;

	.text {
		@apply p-3 pr-[1.5em];
		.title {
			@apply font-semibold text-lg text-black;
		}

		.description {
			@apply text-[#252525] pt-1;
		}
	}

	.arrow {
		@apply relative grid place-items-center p-5 text-black;
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
			@apply rounded;
		}
	}
}
</style>
