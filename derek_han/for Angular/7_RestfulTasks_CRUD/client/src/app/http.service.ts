import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { 

  }

	getTasks(){
	    return this._http.get('/tasks');
 	}
 
	addTask(newtask){
		return this._http.post('/tasks', newtask)
	}

	deleteTasks(task){
		console.log("in service.ts", task);
		return this._http.delete(`/tasks/${task._id}`, task)
	}

	editTasks(editTask){
		console.log("Edit in service.ts", editTask._id);
		return this._http.patch(`/tasks/${editTask._id}`, editTask)
	}
}