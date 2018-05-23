import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
	{path:'home', component: HomeComponent},
	{path:'buy', component: BuyComponent},
	{path:'sell', component: SellComponent},
	{path:'mine', component: MineComponent},
	{path:'ledger', component: LedgerComponent},
	{path:'transaction/:id', component: ShowComponent},
	{path:'', pathMatch:'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
