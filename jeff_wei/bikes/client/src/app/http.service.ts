import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute,Params,Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	userid:any;
	bikes:any;
	constructor(
		private _http: HttpClient,
		 private _router: Router,
		 private _route: ActivatedRoute
		 ) {}

	ngOnInit(){
		this.getUser()
	}

	goHome(){
		this._router.navigate(['/browse'])
	}
	goLogin(){
		this._router.navigate(['/'])
	}
	create(user){
		return this._http.post('/api/users',user)
	}
	login(data){
		let user = {email:data.email,password:data.password}
		return this._http.post('/api/login',user)
	}
	logout(){
		let observable = this._http.post('/api/logout',this.userid)
		observable.subscribe(data=>{
			this.userid=null
			this._router.navigate(['/'])
		})
	}
	getBikes(){
		let observable = this._http.get('/api/bikes')
		observable.subscribe((data)=>{
			this.bikes= data
		})
	}
	addBike(bike){
		bike['user']=this.userid
		console.log(bike)
		return this._http.post('/api/bikes',bike)
	}
	getUser(){
		let observable= this._http.get('/api/id')
		observable.subscribe(
			(data)=>{
				this.userid=data.id
			},
			(err)=>{
				console.log(err.err)
				this.userid=null
			})
	}
	search(word){
		let observable = this._http.post('/api/search',{search:word})
		observable.subscribe((data)=>{
			this.bikes = data.bikes
		})
	}
}
