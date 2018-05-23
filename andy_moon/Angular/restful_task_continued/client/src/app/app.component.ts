import { Component, OnInit } from "@angular/core";
import { TaskService } from "./task.service";
import { Task } from "./task";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  tasks:any;
  task:any;
  // num: number;
  // randNum: number;
  // str: string;
  // first_name: string;

  // snacks: string[];
  // loggedIn: boolean;

  //Injectable
  constructor(private _taskService: TaskService) {
    this.task = new Task();
  }
  ngOnInit() {
    // this.num = 7;
    // this.randNum = Math.floor(Math.random() * 2 + 1);
    // this.str = "Hello Angular Developer!";
    // this.first_name = "Alpha";
    // this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    // this.loggedIn = true;
    // this.getTasksFromService();
  }
  getTasksFromService() {
    let observable = this._taskService.allTasks();
    observable.subscribe(data => {
      console.log("Got your data", data);
      this.tasks = data;
    });
  }
  info(task) {
    this.task = task;
  }
}
