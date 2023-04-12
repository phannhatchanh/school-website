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
		class="post-tool"
		v-if="article.image != null && article.showTitleImage"
		:style="'background-image: url(' + article.image.url + ')'"
	>
		<div class="container">
			<div class="row justify-center">
				<div class="col-12 col-md-10">
					<h1 class="page-title">
						{{ article.title }}
					</h1>
					<div class="page-subtitle">
						<NuxtLink
							:to="`../../category/${article.category.slug}`"
							:style="'color: ' + article.category.color"
						>
							<Icon :name="article.category.icon" size="15" class="mb-1" />
							{{ article.category.title }}
						</NuxtLink>
						<span>
							<Icon name="mdi-light:alarm" size="20" class="mb-1" />{{
								getDateFromArticle(article)
							}}
						</span>
					</div>
					<p class="text-center mt-2">
						<span class="">tag 1</span>
						<span class="">tag 2</span>
						<span class="">tag 3</span>
						<span class="">tag 4</span>
					</p>
				</div>
			</div>
		</div>
	</header>

	<article v-if="isFound">
		<PortableText :blocks="article.body" />
	</article>
	<ErrorMessage v-else message="Không tìm thấy bài viết" />
</template>

<style lang="scss" scoped>
article {
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

.post-tool {
	padding: 3rem 0;
	position: relative;
	background: no-repeat center center;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	-o-background-size: cover;
	&:before {
		display: block;
		position: absolute;
		background-color: #000;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.5;
	}
}

.page-title {
	text-align: center;
	color: #fff;
	font-size: 1.8rem;
	text-shadow: 2px 2px 4px #000;
	font-weight: bold;
	line-height: 1.4;
}

.page-subtitle {
	color: #c6efde;
	text-align: center;
	font-size: 0.95rem;
	padding-top: 0.25rem;
	line-height: 1.5;
	@media (max-width: 575px) {
		font-size: 1rem;
	}
}
</style>
