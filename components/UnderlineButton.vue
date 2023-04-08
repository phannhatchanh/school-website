<script setup lang="ts">
interface Props {
	to: string;
	disabled?: boolean;
}
withDefaults(defineProps<Props>(), {
	disabled: false,
});
</script>

<template>
	<NuxtLink :to="to" class="underline-btn" :class="disabled ? 'disabled' : ''">
		<slot />
	</NuxtLink>
</template>

<style lang="scss" scoped>
.underline-btn {
	text-decoration: none;
	font-size: 1.15em;
	font-weight: 500;
	position: relative;

	&.disabled {
		color: rgb(59, 59, 59);
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		right: 2px;
		bottom: -5px;

		border-bottom: 3px solid var(--blue);
	}

	&.disabled {
		&::before {
			border-bottom-color: rgb(59, 59, 59);
		}
	}

	&::before {
		width: 100%;
	}

	&::after {
		width: 0%;
		transition: width 0.2s;
		border-bottom-color: var(--yellow);
	}

	&:hover {
		&::after {
			width: 100%;
		}

		&.disabled {
			&::after {
				width: 0%;
			}
		}
	}
}
</style>
