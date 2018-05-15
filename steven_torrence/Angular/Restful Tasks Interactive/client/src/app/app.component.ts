import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks: any = [];
  task;

  // Injectable
  constructor(private _taskService: TaskService){}

  getTasks(){
    let observable = this._taskService.allTasks();
    observable.subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks)
    });
  }

  info(idx){
    this.task = this.tasks[idx];
  }
}
