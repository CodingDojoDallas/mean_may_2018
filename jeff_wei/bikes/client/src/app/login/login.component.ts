import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user:User;
	loginuser:User;
	errors:any;
	pwconfirm:string;
  constructor(private _http:HttpService) {
   }

  ngOnInit() {
  	this.user = new User();
  	this.loginuser = new User();
  	this.pwconfirm="";
  }
  register(e){
  	e.preventDefault()
  	this.errors=[]
  	if(this.pwconfirm != this.user.password){
  		this.errors.push("Passwords do not match")
  		this.pwconfirm=""
  		this.user.password=""
  		return
  	}
  	let observable = this._http.create(this.user)
  	observable.subscribe(
  		(data) => {
  			this._http.userid = data.id
  			this._http.goHome()
  		},
  		(err)=>{
  			for (let x in err.error){
  				this.errors.push(err.error[x].message)
  			}
  		})
  }
  login(e){
  	e.preventDefault()
  	this.errors=[]
  	let observable = this._http.login(this.loginuser)
  	observable.subscribe(
  		(data)=>{
        console.log(data)
  			this._http.userid = data.id
        console.log("USERID"+this._http.userid)
  			this._http.goHome()
  		},
  		(err)=>{
  			for (let x in err.error){
  				this.errors.push(err.error[x].message)
  			}
  		})
  }
}
