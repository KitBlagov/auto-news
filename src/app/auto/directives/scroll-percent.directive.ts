import { Directive, ElementRef, HostListener, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Directive({
	selector: '[scrolled]'
})
export class ScrollPercentDirective implements OnInit {
	@Input() scrollPercent: number = 0;

	constructor(
	) { }

	ngOnInit(): void {

		// поменять и слушать событие по ангуляровски

		document.addEventListener('scroll', () => {
				const percent = this.calcScrollPercent(document.documentElement);

				this.scrollPercent = percent;
		});

	}

	private calcScrollPercent(domNode: HTMLElement): number {
		const scrollHeight = domNode.scrollHeight;
		const clientHeight = domNode.clientHeight;
		const scrollTop = domNode.scrollTop;
		const maxScrollTop = scrollHeight - clientHeight;
		const percent = scrollTop / maxScrollTop;

		return percent;
	}

}
