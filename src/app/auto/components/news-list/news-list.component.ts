import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ListAutoNewsItem } from '../../interfaces/interfaces';
import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'auto-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges {
	public autoList$: Observable<ListAutoNewsItem[]> = this.autoService.autoList$;
	private _scrollPercent!: number;
	public set scrollPercent(value: number) {
		this._scrollPercent = value;
		console.log(this._scrollPercent);
	};
	public get scrollPercent(): number {
		return this._scrollPercent;
	}

	constructor(
		private autoService: AutoService
	) {}

	ngOnInit(): void {
		this.autoService.getFirstPage(10).subscribe();
		// this.autoList$.subscribe(console.log);
	}

	ngOnChanges(): void {
		console.log(this.scrollPercent);

	}
}
