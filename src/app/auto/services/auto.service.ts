import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, tap } from 'rxjs';
import { ListAutoNews, ListAutoNewsItem, OptionsAutoService } from '../interfaces/interfaces';
import { AutoHttpService } from './auto-http.service';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

	private _behSubjListAuto: BehaviorSubject<ListAutoNewsItem[]> = new BehaviorSubject<ListAutoNewsItem[]>([]);
	public autoList$: Observable<ListAutoNewsItem[]> = this._behSubjListAuto.asObservable(); // хранятся автомобили для списка новостей
	private _options: OptionsAutoService = {
		page: 1,
		quantity: 10
	};
	private _initedPage: boolean = false;

  constructor(
		private autoHttpService: AutoHttpService
	) { }

	public getFirstPage(quantity: number): Observable<ListAutoNews> {
		return this.autoHttpService.getListAutoNews(1, quantity)
			.pipe(
				tap((listAuto) => {
					this._options = {
						quantity: quantity,
						page: 1
					};
					this._behSubjListAuto.next(listAuto.news);
					this._initedPage = true;
				})
			)
	}

	public getNextPage(): Observable<ListAutoNews> {
		if (this._initedPage === false) throw new Error('Не запрошена первая страница');

		const nextPage = this._options.page + 1;

		return this.autoHttpService.getListAutoNews(nextPage, this._options.quantity)
		.pipe(
			tap((listAuto) => {
				const lastListAutoNews = this._behSubjListAuto.value;
 				const nextListAutoNews = [...lastListAutoNews, ...listAuto.news];

 				this._behSubjListAuto.next(nextListAutoNews);
				this._options.page = nextPage;
			})
		)
	}

	public getOptions(): OptionsAutoService | null {
		if (this._initedPage === false) return null;
		// return Object.assign({}, this._options);
		return {
			...this._options
		};
	}

}
