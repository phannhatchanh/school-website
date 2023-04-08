<script setup lang="ts">
import { Serializers } from "@nuxtjs/sanity/dist/runtime/components/sanity-content";

defineProps<{ blocks: any[] }>();

const serializers: Serializers = {
	types: {
		image: resolveComponent("PortableTextImage"),
		"tiktok-embed": resolveComponent("PortableTextTikTok"),
		"youtube-embed": resolveComponent("PortableTextYouTube"),
		grid: resolveComponent("PortableTextGrid"),
		"page-button": resolveComponent("PortableTextPageButton"),
		"file-button": resolveComponent("PortableTextFileButton"),
	},
	marks: {
		underline: resolveComponent("PortableTextUnderline"),
		"strike-through": resolveComponent("PortableTextStrike"),
		code: resolveComponent("PortableTextCode"),
		link: resolveComponent("PortableTextLink"),
		"internal-link": resolveComponent("PortableTextInternalLink"),
		centered: resolveComponent("PortableTextCentered"),
	},
};
</script>

<template>
	<SanityContent :blocks="blocks" :serializers="serializers" />
</template>
