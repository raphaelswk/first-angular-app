import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-finished',
  templateUrl: './tasks-finished.component.html'
})
export class TasksFinishedComponent implements OnInit {

  finished$: Observable<any[]>;

  constructor(private tasksService: TasksService, private store: Store) { }

  ngOnInit() {
    // this.finished$ = this.tasksService.getTodoList$;
    this.finished$ = this.store
      .getTodoList().pipe(
        map(todolist => todolist.filter(task => task.finished))
      )
  }

  onToggle(event) {
    this.tasksService.toggle(event);
  }
}
