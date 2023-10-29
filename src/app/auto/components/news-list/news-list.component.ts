import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable, filter, switchMap, tap, delay, delayWhen, of, takeWhile, debounceTime } from 'rxjs';
import { ListAutoNewsItem } from '../../interfaces/interfaces';
import { AutoService } from '../../services/auto.service';
import { ScrollPercentService } from '../../services/scroll-percent.service';

@Component({
  selector: 'auto-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges {
	private isLoading: boolean = false;
	public autoList$: Observable<ListAutoNewsItem[]> = this.autoService.autoList$;

	/**
	 * Поток данных, который испускает значения, когда процент прокрутки браузера больше 0.9
	 */
	private scrollPercentRender$ = this.scrollPercentService.scrollPercent$
	.pipe(
		filter(scrollPercent => scrollPercent > 0.9),
		filter(() => !this.isLoading),
		// takeWhile(() => !this.isLoading),
		// delay(1000)
		debounceTime(200),
		switchMap(scrollPercent => {
			this.isLoading = true;
			return this.autoService.getNextPage();
		}),
		tap(() => {
			this.isLoading = false;
		})
	);

	constructor(
		private autoService: AutoService,
		private scrollPercentService: ScrollPercentService
	) {}

	ngOnInit(): void {
		this.autoService.getFirstPage(10).subscribe();

		this.scrollPercentRender$
		.subscribe();
		// .subscribe((percent) => {

		// });



		// this.autoList$.subscribe(console.log);
	}

	ngOnChanges(): void {


	}
}
