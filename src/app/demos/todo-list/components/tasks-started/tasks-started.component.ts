import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-started',
  templateUrl: './tasks-started.component.html'
})
export class TasksStartedComponent implements OnInit {

  started$: Observable<any[]>;

  constructor(private tasksService: TasksService, private store: Store) {}

  ngOnInit() {
    // this.started$ = this.tasksService.getTodoList$
    this.started$ = this.store
      .getTodoList().pipe(
        map(todolist => todolist.filter(task => task.started && 
                                                !task.finished))
      )
  }

  onToggle(event) {
    this.tasksService.toggle(event);
  }
}
