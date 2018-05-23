import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title:string;
  price:string;
  image:string;
  errors:any[]=[];
  constructor(private _http:HttpService) {}
  ngOnInit() {
  	this.errors=[]
  }
  create(){
  	this.errors=[]
  	let product = {title:this.title,price:this.price}
  	if (this.image && this.image.length > 5){
  		product['image']= this.image
  	}
  	let observable = this._http.create(product)
  	observable.subscribe(data => {
  		console.log("got this",data)
  		if(data.errors){
  			for (let x in data.errors){
	  			this.errors.push(data.errors[x].message)
  				
  			}
  		}
  		else{
  			this._http.getList()
	  		this._http.goHome()
	  	}
  	})
  }

}
