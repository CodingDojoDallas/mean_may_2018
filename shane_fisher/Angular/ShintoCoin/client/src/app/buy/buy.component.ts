import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
  }

}
