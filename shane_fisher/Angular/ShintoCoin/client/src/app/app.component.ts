import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ShintoService } from './shinto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _httpService: HttpService, private _shintoService: ShintoService) { }
}
