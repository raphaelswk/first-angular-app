import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Task } from "./task";
import { Store } from "./todo.store";

@Injectable()
export class TasksService {
    
    constructor(private http: HttpClient, private store: Store) { }

    private url = 'http://localhost:3000/todolist/';

    // I CAN CREATE A PROPERTY WHICH IS AN OBSERVABLE INSTEAD CREATING A METHOD
    // USING $ IS A CODE CONVENTION FOR OBSERVABLES
    getTodoList$: Observable<Task[]> = this.http
        .get<Task[]>(this.url)
        .pipe(
            tap(next => this.store.set('todolist', next))
        );
        // TAP IS A REACTIVE COMMAND AND IT IS USED TO SET VALUE TO THE STORE

    /* getToDoList(): Observable<Task[]> {
        return this.http
        .get<Task[]>('http://localhost:3000/todolist');
    } */

    toggle(event: any) {
        this.http.put(this.url + event.task.id, event.task)
                 .subscribe(() => {
                     const value = this.store.value.todolist;
                     const todolist = value.map((task: Task) => {
                         if (event.task.id === task.id) {
                             return { ...task, ...event.task }                             
                         } else {
                             return task;
                         }
                     });

                     this.store.set('todolist', todolist);
                 });
    }
}