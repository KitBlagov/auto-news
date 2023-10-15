import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollPercentService {
	private scrollPercentSubj: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	public scrollPercent$: Observable<number> = this.scrollPercentSubj.asObservable();

  constructor() {
		this.initEventListener();
	}

	private initEventListener(): void {
		document.addEventListener('scroll', () => {
			const percent = this.calcScrollPercent(document.documentElement);

			this.scrollPercentSubj.next(percent);
		});
	}

	private calcScrollPercent(domNode: HTMLElement): number {
		const scrollHeight = domNode.scrollHeight;
		const clientHeight = domNode.clientHeight;
		const scrollTop = domNode.scrollTop;
		const maxScrollTop = scrollHeight - clientHeight;
		const percent = scrollTop / maxScrollTop;
		const roundedPercent = Math.round(percent * 1000) / 1000;

		return roundedPercent;
	}


}
