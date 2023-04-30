interface Article {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	body: any[];
	image: {
		url: string;
	};
	datetime: string;
	summary: string;
}

interface Category {
	_id: string;
	title: string;
	description: string;
	icon: string;
	color: {
		hex: string;
	};
	articles: Article[];
}

export const getCategory = async (params: string): Promise<Category> => {
	const categoryQuery = `*[_type == "category" && slug.current == $slug][0]{
	  _id,
	  title,
	  color,
	  description,
	  icon,
	  "articles": *[_type == "article" && references(^._id)]{
		_id,
		title,
		slug,
		body,
		"image": image.asset -> { url, altText },
		datetime,
		summary  // Thêm thuộc tính summary vào đây
	  }
	}`;
	const data = await useSanity().fetch<Category>(categoryQuery, {
		slug: params,
	});
	data.articles.forEach((article: Article) => {
		article.summary = generateSummary(article.body[0]?.children[0]?.text, 100); // Cắt đoạn văn bản và gán vào thuộc tính summary
	});
	return data;
};

export const generateSummary = (body: string, maxLength: number): string => {
	const strippedBody = body.replace(/(<([^>]+)>)/gi, "");
	const summary = strippedBody.substring(0, maxLength).trim();
	const lastWordIndex = summary.lastIndexOf(" ");
	const finalSummary = `${summary.substring(0, lastWordIndex)} ...`;

	return finalSummary;
};

export const getDateCategory = (datetime: string) => {
	const formatter = new Intl.DateTimeFormat("vi-VN", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return formatter.format(new Date(datetime));
};
