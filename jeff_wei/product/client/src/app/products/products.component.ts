import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _http:HttpService) {
   }

  ngOnInit() {
  	this._http.getList()
  }
  
  destroy(product){
  	let observable =this._http.destroy(product)
  	observable.subscribe(data =>{this._http.getList()})
  }

}
