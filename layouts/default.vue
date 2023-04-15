<template>
	<div class="app">
		<Nav />
		<main class="content-wrapper">
			<div class="content">
				<slot />
			</div>
			<Footer />
		</main>
	</div>
</template>
<style scoped lang="scss">
.app {
	.content-wrapper {
		@apply ml-[250px] pb-[10px];

		.content {
			@apply m-auto max-w-5xl pt-[0.6em] pb-[0em] px-[1em];
		}
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
