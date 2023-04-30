<script setup lang="ts">
defineProps<{ videoId: string }>();
</script>
<template>
	<div class="yt-vid">
		<iframe
			height="315"
			:src="`https://www.youtube-nocookie.com/embed/${videoId}`"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</template>
<style lang="scss" scoped>
.yt-vid {
	margin: 8px;
	padding: 0 8px;
	display: grid;
	place-items: center;
	width: 100%;
	iframe {
		width: clamp(0px, 560px, 100%);
	}
}
</style>
