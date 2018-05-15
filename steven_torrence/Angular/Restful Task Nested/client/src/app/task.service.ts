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

}
