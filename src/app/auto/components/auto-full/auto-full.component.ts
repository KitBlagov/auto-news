import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoHttpService } from '../../services/auto-http.service';
import { Observable, tap } from 'rxjs';
import { AutoNewsItem } from '../../interfaces/interfaces';

@Component({
  selector: 'app-auto-full',
  templateUrl: './auto-full.component.html',
  styleUrls: ['./auto-full.component.scss']
})
export class AutoFullComponent implements OnInit  {

	private miniUrl: string = this.route.snapshot.paramMap.get('id')!;
	public autoNewsItem$: Observable<AutoNewsItem> = this.autoHttpService.getAutoNewsItem(this.miniUrl);
	
	constructor(
		private route: ActivatedRoute,
		private autoHttpService: AutoHttpService
	) { }

	ngOnInit(): void {

	}
	
}
