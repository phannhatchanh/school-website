<script>
export default {
	data() {
		return {
			showScrollTopButton: false,
		};
	},
	methods: {
		checkScrollPosition() {
			this.showScrollTopButton = window.pageYOffset > 200;
		},
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
	},
	mounted() {
		window.addEventListener("scroll", this.checkScrollPosition);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.checkScrollPosition);
	},
};
</script>
<template>
	<NuxtLink
		class="fixed flex items-center justify-center p-2 text-xl rounded-full cursor-pointer bottom-2 right-2"
		v-if="showScrollTopButton"
		@click="scrollToTop"
	>
		<Icon
			name="bi:arrow-up-square-fill"
			size="25"
			class="text-[var(--blue)] hover:text-[var(--yellow)]"
		/>
	</NuxtLink>
</template>
