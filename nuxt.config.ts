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
				lang: "vi",
			},
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
				{
					rel: "icon",
					sizes: "192x192",
					href: "/logo1@2x.png",
				},
				{
					rel: "icon",
					sizes: "32x32",
					href: "/logo.png",
				},
				{
					rel: "apple-touch-icon",
					sizes: "32x32",
					href: "/logo.png",
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
