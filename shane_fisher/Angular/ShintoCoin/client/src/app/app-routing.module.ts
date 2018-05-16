import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { BrowseComponent } from './browse/browse.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from "./sell/sell.component";
import { ShowComponent } from "./show/show.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'buy', component: BuyComponent },
  { path: 'ledger', component: BrowseComponent},
  { path: 'mine', component: MineComponent},
  { path: 'sell', component: SellComponent},
  { path: 'transaction/:id', component: ShowComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
