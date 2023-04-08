interface Setting {
	banner?: {
		url: string;
		altText: string;
	};
	name: string;
	district: string;
	province: string;
	address: string;
	email: string;
	phone: string;
}

export const getSetting = async (): Promise<Setting[]> => {
	const query = groq`*[_type=="setting"]{"banner": banner.asset -> { url, altText }, name, district, province, address, email, phone}`;
	const data = await useSanity().fetch<Setting[]>(query);

	return data;
};
