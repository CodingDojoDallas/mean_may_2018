import { BurbankComponentComponent } from './burbank-component/burbank-component.component';
import { SeattleComponentComponent } from './seattle-component/seattle-component.component';
import { SanJoseComponentComponent } from './san-jose-component/san-jose-component.component';
import { DallasComponentComponent } from './dallas-component/dallas-component.component';
import { WashingtonComponentComponent } from './washington-component/washington-component.component';
import { ChicagoComponentComponent } from './chicago-component/chicago-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'burbank', component: BurbankComponentComponent},
  { path: 'seattle', component: SeattleComponentComponent },
  { path: 'san_jose', component: SanJoseComponentComponent },
  { path: 'dallas', component: DallasComponentComponent },
  { path: 'washington', component: WashingtonComponentComponent },
  { path: 'chicago', component: ChicagoComponentComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dallas' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
