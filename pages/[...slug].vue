<script setup lang="ts">
import ErrorMessage from "~~/components/ErrorMessage.vue";

const schoolname = await getSetting();
const data = await getPageFromPath(useRoute().params["slug"] as string[]);

const isFound = data != null && data.path != null;
if (!isFound) setResponseStatus(404);
</script>
<template>
	<div>
		<Head v-for="(item, index) in schoolname" :key="index">
			<Title v-if="isFound"
				>{{ data.title }} - {{ item.name }} {{ item.district }}</Title
			>
			<Title v-else>404 - {{ item.name }} {{ item.district }}</Title>
		</Head>
		<PortableText v-if="isFound" :blocks="data.body" />
		<ErrorMessage v-else />
	</div>
</template>
