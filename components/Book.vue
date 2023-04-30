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
		@apply mt-4;

		&:hover {
			.book-cover {
				img {
					transform: scale(1.03);
				}
			}
		}

		.book-cover {
			@apply relative text-center z-[2];
			img {
				@apply my-0 mx-auto relative h-[80%] w-[80%] border-2 border-[#eee];
				box-shadow: 0 12px 8px -8px #828282;
				transition: transform 0.2s;
				-webkit-transition: transform 0.2s;
			}
		}

		.book-shelf {
			@apply transform -skew-x-[30deg] bg-[#ddd] h-[30px] mb-[0.5rem] -mt-[18px] -z-[1];
		}

		.book-title {
			@apply text-center font-bold text-[0.95rem] leading-[1.4] mb-[5px] text-[#333];
		}
		.book-author,
		.book-category {
			@apply text-center text-[0.8rem] text-[#666];
		}
		&:hover {
			.book-title {
				@apply text-[var(--yellow)];
			}
			.book-author {
				@apply text-black;
			}
		}
	}
}
</style>
