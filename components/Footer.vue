<script setup lang="ts">
const data = await getSetting();
</script>
<template>
	<footer>
		<Divider />
		<div class="footer-main" v-for="(item, index) in data" :key="index">
			<div class="left">
				<div>
					<NuxtImg
						src="/logo.png"
						width="80"
						height="95"
						:alt="item.name + ' ' + item.district + ' ' + item.province"
					/>
				</div>
				<div class="text">
					<div class="h1">{{ item.name }}</div>
					<div class="h2">{{ item.district }} - {{ item.province }}</div>
				</div>
			</div>
			<Divider vertical />
			<div class="right">
				<Icon name="bi:house" /> {{ item.name }} {{ item.district }}<br />
				<Icon name="bi:pin-map" /> {{ item.address }}<br />
				<Icon name="bi:envelope-at" class="mr-1" />
				<NuxtLink :to="'mailto:' + item.email">{{ item.email }}</NuxtLink
				><br />
				<Icon name="bi:telephone-inbound" class="mr-1" />
				<NuxtLink :to="'tel:' + item.phone">{{ item.phone }}</NuxtLink>
			</div>
		</div>
		<div class="px-[5px]" v-for="(item, index) in data" :key="index">
			{{ item.copyright }}. Developed by
			<NuxtLink to="https://phannhatchanh.com" target="_blank">Chánh</NuxtLink>.
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	margin-top: 2em;
	text-align: center;
	font-size: 0.9em;
	color: #252525;

	.footer-main {
		padding: 0 10px;
		margin-top: 1.5em;
		margin-bottom: 1em;

		display: grid;
		grid-template-columns: 1fr min-content 1fr;
		place-items: center;
		gap: 10px;

		.left {
			display: flex;
			gap: 20px;

			.text {
				text-align: left;

				.h1 {
					font-size: 1.8em;
					font-weight: 600;
				}

				.h2 {
					font-size: 1.3em;
					font-weight: 500;
				}
			}
		}

		.right {
			@apply text-[1.1em] text-left leading-7;
		}
	}
}

@media (max-width: 676px) {
	footer {
		.footer-main {
			grid-template-columns: initial;
			grid-template-rows: 1fr min-content 1fr;

			.left {
				align-items: center;

				img {
					width: 60px;
					height: auto;
				}
			}
		}
	}
}
</style>
