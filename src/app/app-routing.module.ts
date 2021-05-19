import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'Search', component: SearchComponent},
  {path:'About', component: AboutComponent},
  {path:'News', component: NewsComponent},
  

  { path: '**', redirectTo: '' },   /* default route it will show the main page if something has no route */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
