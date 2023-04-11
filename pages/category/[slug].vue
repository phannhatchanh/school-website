<script setup lang="ts">
const { slug } = useRoute().params;
const categoryData = await getCategory(slug as string);
const schoolname = await getSetting();
</script>
<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title
			>{{ categoryData.title }} - {{ item.name }} {{ item.district }}</Title
		>
	</Head>
	<h1>{{ categoryData.title }} - {{ categoryData.color.hex }}</h1>
	<div class="" v-for="(article, index) in categoryData.articles" :key="index">
		<div class="">
			<NuxtImg
				class=""
				width="400"
				height="236"
				:src="article.image.url"
				:alt="article.title"
			/>
		</div>
		<div class="">
			<h2>
				<NuxtLink
					class="no-a-effect"
					:to="'/posts/detail/' + article.slug.current"
					:title="article.title"
					>{{ article.title }}</NuxtLink
				>
			</h2>
			<div class="">
				{{ getDateCategory(article.datetime) }}
			</div>
			<div class="intro">
				{{ article.summary }}
			</div>
			<div class="">
				<NuxtLink
					class=""
					:to="'/posts/detail/' + article.slug.current"
					:title="article.title"
					>Xem chi tiết</NuxtLink
				>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
