import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>;
  subscription: Subscription;
  
  constructor(private tasksService: TasksService, private store: Store) {}

  ngOnInit() {  
    // this.todolist$ = this.tasksService.getTodoList$;
    this.todolist$ = this.store
      .getTodoList().pipe(
        map(todolist => todolist.filter(task => !task.started && 
                                                !task.finished))
      );

      // THE SUBSCRIBE MUST BE CALLED AT LEAST ONCE SO IT POPULATES THE STORE
      this.subscription = this.tasksService.getTodoList$.subscribe();
  }

  onToggle(event) {
    this.tasksService.toggle(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
