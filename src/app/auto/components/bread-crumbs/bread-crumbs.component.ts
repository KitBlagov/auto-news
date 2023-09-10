import { Component, OnInit } from '@angular/core';
import { IBreadCrumbs } from './model/bread-crumbs';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

	public breadCrumbs: IBreadCrumbs[] = [];

	constructor(
		private router: Router
	) {
		
	}

	ngOnInit(): void {
		this.getRoutingChanges().subscribe(routingChanges => {
			this.breadCrumbs = this.getBreadCrumbs(routingChanges);
		})
	}


	private getBreadCrumbs(routingChanges: any): IBreadCrumbs[] {
		const routerEvent: NavigationEnd = routingChanges.routerEvent;
		const routerEventUrl = routerEvent.url;
		const breadCrumbs: IBreadCrumbs[] = [];
		
		if (routerEventUrl === '/') {
			breadCrumbs.push({ url: routerEventUrl, name: 'Главная' });
			
			return breadCrumbs;
		}
		
		const cutUrlArr = this.cutUrlIntoArr(routerEventUrl);
		const convertedCutUrlArrToBreadCrumbs = cutUrlArr.map((item) => {
			return {url: item, name: item};
		});

		breadCrumbs.push(
			{ url: '/', name: 'Главная' },
			...convertedCutUrlArrToBreadCrumbs
		);

		return breadCrumbs;
	}

	private cutUrlIntoArr(url: string): string[] {
		// получаем последний элемент после последнего `/`
		const cutUrl = url.split('/').pop();

		if (cutUrl === undefined) {
			return [];
		}

		// разделяем его на массив по символу `-` и удаляем первый элемент
    const cutArr = cutUrl.split(';')[0].split('-');

		return cutArr;
	}

	private getRoutingChanges() {
		return this.router.events.pipe(
			filter(event => (
				event instanceof Scroll
			))
		);
	}
}


