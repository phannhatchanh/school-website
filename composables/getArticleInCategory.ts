interface Category {
	_id: string;
	title: string;
	color: {
		hex: string;
	};
	slug: {
		current: string;
	};
	articles: {
		article: {
			_id: string;
			title: string;
			slug: string;
			image: string;
			datetime: string;
		};
		length: any;
	};
}
export const getArticleInCategory = async (): Promise<Category[]> => {
	const query = groq`*[_type == "category"] {
        _id,
        title,
		color,
		slug,
        "articles": *[_type == "article" && references(^._id)] {
          title,
          slug,
          "image": image.asset -> { url, altText },
          datetime
        }[0...4] //Lấy tối đa 4 bài viết
      }`;
	const data = useSanity().fetch<Category[]>(query);

	return data;
};

export const getDateArticleInCategory = (datetime: string) => {
	const formatter = new Intl.DateTimeFormat("vi-VN", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return formatter.format(new Date(datetime));
};
