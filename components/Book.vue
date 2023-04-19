<script setup lang="ts">
defineProps<{
	title: string;
	category: string;
	author: string;
	imageUrl: string;
}>();
</script>
<template>
	<NuxtLink class="no-a-effect" href="">
		<div class="item">
			<div class="book-cover px-3 px-md-4 px-lg-5 px-md-3">
				<NuxtImg :src="imageUrl" :alt="title" decoding="async" loading="lazy" />
			</div>
			<div class="book-shelf"></div>
			<div class="book-title">{{ title }}</div>
			<div class="book-author">{{ author }}</div>
			<div class="book-category">{{ category }}</div>
		</div>
	</NuxtLink>
</template>
<style lang="scss" scoped>
.layout-book {
	.item {
		margin-top: 1rem;

		&:hover {
			.book-cover {
				img {
					transform: scale(1.03);
				}
			}
		}

		.book-cover {
			position: relative;
			text-align: center;
			z-index: 2;

			img {
				margin: 0 auto;
				position: relative;
				height: 100%;
				width: 100%;
				box-shadow: 0 12px 8px -8px #828282;
				border: 2px solid #eee;
				transition: transform 0.2s;
				-webkit-transition: transform 0.2s;
			}
		}

		.book-shelf {
			background: #ddd;
			height: 30px;
			margin-bottom: 0.5rem;
			margin-top: -18px;
			transform: skewX(-30deg);
			z-index: 1;
		}

		.book-title {
			text-align: center;
			font-weight: bold;
			font-size: 0.95rem;
			line-height: 1.4;
			margin-bottom: 5px;
			color: #333;
		}
		.book-author,
		.book-category {
			text-align: center;
			font-size: 0.8rem;
			color: #666;
		}
		&:hover {
			.book-title {
				color: var(--yellow);
			}
			.book-author {
				color: #000;
			}
		}
	}
}
</style>
