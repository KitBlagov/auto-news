import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { AutoRoutingModule } from './auto-routing.module';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AutoFullComponent } from './components/auto-full/auto-full.component';
import { AutoMiniComponent } from './components/auto-mini/auto-mini.component';
import { HtmlPipe } from './pipes/html.pipe';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TUI_SANITIZER } from "@taiga-ui/core";
import { TuiButtonModule } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

@NgModule({
	declarations: [
		PageMainComponent,
		NewsListComponent,
		AutoFullComponent,
		AutoMiniComponent,
		HtmlPipe,
		BreadCrumbsComponent,
		SpinnerComponent
	],
	imports: [
		CommonModule,
		AutoRoutingModule,
		TuiButtonModule,
	],
	providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AutoModule { }
