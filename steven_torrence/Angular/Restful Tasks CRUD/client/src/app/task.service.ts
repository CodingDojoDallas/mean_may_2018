import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http: HttpClient){}

  allTasks(){
    return this._http.get('/tasks');
  }

  addTask(newTask){
    return this._http.post('/tasks', newTask);
  }

  updateTask(thisTask){
    console.log(thisTask)
    return this._http.patch(`/tasks/${thisTask._id}`, thisTask);
  }

  deleteTask(thisTask){
    return this._http.delete(`tasks/${thisTask._id}`, thisTask);
  }
}
