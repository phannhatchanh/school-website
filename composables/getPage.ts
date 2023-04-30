export const getPageFromPath = (path: string[]) => {
	const query = groq`*[_type=="page" && path==$path][0]{
		title,
		body,
		path
	}`;
	const data = useSanity().fetch<{
		body: any[];
		path: string;
		title: string;
	}>(query, {
		path:
			"/" +
			path
				.filter((a) => a.length != 0)
				.map((a) => a.toLowerCase())
				.join("/"),
	});
	return data;
};
