<script setup lang="ts">
const props = defineProps<{
	title: string;
	description: string;
	file?: { asset: { _ref: string } };
	targetBlank: boolean;
}>();

const getFileUrl = async (file: { asset: { _ref: string } }) =>
	await useSanity().fetch<string>("*[_id==$id][0].url", {
		id: file.asset._ref,
	});
const url = props.file ? await getFileUrl(props.file) : undefined;
</script>

<template>
	<CategoryButton
		:title="title"
		:description="description"
		:targetBlank="targetBlank"
		:path="url"
	/>
</template>
