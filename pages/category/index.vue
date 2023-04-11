<script setup lang="ts">
const schoolname = await getSetting();
const data = await getArticleInCategory();
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>Danh mục bài viết - {{ item.name }} {{ item.district }}</Title>
	</Head>

	<SchoolBanner />
	<h1 class="text-2xl my-4">DANH MỤC BÀI VIẾT</h1>

	<div v-for="category in data" :key="category._id">
		<div class="flex flex-row items-baseline justify-between">
			<h3
				:style="'background: ' + category.color.hex"
				class="text-white px-1.5 py-0.5 rounded mb-2 uppercase w-max hover:opacity-[0.8]"
			>
				<NuxtLink
					:title="category.title"
					:to="'/category/' + category.slug.current"
				>
					{{ category.title }}
				</NuxtLink>
			</h3>
			<span
				class="text-xs uppercase font-semibold"
				:style="'color: ' + category.color.hex"
			>
				<NuxtLink
					:title="category.title"
					:to="'/category/' + category.slug.current"
				>
					Xem thêm <Icon name="mdi:chevron-right" size="20" class="mb-1" />
				</NuxtLink>
			</span>
		</div>
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
		>
			<div v-if="category.articles.length === 0">
				<p>Chưa có bài viết trong mục này.</p>
			</div>
			<div
				class="style-1-4"
				v-else
				v-for="article in category.articles"
				:key="article._id"
			>
				<NuxtLink
					class="no-a-effect"
					:to="'/posts/detail/' + article.slug.current"
					:title="article.title"
				>
					<div class="featured-image">
						<NuxtImg
							class="attachment-medium size-medium wp-post-image"
							width="400"
							height="267"
							:src="article.image.url"
							:alt="article.title"
						/>
					</div>
					<div class="post-title">
						{{ article.title }}
					</div>
					<div class="post-meta">
						<span class="date">
							<Icon name="bi:clock" class="mb-1" />
							{{ getDateArticleInCategory(article.datetime) }}
						</span>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.style-1-4 {
	border-radius: 8px;
	color: #333;
	display: grid;
	align-items: center;
	background: #fff;
	margin-bottom: 1rem;
	width: 100%;
	overflow: hidden;

	box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
		1px 3px 8px rgba(39, 44, 49, 0.03);
	&:hover {
		box-shadow: 0 0 6px 4px #e3e3e3;
		.featured-image {
			border-radius: 8px 8px 0 0;
			img {
				transform: scale(1.1);
				border-radius: 8px 8px 0 0;
			}
		}
		.post-title {
			color: #366494;
		}
	}

	a {
		height: 100%;
	}
	.featured-image {
		height: 150px;
		overflow: hidden;
		margin-bottom: 5px;
		img {
			border-radius: 8px 8px 0 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.2s;
		}
	}
	.post-title {
		text-align: center;
		font-weight: 600;
		line-height: 1.4;
		font-size: 0.93rem;
		color: #333;
		padding: 0.5rem 0.2rem;
	}

	.post-meta {
		text-align: center;
		opacity: 0.8;
		padding-bottom: 1rem;
		.date {
			margin-right: 10px;
			color: #0f799a;
			font-weight: 600;
			font-size: 13px;
		}
		i {
			margin-right: -5px;
		}
	}
}
</style>
