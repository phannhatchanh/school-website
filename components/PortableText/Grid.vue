<script setup lang="ts">
defineProps<{ elements: any[] }>();

const types = new Map<string, any>();
types.set("image", resolveComponent("PortableTextImage"));
types.set("tiktok-embed", resolveComponent("PortableTextTikTok"));
types.set("page-button", resolveComponent("PortableTextPageButton"));
types.set("file-button", resolveComponent("PortableTextFileButton"));
types.set("youtube-embed", resolveComponent("PortableTextYouTube"));

const extractProps = (item: any) => {
	if (item) {
		const { _key, _type, ...props } = item;
		return props;
	}
	return {};
};
</script>

<template>
	<Grid>
		<component
			v-for="e in elements"
			:key="e.index"
			:is="types.get(e._type)"
			v-bind="extractProps(e)"
		/>
	</Grid>
</template>
