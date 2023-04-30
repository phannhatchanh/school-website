import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("page:finish", async (a) => {
		window.scrollTo({ top: 0 });
	});
});
