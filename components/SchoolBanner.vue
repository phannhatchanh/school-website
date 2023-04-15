<script setup lang="ts">
const data = await getSetting();
</script>
<template>
	<header class="banner" v-for="(item, index) in data" :key="index">
		<div class="content">
			<div class="logo">
				<NuxtImg
					src="logo@2x.png"
					:alt="item.name + ' ' + item.district + ' ' + item.province"
					width="125"
					height="125"
				/>
			</div>
			<div class="title">
				<h1>
					<div class="name">{{ item.name }}</div>
					<div class="sub1">{{ item.district }}</div>
					<div class="sub2">{{ item.province }}</div>
				</h1>
			</div>
		</div>
		<div class="background">
			<template v-if="item.banner">
				<NuxtImg
					:src="item.banner.url"
					:alt="item.name + ' ' + item.district + ' ' + item.province"
					width="868"
					height="184"
				/>
			</template>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.banner {
	margin-top: 0.5em;
	padding: 1em 0.5em;
	position: relative;

	.background {
		img {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;

			overflow: hidden;
			object-fit: cover;
		}
	}

	.content {
		display: flex;
		gap: 20px;
		padding: 0.7em;
		background-color: #0007;
		width: fit-content;

		img {
			width: 125px;
			height: 125px;
		}

		.title {
			color: white;
			font-size: 1.15em;

			.name {
				font-weight: 600;
				font-size: 1.5em;
				padding: 5px 0;
			}

			.sub1 {
				padding: 3px 0;
			}
		}
	}
}

@media (max-width: 530px) {
	.banner {
		.content {
			.title {
				font-size: 0.95em;
			}

			img {
				width: 90px;
				height: 90px;
			}
		}
	}
}
</style>
