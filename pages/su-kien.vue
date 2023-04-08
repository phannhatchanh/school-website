<script setup lang="ts">
const data = await getEvent();
const schoolname = await getSetting();
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>Sự kiện - {{ item.name }} {{ item.district }}</Title>
	</Head>
	<main>
		<section>
			<h1>Sự kiện</h1>
			<Grid>
				<div v-for="(item, index) in data" :key="index">
					<Event
						status="Sắp diễn ra"
						:title="item.title"
						:description="item.description"
						:startDate="item.startDate"
						:endDate="item.endDate"
					/>
				</div>
			</Grid>
		</section>
	</main>
</template>

<style lang="scss" scoped></style>
