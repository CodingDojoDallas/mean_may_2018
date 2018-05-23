import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private _http: HttpClient) {
   }

  allTasks() {
    // let tempObservable = this._http.get("/tasks");
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  createTasks(create) {
    let data = create;
    let tempObservable = this._http.post("/tasks", data);
    tempObservable.subscribe(data => console.log("Created task!", data));
  }
  oneTasks(id) {
    let tempObservable = this._http.get("/tasks/" + id);
    tempObservable.subscribe(data => console.log("One task!", data));
  }
  deleteTasks(id) {
    let tempObservable = this._http.delete("/tasks/" + id);
    tempObservable.subscribe(data => console.log("Deleted task!", data));
  }
  updateTasks(id, data) {
    let tempObservable = this._http.patch("/tasks/" + id, data);
    tempObservable.subscribe(data => console.log("Updated task!", data));
  }
}
          