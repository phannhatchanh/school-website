<template>
	<div class="app">
		<Nav />
		<main class="content-wrapper">
			<slot />
			<BackToTop />
			<Footer />
		</main>
	</div>
</template>
<style scoped lang="scss">
.app {
	.content-wrapper {
		@apply ml-[250px] pb-[10px];
	}
}

@media (max-width: 800px) {
	.app {
		@apply block;

		.content-wrapper {
			@apply pt-12 ml-0;
		}
	}
}
</style>
