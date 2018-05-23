import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	balance:number;
	history:any;
  constructor(private _http: HttpClient) {
  	this.balance=0
   	this.history=[]
   }
   ngOnInit(){
   }
   randomID(){
   	return Math.floor(Math.random()*9999)+1
   }

}
