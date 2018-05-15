import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  tasks: any = [];
  task;
  newTask: any;
  thisTask: any;

  // Injectable
  constructor(private _taskService: TaskService){
  }

  ngOnInit(){
    this.newTask = {title: "", description: ""}
    this.thisTask = {id: "", title: "", description: ""}
  }

  getTasks(){
    let observable = this._taskService.allTasks();
    observable.subscribe((tasks) => {
      // console.log(tasks)
      this.tasks = tasks;
      console.log(this.tasks)
    });
  }

  // info(idx){
  //   this.task = this.tasks[idx];
  // }

  edit(task){
    this.thisTask = {
      _id: task._id,
      title: task.title,
      description: task.description
    }
  }

  delete(thisTask){
    let observable = this._taskService.deleteTask(thisTask);
    observable.subscribe(data => {console.log("Got data back from delete!", data);
    });
  }

  onEdit(thisTask, event){
    event.preventDefault();
    let observable = this._taskService.updateTask(thisTask);
    observable.subscribe(data => {console.log("Got data back from update!", data);
    });
  }

  onSubmit(){
    let observable = this._taskService.addTask(this.newTask);
    observable.subscribe(data => {console.log("Got data from POST back", data);
    this.newTask = { title: "", description: ""}
    });
  }
}
