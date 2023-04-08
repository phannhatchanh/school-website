<script setup lang="ts">
interface Props {
	vertical?: boolean;
}
withDefaults(defineProps<Props>(), { vertical: false });
</script>

<template>
	<div :class="vertical ? 'vl' : 'hl'"></div>
</template>
<style lang="scss" scoped>
.hl {
	margin: auto;
	border-bottom: 1px solid rgba(0, 0, 0, 0.125);
	width: 90%;
}

.vl {
	border-left: 1px solid rgba(0, 0, 0, 0.125);
	height: 95%;
}
</style>
