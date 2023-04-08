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
