import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoNewsItem, ListAutoNews } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

console.log();


@Injectable({
  providedIn: 'root'
})
export class AutoHttpService {

	private newsListUrl: string = 'https://webapi.autodoc.ru/api/news';
	private listItemUrl: string = 'https://webapi.autodoc.ru/api/news/item';

	constructor(
		private http: HttpClient 
	) { }

	public getListAutoNews(page: number, quantity: number): Observable<ListAutoNews> {
		const url = `${this.newsListUrl}/${page}/${quantity}`;
		
		return this.http.get<ListAutoNews>(url);
	}

	public getAutoNewsItem(miniUrl: string): Observable<AutoNewsItem> {
		const url = `${this.listItemUrl}/${miniUrl}`;

		return this.http.get<AutoNewsItem>(url)
	}

}
