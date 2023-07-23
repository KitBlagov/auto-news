import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { AutoRoutingModule } from './auto-routing.module';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AutoFullComponent } from './components/auto-full/auto-full.component';
import { AutoMiniComponent } from './components/auto-mini/auto-mini.component';
import { HtmlPipe } from './pipes/html.pipe';

@NgModule({
  declarations: [
    PageMainComponent,
    NewsListComponent,
    AutoFullComponent,
    AutoMiniComponent,
		HtmlPipe
  ],
  imports: [
    CommonModule,
		AutoRoutingModule
  ]
})
export class AutoModule { }
