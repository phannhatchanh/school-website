<script setup lang="ts">
const data = await getLaws();
const schoolname = await getSetting();
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>Văn bản điều hành - {{ item.name }} {{ item.district }}</Title>
	</Head>
	<main>
		<section class="relative px-2 text-gray-600 sm:px-2 lg:px-0">
			<div class="h-screen">
				<HeadingPageH1 title="Văn bản điều hành" />
				<div class="hidden overflow-auto rounded-lg shadow md:block">
					<table class="w-full">
						<thead class="border-b-2 border-gray-200 bg-gray-50">
							<tr class="odd:bg-white even:bg-slate-50">
								<th class="w-20 p-3 text-sm font-bold tracking-wide text-left">
									STT
								</th>
								<th class="w-24 p-3 text-sm font-bold tracking-wide text-left">
									Kí hiệu
								</th>
								<th class="w-24 p-3 text-sm font-bold tracking-wide text-left">
									Ban hành
								</th>
								<th class="p-3 text-sm font-bold tracking-wide text-left">
									Trích yếu
								</th>
								<th class="w-32 p-3 text-sm font-bold tracking-wide text-left">
									Đính kèm
								</th>
							</tr>
						</thead>
						<tbody
							class="divide-y divide-gray-100"
							v-for="(item, index) in data"
							:key="index"
						>
							<tr class="bg-white">
								<td class="p-3 text-sm text-gray-700 whitespace-nowrap">
									<div class="font-bold text-blue-500">
										{{ index + 1 }}
									</div>
								</td>
								<td class="p-3 text-sm text-gray-700 whitespace-nowrap">
									<span
										class="p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50"
										:class="{
											'bg-green-200 text-green-800':
												item.issued_levels === 'Bộ GD&ĐT',
											'bg-yellow-200 text-yellow-800':
												item.issued_levels === 'Sở GD&ĐT',
											'bg-red-200 text-red-800':
												item.issued_levels === 'Phòng GD&ĐT',
											'bg-gray-200 text-gray-800':
												item.issued_levels === 'Khác',
										}"
									>
										{{ item.number_of_symbol }}
									</span>
								</td>
								<td class="p-3 text-sm text-gray-700 whitespace-nowrap">
									{{ formatDateMonthYear(item.date_publish) }}
								</td>
								<td class="p-3 text-sm text-gray-700">
									{{ item.description }}
								</td>
								<td
									class="flex items-center p-3 text-sm text-gray-700 whitespace-nowrap"
								>
									<NuxtLink :to="item.file"
										><Icon name="bi:cloud-download" size="18" /> Tải
										về</NuxtLink
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
					<div
						class="p-4 space-y-3 bg-white rounded-lg shadow"
						v-for="(item, index) in data"
						:key="index"
					>
						<div class="flex items-center space-x-2 text-sm">
							<div>
								<a href="#" class="font-bold text-blue-500 hover:underline">
									{{ item.issued_levels }}
								</a>
							</div>
							<div>
								<span
									class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50"
								>
									{{ item.number_of_symbol }}
								</span>
							</div>
							<div class="text-gray-500">
								{{ formatDateMonthYear(item.date_publish) }}
							</div>
						</div>
						<div class="text-sm text-gray-700">
							{{ item.description }}
						</div>
						<div class="flex items-center text-sm font-medium text-black">
							<NuxtLink :to="item.file"
								><Icon name="bi:cloud-download" size="18" /> Tải về</NuxtLink
							>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
