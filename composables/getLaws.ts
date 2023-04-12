interface Laws {
	issued_levels: string;
	number_of_symbol: string;
	date_publish: string;
	description: string;
	file: string;
}
export const getLaws = async (): Promise<Laws[]> => {
	const query = groq`*[_type=="laws"]{issued_levels, number_of_symbol, date_publish, description, file}`;
	const data = useSanity().fetch<Laws[]>(query);

	return data;
};

export const formatDateMonthYear = (datetime: string) => {
	const formatter = Intl.DateTimeFormat("vi-VN", {
		// weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return formatter.format(new Date(datetime));
};
