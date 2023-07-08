import { Component, Input } from '@angular/core';
import { ListAutoNewsItem } from '../../interfaces/interfaces';

@Component({
  selector: 'auto-auto-mini',
  templateUrl: './auto-mini.component.html',
  styleUrls: ['./auto-mini.component.scss']
})
export class AutoMiniComponent {
	@Input('auto') public auto: ListAutoNewsItem | null = null;
}
