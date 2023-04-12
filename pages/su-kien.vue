<script setup lang="ts">
const data = await getEvent();
const schoolname = await getSetting();

const isCurrent = (startDate: string, endDate: string) => {
	const start = new Date(startDate);
	const end = new Date(endDate);
	const today = new Date();
	return today >= start && today <= end;
};

const isUpcoming = (startDate: string) => {
	const start = new Date(startDate);
	const today = new Date();
	return today < start;
};
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>Sự kiện - {{ item.name }} {{ item.district }}</Title>
	</Head>
	<main>
		<section>
			<HeadingPageH1 title="Sự kiện" />
			<Grid>
				<div v-for="(item, index) in data" :key="index">
					<Event
						:status="
							isCurrent(item.startDate, item.endDate)
								? 'Đang diễn ra'
								: isUpcoming(item.startDate)
								? 'Sắp diễn ra'
								: 'Đã kết thúc'
						"
						:title="item.title"
						:description="item.description"
						:startDate="getDateFromEnvent(item.startDate)"
						:endDate="getDateFromEnvent(item.endDate)"
					/>
				</div>
			</Grid>
		</section>
	</main>
</template>

<style lang="scss" scoped></style>
