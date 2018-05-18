import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Bike } from '../bike'

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
	bike:Bike;
	errors:any;
	mybikes:any;
  constructor(private _http:HttpService) { }

  ngOnInit() {
  	this.bike = new Bike()
  	if(!this._http.userid){
  		this._http.goLogin()
  	}
  	this.mybikes=[]
  	this.getMyBikes()
  }
  addBike(e){
  	e.preventDefault()
  	this.errors=[]
  	let observable = this._http.addBike(this.bike)
  	observable.subscribe(
  		(data)=>{
  			console.log("success",data)
  			this._http.getBikes()
  			this._http.goHome()
  		},
  		(err)=>{
  			console.log("error",err)
  			for (let x in err.error){
  				this.errors.push(err.error[x].message)
  			}
  		})
  }
  getMyBikes(){
  	for ( let bike of this._http.bikes){
  		console.log(bike)
  		if(bike.user == this._http.userid){
  			this.mybikes.push(bike)
  		}
  	}
  }
  edit(bike){
  	console.log(bike)
  	this.bike=bike
  }
}
