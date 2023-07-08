export interface ListAutoNews {
	news: ListAutoNewsItem[];
	totalCount: number;
}

export interface ListAutoNewsItem {
	id: number;
	title: string;
	description: string;
	publishedDate: Date;
	url: string;
	fullUrl: string;
	titleImageUrl: string;
	categoryType: string;
}

export interface AutoNewsItem {
	id: number; 
	title: string;
	description: string;
	text: string;
	publishedDate: Date;
	url: string;
	fullUrl: string;
	titleImageUrl: string;
	categoryType: string;
}

export interface OptionsAutoService {
	quantity: number;
	page: number;
}