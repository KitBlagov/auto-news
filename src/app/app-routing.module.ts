import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./auto/auto.module').then(m => m.AutoModule) }, // ленивая загрузка, мы импортируем наш модуль
	{ path: '**', redirectTo: '', pathMatch: 'full' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
