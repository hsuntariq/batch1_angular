import { Component } from '@angular/core';
import { TASK } from 'src/TASK';
import { TASKS } from 'src/TASKS';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent {
  tasks:TASK[] = TASKS;
}
