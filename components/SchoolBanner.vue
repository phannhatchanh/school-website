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
	@apply relative py-[1em] px-[0.5em];

	.background {
		img {
			@apply absolute top-0 left-0 -z-[1] w-full h-full overflow-hidden object-cover;
		}
	}

	.content {
		@apply flex rounded-md gap-5 p-2 bg-[#0007] w-fit;
		img {
			@apply w-28 h-28;
		}

		.title {
			@apply text-white text-xl;
			.name {
				@apply font-semibold text-[1.5em] py-1.5;
			}

			.sub1 {
				@apply py-[3px];
			}
		}
	}
}

@media (max-width: 530px) {
	.banner {
		.content {
			.title {
				@apply text-[0.95em];
			}

			img {
				@apply w-[90px] h-[90px];
			}
		}
	}
}
</style>
