<script setup lang="ts">
const props = defineProps<{ error: any }>();
</script>

<template>
	<NuxtLayout>
		<div class="error">
			<h1>{{ error.statusCode }}</h1>
			<h2>{{ error.message }}</h2>
			<div class="btn">
				<Button to="/">Quay trở lại trang chủ</Button>
			</div>
		</div>
	</NuxtLayout>
</template>

<style lang="scss" scoped>
.error {
	@apply text-center;
	h1 {
		@apply text-5xl font-bold;
	}
	h2 {
		@apply text-xl font-bold;
	}
	.btn {
		@apply grid justify-center text-center p-[0.7em];
	}
}
</style>
