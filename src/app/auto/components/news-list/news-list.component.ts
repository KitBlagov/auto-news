import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListAutoNewsItem } from '../../interfaces/interfaces';
import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'auto-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
	public autoList$: Observable<ListAutoNewsItem[]> = this.autoService.autoList$;

	constructor(
		private autoService: AutoService
	) {}

	ngOnInit(): void {
		this.autoService.getFirstPage(10).subscribe();
		// this.autoList$.subscribe(console.log);
	}
}
