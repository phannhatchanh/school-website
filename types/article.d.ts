declare interface Article {
	title: string;
	slug: string;
	category: {
		title: string;
		slug: string;
		color: string;
	};
	image?: {
		url: string;
		altText: string;
	};
	showTitleImage: boolean;
	body: any[];
	datetime: string;
}
