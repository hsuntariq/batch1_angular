import { Injectable } from '@angular/core';
import { TASK } from 'src/TASK';
import { TASKS } from 'src/TASKS';
import { Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api = 'http://localhost:5000/tasks/'
  constructor(private http:HttpClient) {}

  getTasks(): Observable<TASK[]> {
      return this.http.get<TASK[]>(this.api)
  }
  deleteTask(task:any):Observable<TASK[]>{
    return this.http.delete<TASK[]>(this.api + task.id)
  }
  setReminder(task:any):Observable<TASK[]>{
    return this.http.put<TASK[]>(this.api+task.id,task,{
      headers:{
        'Content-Type':'application/json'
      }
    })
  }
}
