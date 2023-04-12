<script setup lang="ts">
const PER_PAGE = 6;

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
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>Bài viết - {{ item.name }} {{ item.district }}</Title>
	</Head>
	<div>
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
		<div class="pagination-btns">
			<UnderlineButton
				:to="prevPage != null ? `/posts/page/${prevPage}` : ''"
				:disabled="prevPage == null"
			>
				<Icon name="mdi:chevron-left" size="24" /> Trang trước
			</UnderlineButton>
			<UnderlineButton
				:to="nextPage != null ? `/posts/page/${nextPage}` : ''"
				:disabled="nextPage == null"
			>
				Kế tiếp
				<Icon name="mdi:chevron-right" size="24" />
			</UnderlineButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.pagination-btns {
	margin: 2em 0;
	display: flex;
	justify-content: center;
	gap: 2em;
}
</style>
