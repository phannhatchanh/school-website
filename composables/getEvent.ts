interface Event {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
}

export const getEvent = async (): Promise<Event[]> => {
	const query = groq`*[_type=="event"]{title, description, startDate, endDate}`;
	const data = useSanity().fetch<Event[]>(query);

	return data;
};

export const getDateFromEnvent = (datetime: string) => {
	const formatter = Intl.DateTimeFormat("vi-VN", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return formatter.format(new Date(datetime));
};
