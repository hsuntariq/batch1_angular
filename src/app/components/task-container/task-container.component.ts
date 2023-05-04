import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TASK } from 'src/TASK';
import { TASKS } from 'src/TASKS';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {
  tasks: TASK[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }
  onDelete(task: any) {
    return this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    })
  }
  toggleTask(task: any) {
    task.reminder = !task.reminder;
    return this.taskService.setReminder(task).subscribe()
  }
  newTask(task: any) {
    return this.taskService.addNewTask(task).subscribe()
  }
}
