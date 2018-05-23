import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
	balance:number;
	amount:number;
  constructor(private _http: HttpService) {}

  ngOnInit() {
  	this.balance = this._http.balance;
  }
  buy(){
  	this.balance += this.amount
  	this._http.balance = this.balance
    let id=this._http.randomID()
    console.log(id)
    event= {id:id, amount:this.amount, balance:this.balance, action:"Buy"}
    console.log(event)
    this._http.history.push(event)
    this.amount = 0

  }
}
