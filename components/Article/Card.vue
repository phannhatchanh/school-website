<script setup lang="ts">
interface Props {
	article: Article;
}
defineProps<Props>();
</script>

<template>
	<div class="layout-photo-title">
		<div class="item">
			<div class="thumb-cat" :style="'background: ' + article.category.color">
				<NuxtLink
					class="no-a-effect"
					:to="'/posts/detail/' + article.slug"
					:title="getPreviewFromArticle(article, 100)"
				>
					<div class="post-image" v-if="article.image != null">
						<NuxtImg :src="article.image?.url" :alt="article.image.altText" />
					</div>
				</NuxtLink>
				<NuxtLink
					class="no-a-effect"
					:to="`../../category/${article.category.slug}`"
				>
					<div class="post-cat">
						<NuxtLink :to="`../../category/${article.category.slug}`">
							{{ article.category.title }}
						</NuxtLink>
					</div>
				</NuxtLink>
			</div>
			<div class="post-title">
				<NuxtLink
					class="no-a-effect"
					:to="'/posts/detail/' + article.slug"
					:title="getPreviewFromArticle(article, 100)"
				>
					{{ article.title }}
				</NuxtLink>
			</div>
			<div class="post-date">
				<Icon name="bi:clock" class="mb-1" /> {{ getDateFromArticle(article) }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout-photo-title {
	.item {
		margin-bottom: 2rem;
		@media (max-width: 991px) {
			margin-bottom: 1rem;
		}
		width: 100%;
		transition: all 0.5s ease;
		&:hover {
			.post-image {
				border-radius: 7px;
				img {
					transform: scale(1.1);
				}
			}
			.post-title {
				color: #f63d3a;
			}
		}
	}
	div.thumb-cat {
		border-radius: 7px;
		overflow: hidden;
	}
	.post-image {
		height: 100px;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 7px;
			transition: transform 0.2s;
		}
	}
	.post-cat {
		padding: 3px 5px;
		color: #fff;
		text-align: center;
		font-size: 0.85rem;
		&:hover {
			filter: brightness(110%);
		}
	}
	.post-title {
		line-height: 1.4;
		padding: 10px 10px 5px 10px;
		text-align: center;
		font-size: 0.93rem;
		font-weight: 600;
		color: #333;
	}
	.post-date {
		text-align: center;
		opacity: 0.8;
		color: #0f799a;
		font-weight: 600;
		font-size: 13px;
	}
}
</style>
