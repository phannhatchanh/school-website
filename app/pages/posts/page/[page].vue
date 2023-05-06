<script setup lang="ts">
const PER_PAGE = 12;

const route = useRoute();
const page = parsePage(route.params["page"] as string);

if (page == 1 && route.params["page"] != "1") navigateTo("/posts/page/1");

const { all, articles } = await getArticles(PER_PAGE, page - 1);

if (articles.length == 0 && all != 0) navigateTo("/posts/page/1");

const getPagesQuantity = (all: number, perPage: number) =>
	Math.ceil(all / perPage);
const getPerviousPage = (current: number) =>
	current == 1 ? null : current - 1;
const getNextPage = (current: number, max: number) =>
	current == max ? null : current + 1;

const prevPage = getPerviousPage(page);
const nextPage = getNextPage(page, getPagesQuantity(all, PER_PAGE));

const schoolname = await getSetting();
const pagesQuantity = getPagesQuantity(all, PER_PAGE);
const pageNumbers = Array.from({ length: pagesQuantity }, (_, i) => i + 1);
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>Bài viết - {{ item.name }} {{ item.district }}</Title>
	</Head>
	<SchoolBanner />
	<div class="page-content">
		<HeadingPageH1 title="Bài viết" />
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
		>
			<ArticleCard
				v-for="article in articles"
				:key="article.slug"
				:article="article"
			/>
		</div>

		<div class="article-pagination" role="navigation">
			<NuxtLink
				:to="prevPage != null ? `/posts/page/${prevPage}` : ''"
				:disabled="prevPage == null"
			>
				<Icon name="mdi:chevron-left" size="20" />
			</NuxtLink>
			<template v-if="pageNumbers.length > 1">
				<template v-if="pageNumbers[0] != 1">
					<span>1</span>
					<span>...</span>
				</template>
				<template v-for="(pageNumber, index) in pageNumbers">
					<template v-if="pageNumber != page">
						<NuxtLink
							class="page"
							:to="`/posts/page/${pageNumber}`"
							:key="index"
							>{{ pageNumber }}</NuxtLink
						>
					</template>
					<template v-else>
						<span class="font-semibold ml-1.5 current" :key="index">{{
							pageNumber
						}}</span>
					</template>
				</template>
				<template v-if="pageNumbers[pageNumbers.length - 1] != pagesQuantity">
					<span>...</span>
					<span>{{ pagesQuantity }}</span>
				</template>
			</template>
			<NuxtLink
				:to="nextPage != null ? `/posts/page/${nextPage}` : ''"
				:disabled="nextPage == null"
				><Icon name="mdi:chevron-right" size="20" />
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.article-pagination {
	@apply flex justify-center mb-[50px] mt-5 text-center;

	svg {
		@apply mb-1;
	}

	.page,
	a {
		@apply pt-1 pb-0 px-[10px] text-[#777] border-[1px] border-[#f2f2f2] ml-[5px] rounded duration-100;
	}

	.current,
	a:hover {
		@apply pt-1 pb-0 px-[10px] text-white bg-[#238ffd] rounded duration-100 border-[1px] border-white;
	}
}
</style>
