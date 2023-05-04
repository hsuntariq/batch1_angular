import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() addTask = new EventEmitter();
  task: String = '';
  day: String = '';
  reminder: boolean = false;
  onSubmit() {
    let formFields = {
      task: this.task,
      day: this.day,
      reminder: this.reminder,
    }
    this.addTask.emit(formFields)
    alert('Data Inserted Successfully')
    this.task = ''
    this.day = ''
    this.reminder = false;
  }
}
