<template>
	<div class="app">
		<Nav />
		<div class="content-wrapper">
			<div class="content">
				<slot />
			</div>
			<Footer />
		</div>
	</div>
</template>
<style scoped lang="scss">
.app {
	.content-wrapper {
		margin-left: 250px;
		padding-bottom: 10px;

		.content {
			margin: auto;
			max-width: 950px;
			padding: 0.6em 1em 0em 1em;
		}
	}
}

@media (max-width: 800px) {
	.app {
		display: block;

		.content-wrapper {
			padding-top: 49px;
			margin-left: initial;
		}
	}
}
</style>
