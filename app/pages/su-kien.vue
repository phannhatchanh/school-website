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
	<SchoolBanner />
	<main>
		<section>
			<HeadingPageH1 title="Sự kiện" />
			<Grid>
				<template v-for="(item, index) in data" :key="index">
					<Event
						:status="
							isCurrent(item.startDate, item.endDate)
								? 'Đang diễn ra'
								: isUpcoming(item.startDate)
								? 'Sắp diễn ra'
								: 'Đã kết thúc'
						"
						:classStatus="
							isCurrent(item.startDate, item.endDate)
								? 'text-green-500'
								: isUpcoming(item.startDate)
								? 'text-orange-500'
								: 'text-gray-500'
						"
						:icon="
							isCurrent(item.startDate, item.endDate)
								? '🎊'
								: isUpcoming(item.startDate)
								? '🎉'
								: '✨'
						"
						:title="item.title"
						:description="item.description"
						:startDate="getDateFromEnvent(item.startDate)"
						:endDate="getDateFromEnvent(item.endDate)"
					/>
				</template>
			</Grid>
		</section>
	</main>
</template>

<style lang="scss" scoped></style>
