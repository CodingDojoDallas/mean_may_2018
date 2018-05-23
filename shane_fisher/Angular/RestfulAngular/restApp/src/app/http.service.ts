import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
   }

  getTasks() {
  
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks')
  };

  getOneTask(task_id) {
    // let tempObservable = this._http.get('/tasks/5af4c834665df139a95d46ab');
    // tempObservable.subscribe(data => console.log("Got a specific task!", data));

    return this._http.get('/tasks/'+task_id)
  };

  addTask(newtask) {
    return this._http.post('/tasks', newtask)
  };

  editTask(task) {
    return this._http.put('/tasks/'+task._id+'/edit', task)
  };

  deleteTask(task_id) {
    return this._http.delete('/tasks/'+task_id)
  };

}
