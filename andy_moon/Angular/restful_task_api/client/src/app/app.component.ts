import { Component } from "@angular/core";
import { TaskService } from "./task.service";
import { Task } from "./task";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  tasks: Task[] = [];
  task: Task;
  //Injectable
  constructor(private _taskService: TaskService) {
    // this.task = new Task();
  }
  // getTasks() {
  //   let Observable = this._taskService.allTasks();
  //   Observable.subscribe(tasks => {
  //     this.tasks = tasks;
  //   });
  // }
  info(task) {
    this.tasks = task;
  }
}
