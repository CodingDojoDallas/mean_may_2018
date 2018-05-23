import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
  }

  allTasks() {
    let tempObservable = this._http.get("/tasks");
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // return this._http.get('/tasks'); replaced this line from Matts video with the above 2 lines from the platform
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

// getTasks() {
//   let Observable = this._taskService.allTasks();
//   Observable.subscribe(tasks => {
//     this.tasks = tasks;
//   });
// }
