import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { 
  	// this.getTasks();
  	// this.createTasks();
  	// this.showTasks();
  }

	getTasks(){
	    // let tempObservable = this._http.get('/tasks');
	    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
	    return this._http.get('/tasks');
 }

	createTasks(){
	//     let tempObservable = this._http.get('/tasks/:title');
	//     tempObservable.subscribe(data => console.log("Create new task", data));
		return this._http.get('/tasks/:title');
 }
 	showTask(){
	//     let tempObservable = this._http.get('/task/:id');
	//     tempObservable.subscribe(data => console.log("Show task", data));
 // }
 		return this._http.get('/task/:id');
}

}