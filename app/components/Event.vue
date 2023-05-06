<script setup lang="ts">
defineProps<{
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	status: string;
	icon: string;
	classStatus: string;
}>();
</script>
<template>
	<NuxtLink class="duration-500 hover:scale-105" href="" :title="title">
		<div class="border-divider-light relative z-0 flex-1 rounded-2xl border">
			<div
				class="border-divider-light absolute inset-x-0 inset-y-8 z-[-1] border-t"
			></div>
			<div
				class="border-divider-light absolute inset-y-0 inset-x-8 z-[-1] border-l"
			></div>
			<div class="-mt-0.5">
				<div
					class="mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-100"
				>
					<div class="-m-2">
						<div class="rounded-full bg-[#e5e7eb] p-1.5 text-2xl">
							{{ icon }}
						</div>
					</div>
					<div class="truncate py-2 pr-4 text-sm font-bold text-slate-700">
						<span :class="classStatus">{{ status }}</span> - {{ title }}
					</div>
				</div>
			</div>
			<div class="pt-1 pl-11 text-sm text-slate-600">
				<Icon name="mdi-light:alarm" size="20" class="mb-1.5" />
				<span :class="classStatus">{{ startDate }}</span> đến
				<span :class="classStatus">{{ endDate }}</span>
			</div>
			<div
				class="py-2 pl-12 text-sm text-slate-600 truncate"
				:title="description"
			>
				{{ description }}
			</div>
		</div>
	</NuxtLink>
</template>
<style lang="scss" scoped></style>
