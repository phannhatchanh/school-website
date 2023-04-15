<script setup lang="ts">
const { articles } = await getArticles(4);
const schoolname = await getSetting();
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>{{ item.name }} {{ item.district }}</Title>
	</Head>

	<SchoolBanner />
	<section>
		<HeadingPageH2 title="Truy cập nhanh" />
		<Grid>
			<CategoryButton
				title="Giới thiệu"
				description="Chúng tôi là ai?"
				path="/gioi-thieu"
				:targetBlank="false"
			/>
			<CategoryButton
				title="Tổ chức"
				description="Cơ cấu tổ chức nội bộ trong nhà trường."
				path="/nha-truong"
				:targetBlank="false"
			/>
			<CategoryButton
				title="Tuyển sinh"
				description="Thông tin về tuyển sinh hàng năm của nhà trường"
				path="/tuyen-sinh"
				:targetBlank="false"
			/>
			<CategoryButton
				title="Chế độ của học sinh"
				description="Những thông tin về chế độ của học sinh được hưởng khi tham gia học tại trường"
			/>
		</Grid>
	</section>
	<section>
		<div>
			<div class="flex flex-row items-baseline justify-between">
				<div class="]">
					<HeadingPageH2 title="Bài viết mới nhất" />
				</div>
				<span
					class="text-xs uppercase font-semibold text-center justify-center"
				>
					<NuxtLink title="Xem nhiều hơn" to="/posts/page/1">
						Xem thêm <Icon name="mdi:chevron-right" size="20" class="mb-1" />
					</NuxtLink>
				</span>
			</div>
			<div
				class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
			>
				<ArticleCard
					v-for="article in articles"
					:article="article"
					:key="article.slug"
				/>
			</div>
			<!-- <div class="show-more">
				<Button to="/posts/page/1" class="btn">Xem nhiều hơn</Button>
			</div> -->
		</div>
	</section>
	<section>
		<HeadingPageH2 title="Hướng dẫn của chúng tôi" />
		<Grid>
			<Major
				tag="từ khóa 1"
				title="Tiêu đề bài viết số 1"
				description="Đoạn mô tả ngắn cho bài viết số 1"
				extenstions="Mảnh ghép thứ 1"
			/>
			<Major
				tag="từ khóa 2"
				title="Tiêu đề bài viết số 2"
				description="Đoạn mô tả ngắn cho bài viết số 2"
				extenstions="Mảnh ghép thứ 2"
			/>
		</Grid>
	</section>
	<section>
		<HeadingPageH2 title="Bạn có thể tìm chúng tôi ở đâu?" />
		<iframe
			src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=TRƯỜNG PTDTNT-THCS-HUYỆN CÀNG LONG, Ấp Lưu Tư, Huyền Hội, Càng Long, Trà Vinh&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
			width="100%"
			height="450"
			style="border: 0"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</section>
</template>

<style lang="scss" scoped>
section {
	margin: 2em 0;
}

.show-more {
	display: grid;
	place-items: center;

	.btn {
		padding: 0.6em;
		margin: 0.5em;
	}
}
</style>
