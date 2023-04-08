<script setup lang="ts">
const { articles } = await getArticles(4);
const schoolname = await getSetting();
</script>

<template>
	<Head v-for="(item, index) in schoolname" :key="index">
		<Title>{{ item.name }} {{ item.district }}</Title>
	</Head>
	<main>
		<SchoolBanner />
		<section>
			<h2>Truy cập nhanh</h2>
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
				<h2>
					<NuxtLink to="/posts">
						Bài viết mới nhất
						<Icon name="mdi:chevron-right" size="30" />
					</NuxtLink>
				</h2>
				<div
					class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
				>
					<ArticleCard
						v-for="article in articles"
						:article="article"
						:key="article.slug"
					/>
				</div>
				<div class="show-more">
					<Button to="/posts/page/1" class="btn">Xem nhiều hơn</Button>
				</div>
			</div>
		</section>
		<section>
			<h2>Hướng dẫn của chúng tôi</h2>
			<Grid>
				<Major
					tag="LICEUM"
					title="Akademicka Szkoła Politechniczna"
					description="Wydaje mi się, że nudne, ale możesz przyjść"
					extenstions="Matematyka i fizyka albo chemia"
				/>
				<Major
					tag="LICEUM"
					title="Klasa Bezpieczeństwa Publicznego"
					description="Jak lubisz mundury :D"
					extenstions="Geografia i WOS"
				/>
				<Major
					tag="LICEUM"
					title="Klasa Pedagogiczna"
					path="/"
					description="Interesujesz się psychologią bądź pedagogiką?"
					extenstions="Język polski i biologia"
				/>
				<Major
					tag="LICEUM"
					title="Klasa Rehabilitacyjno-Medyczna"
					path="/"
					description="Wyleczymy Cię z Twoich problemów :P"
					extenstions="Biologia i chemia"
				/>
				<Major
					tag="LICEUM"
					title="Klasa Geograficzno-Językowa"
					path="/"
					description="Niemiecki, Hiszpański, Angielski? Wybieraj"
					extenstions="Geografia i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Technologii Chemicznej"
					path="/"
					description="Zawsze wlewaj kwas do wody!"
					extenstions="Chemia i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Ekonomista"
					path="/"
					description="Kiedy lubisz liczyć pieniążki"
					extenstions="Matematyka i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Hotelarstwa"
					path="/"
					description="Szczerze, nie wiem co tu napisać"
					extenstions="Geografia i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Programista"
					path="/"
					description="Dla miłośników parzenia kawy"
					extenstions="Matematyka i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Informatyk"
					path="/"
					description="Klasowy informatyk? Tu jest twoje miejsce"
					extenstions="Matematyka i język obcy"
				/>
			</Grid>
		</section>
		<section>
			<h2>Bạn có thể tìm chúng tôi ở đâu?</h2>
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
	</main>
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
