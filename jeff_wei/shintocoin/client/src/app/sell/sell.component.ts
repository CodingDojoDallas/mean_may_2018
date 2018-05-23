import { Component, OnInit } from '@angular/core';
import {HttpService } from '../http.service'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
	balance:number;
	amount:number;
	error:boolean;
  constructor(private _http: HttpService) {}
  ngOnInit() {
  	this.balance = this._http.balance
  	this.error= false
  }
  sell(){
  	console.log(this.amount,this.balance)
  	if(this.amount <= this.balance){

  		this.balance -= this.amount
  		this._http.balance= this.balance
  		this.error=false
	    this._http.history.push({id:this._http.randomID(), amount:this.amount, balance:this.balance, action:"Sell"})
  		this.amount=0
  	}
  	else{
  		this.error=true	
  	}
  		console.log(this.error)
  }
}
