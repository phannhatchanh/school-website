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
		class="header-intro cat-intro bg-cat-10"
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

	<div
		class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
	>
		<div
			class="metro-single-article"
			v-for="(article, index) in categoryData.articles"
			:key="index"
		>
			<figure>
				<NuxtLink
					:to="'/posts/detail/' + article.slug.current"
					:title="article.title"
				>
					<NuxtImg
						width="389"
						height="270"
						:src="article.image.url"
						:title="article.title"
						:alt="article.summary"
					/>
				</NuxtLink>
				<div class="icon_in_figure-container">
					<div class="icon_in_figure icon_in_figure-python"></div>
				</div>
			</figure>
			<div class="metro-article-content">
				<span class="metro-entry-info" style="color: rgb(15, 121, 154)">
					<i class="fa fa-clock-o" style="color: rgb(15, 121, 154)"></i
					>{{ getDateCategory(article.datetime) }}
				</span>
				<h3 class="metro-entry-title">
					<NuxtLink
						:to="'/posts/detail/' + article.slug.current"
						:title="article.title"
					>
						{{ article.title }}
					</NuxtLink>
				</h3>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.metro-single-article:nth-child(5n + 5),
.tg-one-half .metro-single-article:nth-child(3n + 3) {
	@apply mr-0;
}

.metro-single-article:hover {
	transform: translate(0px, -4px);
	transition-duration: 0.2s;
	box-shadow: 3px 6px 7px 0px #929292ed;
}

.metro-single-article img {
	margin: 0;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	transition-duration: 1.5s;
}

/*.metro-single-article img:hover {
    transform: scale(1.15);
    -webkit-transform: scale(1.08);
    -moz-transform: scale(1.08);
    -ms-transform: scale(1.08);
    -o-transform: scale(1.08);
    transition-duration: 1s
}*/

.widget .widget_text {
	@apply block;
}

.metro-single-article figure {
	margin-bottom: -1px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}

.metro-single-article figure:hover {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}

.metro-single-article:hover > .metro-article-content {
	border: 1px solid #d8d8d8;
}

.metro-article-content {
	height: 125px;
	padding: 3% 4% 4% 4%;
	border: 1px solid #ececec;
	background: #f6f6f6;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	text-align: center;
}

.metro-entry-info {
	color: #7d7d7d;
	margin-bottom: 5px;
	position: relative;
	font-size: 13px;
	font-weight: 600;
}

.metro-entry-info::after,
.metro-entry-info::before {
	content: " ";
	width: 20px;
	height: 1px;
	position: absolute;
	top: 10px;
	background: #e6e6e6;
}

.metro-entry-info::before {
	@apply -left-7;
}

.metro-entry-info::after {
	@apply -right-7;
}

.metro-entry-title {
	@apply text-[15px] text-center pt-[1%];
}

.metro-entry-title a {
	@apply text-[#333] font-semibold;
}

.header-intro {
	.intro {
		color: hsla(0, 0%, 100%, 0.8);
		border-radius: 0 0 1rem 1rem;
		padding: 0 1rem 1rem 1rem;
		text-align: center;
		h1 {
			@apply font-semibold text-white;
		}
		.subtitle {
			@apply text-[#5eeda3] text-[1.1rem] font-bold;
		}
		p.description {
			@apply mt-4 text-white;
		}
		@media (max-width: 450px) {
			h4 {
				@apply text-[1.2rem];
			}
		}

		.title {
			@apply mb-4;
		}
		.description {
			@apply m-0 text-[0.9rem];
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
			svg {
				@apply mt-4 py-[5px] px-0;
			}
		}
		p {
			@apply text-white;
		}

		.idx-social {
			span {
				text-shadow: 2px 2px 4px #000;
			}
		}
		.description {
			@apply text-white text-base;
		}
	} // intro
}
</style>
