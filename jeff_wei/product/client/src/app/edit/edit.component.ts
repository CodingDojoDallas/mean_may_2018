import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute,Params } from '@angular/router'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	title:string,
	price:string;
	image:string;
	errors:any[]=[]
	id:any;
  constructor(private _http:HttpService, private _route: ActivatedRoute) { 
	this._route.params.subscribe((params: Params) => {
		this.id= params['id']
		console.log(this.id)
	  	let observe = this._http.show(this.id)
	  	observe.subscribe(data =>{
	  		console.log(data)
	  		this.title=data.title
	  		this.price=data.price
	  		this.image=data.image
	  	})
	})
  }

  ngOnInit() {
  	this.errors=[]
  }
  update(){
  	this.errors=[]
  	let product= {title:this.title,price:this.price,image:this.image,_id:this.id}
  	let observable = this._http.update(product)
  	observable.subscribe(data => {
  		if(data.errors){
  			for (let x in data.errors){
	  			this.errors.push(data.errors[x].message)
  			}
  		}
  		else{
        console.log('success')
  			this._http.goHome()
  		}
  	})
  }
}
