import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	bikes:any[];
	search:string
	results:any;
  constructor(private _http:HttpService) { }

  ngOnInit() {
  	this.search=""
  	this._http.getBikes()
  	if(!this._http.userid){
  		this._http.goLogin()
  	}
  	console.log(this._http.userid)
  }
  getSearch(){
  	if(this.search == ""){
  		this._http.getBikes()
  	}
  	else {
	  	this._http.search(this.search)
  	}
  }
}
