<script setup lang="ts">
const route = useRoute();
const article = await getArticle(route.params["slug"] as string);
const schoolname = await getSetting();
const isFound = article != null && article.slug != null;
if (!isFound) setResponseStatus(404, "Không tìm thấy bài viết");
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>{{ article.title }} - {{ item.name }} {{ item.district }}</Title>
	</Head>
	<BackButton to="/posts/page/1">Bài viết</BackButton>

	<article v-if="isFound">
		<div class="date">{{ getDateFromArticle(article) }}</div>
		<div class="title">Category: {{ article.category.title }}</div>
		<div class="title">Color: {{ article.category.color }}</div>
		<h1 class="title">{{ article.title }}</h1>
		<NuxtImg
			v-if="article.image != null && article.showTitleImage"
			:src="article.image.url"
			:alt="article.image.altText"
			class="img-fluid img"
		/>
		<PortableText :blocks="article.body" />
	</article>
	<ErrorMessage v-else message="Không tìm thấy bài viết" />
</template>

<style lang="scss" scoped>
article {
	h1 {
		@apply first-letter:relative text-xl font-medium sm:text-3xl;
	}
	h2 {
		@apply relative text-xl font-medium sm:text-2xl;
	}
	h3 {
		@apply text-xl font-medium text-rose-100/90;
	}
	h4 {
		@apply text-lg font-medium text-rose-100/90;
	}
}
</style>
