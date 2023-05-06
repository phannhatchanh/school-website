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

	<header
		class="post-header"
		v-if="article.image != null && article.showTitleImage"
		:style="'background-image: url(' + article.image.url + ')'"
	>
		<div class="container">
			<div class="justify-center">
				<h1
					class="text-center text-[1.8rem] font-bold text-amber-300 drop-shadow-lg"
				>
					{{ article.title }}
				</h1>
				<div class="page-subtitle drop-shadow-lg shadow-black">
					<NuxtLink
						:to="`../../category/${article.category.slug}`"
						:style="'color: ' + article.category.color"
						class="font-bold bg-black opacity-50 p-1 rounded-md hover:opacity-90"
					>
						<Icon :name="article.category.icon" size="15" class="mb-1" />
						{{ article.category.title }}
					</NuxtLink>
					<span class="ml-2">
						<Icon name="mdi-light:alarm" size="20" class="mb-1" />{{
							getDateFromArticle(article)
						}}
					</span>
				</div>
			</div>
		</div>
	</header>

	<article v-if="isFound">
		<div>
		<PortableText :blocks="article.body" />
	</div>
	</article>
	<ErrorMessage v-else message="Không tìm thấy bài viết" />
</template>

<style lang="scss" scoped>
.post-header {
	@apply relative bg-cover bg-no-repeat bg-center py-12;
	&::before {
		@apply block absolute bg-black top-0 left-0 right-0 bottom-0 opacity-50;
	}
}

.page-subtitle {
	padding-top: 0.25rem;
	line-height: 1.5;
	@media (max-width: 575px) {
		font-size: 1rem;
	}
	@apply text-[#c6efde] text-center text-[1rem];
}
</style>
