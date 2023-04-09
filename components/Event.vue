<script setup lang="ts">
defineProps<{
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	status: string;
}>();
const isCurrent = computed((startDate, endDate) => {
	const start = new Date(startDate);
	const end = new Date(endDate);
	const today = new Date();
	return today >= start && today <= end;
});

const isUpcoming = computed((startDate) => {
	const start = new Date(startDate);
	const today = new Date();
	return today < start;
});

const isEnded = computed((endDate) => {
	const end = new Date(endDate);
	const today = new Date();
	return today > end;
});
</script>
<template>
	<div class="event">
		<div class="text">
			<div class="status">{{ status }}</div>
			<h2 class="title">{{ title }}</h2>
			<div class="description">{{ description }}</div>
			<div class="date">
				<Icon name="mdi-light:alarm" size="20" class="mb-1.5" />
				{{ startDate }} đến
				{{ endDate }}
			</div>
			<div v-if="isCurrent">Đang diễn ra</div>
			<div v-else-if="isUpcoming">Sắp diễn ra</div>
			<div v-else-if="isEnded">Đã kết thúc</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.event {
	font-size: 0.9em;
	border: 1px solid rgba(0, 0, 0, 0.125);
	text-decoration: none;
	margin: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	.text {
		padding: 1.3em;
		padding-right: 1.5em;

		.status {
			font-size: 0.9em;
			background-color: rgba(0, 0, 0, 0.075);
			width: max-content;
			padding: 0.2em;
			margin-bottom: 0.6em;
		}
		.title {
			font-size: 1.3em;
			font-weight: 500;
		}

		.description {
			padding: 0.7em 0;
			color: #252525;
		}
		.date {
			padding-top: 0.2em;
		}
	}
}
</style>
