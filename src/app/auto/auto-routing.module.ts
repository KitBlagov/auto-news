import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AutoFullComponent } from './components/auto-full/auto-full.component';

const routes: Routes = [
	{ path: '', component: PageMainComponent, children: [
		{ path: '', pathMatch: 'full', component: NewsListComponent },
		{ path: 'auto/:id', pathMatch: 'full', component: AutoFullComponent  }
	] }
]; 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
	exports: [
		RouterModule
	]
})
export class AutoRoutingModule { }
