import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path:'',pathMatch:'full',component: HomeComponent},
	{ path: 'products', component: ProductsComponent, children:[
		{ path: 'new',component: NewComponent}]
	},
	{ path: 'products/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
