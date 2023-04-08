<script setup lang="ts">
const props = defineProps<{
	title: string;
	description: string;
	targetBlank: boolean;
	internal: boolean;
	reference?: {
		_ref?: string;
	};
	url?: string;
}>();

const getPathFromRef = async (reference?: { _ref?: string }) => {
	if (reference == null || reference._ref == null) return undefined;
	return await useSanity().fetch<string>("*[_id==$ref][0].path", {
		ref: props.reference?._ref,
	});
};
const path = props.internal ? await getPathFromRef(props.reference) : props.url;
</script>

<template>
	<CategoryButton
		:title="title"
		:description="description"
		:targetBlank="targetBlank"
		:path="path"
	/>
</template>
