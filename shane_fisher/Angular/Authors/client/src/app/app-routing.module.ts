import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'quotes', component: QuotesComponent},
  { path: 'new', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/quotes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
