import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponentComponent } from './seattle-component/seattle-component.component';
import { SanJoseComponentComponent } from './san-jose-component/san-jose-component.component';
import { BurbankComponentComponent } from './burbank-component/burbank-component.component';
import { DallasComponentComponent } from './dallas-component/dallas-component.component';
import { WashingtonComponentComponent } from './washington-component/washington-component.component';
import { ChicagoComponentComponent } from './chicago-component/chicago-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponentComponent,
    SanJoseComponentComponent,
    BurbankComponentComponent,
    DallasComponentComponent,
    WashingtonComponentComponent,
    ChicagoComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
