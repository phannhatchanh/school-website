import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	modules: [
		"@nuxtjs/sanity",
		"nuxt-icon",
		"@nuxt/image-edge",
		"@nuxtjs/tailwindcss",
	],
	plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
	css: ["~/assets/global.css"],
	sanity: {
		projectId: process.env.SANITY_PROJECT_ID,
		dataset: process.env.ENV == "DEVELOPMENT" ? "development" : "production",
		useCdn: true,
	},
	app: {
		head: {
			htmlAttrs: {
				lang: "pl",
			},
			link: [
				{
					rel: "icon",
					sizes: "192x192",
					href: "/Logo192x192.webp",
				},
				{
					rel: "icon",
					sizes: "32x32",
					href: "/Logo32x32.webp",
				},
				{
					rel: "apple-touch-icon",
					sizes: "32x32",
					href: "/Logo32x32.webp",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
			],
		},
	},
});
