<script setup lang="ts">
withDefaults(defineProps<{ code?: number; message?: string }>(), {
	code: 404,
	message:
		"Trang bạn đang truy cập không tồn tại. Bạn sẽ không tìm thấy được gì ở đây :/",
});
</script>
<template>
	<div class="error">
		<h1>{{ code }}</h1>
		<h2>{{ message }}</h2>
		<div class="btn">
			<Button to="/">Quay trở lại trang chủ</Button>
		</div>
	</div>
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
