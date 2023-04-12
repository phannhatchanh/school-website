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

	<header
		class="px-3 header-intro cat-intro bg-cat-10"
		:style="'background: ' + categoryData.color.hex"
	>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-8 offset-md-2 col-12 intro">
					<div class="img-avatar">
						<Icon :name="categoryData.icon" size="40" />
					</div>
					<h1 class="title">{{ categoryData.title }}</h1>
					<div class="description">
						{{ categoryData.description }}
					</div>
				</div>
			</div>
		</div>
	</header>

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

<style lang="scss" scoped>
.header-intro {
	.intro {
		color: hsla(0, 0%, 100%, 0.8);
		border-radius: 0 0 1rem 1rem;
		padding: 0 1rem 1rem 1rem;
		text-align: center;
		h1 {
			color: #fff;
			font-weight: 600;
		}
		.subtitle {
			color: #5eeda3;
			font-size: 1.1rem;
			font-weight: 700;
		}
		p.description {
			margin-top: 1rem;
			color: #fff;
		}
		@media (max-width: 450px) {
			h4 {
				font-size: 1.2rem;
			}
		}

		.title {
			margin-bottom: 1rem;
		}
		.description {
			margin: 0;
			font-size: 0.9rem;
		}
	}
	&:hover {
		.icon-math2it {
			transform: rotate(-14deg);
		}
	}
}

.cat-intro {
	.intro {
		h1.title {
			color: #fff;
			font-size: 2.2rem;
			text-shadow: 2px 2px 4px #000;
			font-weight: bold;
			text-transform: lowercase;
			letter-spacing: 5px;
			@media (max-width: 575px) {
				font-size: 2rem;
			}
		}
		.img-avatar {
			i {
				padding: 5px 0;
			}
		}
		p {
			color: #fff;
		}

		.idx-social {
			span {
				text-shadow: 2px 2px 4px #000;
			}
		}
		.description {
			color: #fff;
			font-size: 1rem;
		}
	} // intro
}
</style>
