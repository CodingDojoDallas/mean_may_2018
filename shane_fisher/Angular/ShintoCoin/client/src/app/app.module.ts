import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { ShintoService } from './shinto.service'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    BuyComponent,
    SellComponent,
    BrowseComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    ShintoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
