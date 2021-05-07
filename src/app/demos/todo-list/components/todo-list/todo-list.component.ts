import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [
    'todo-list.component.css'
  ]
})
export class TodoListComponent {

  @Input()
  list: Task[];

  @Output() // The output is always an event
  toggle = new EventEmitter<any>();

  toggleItem(index: number, action: string) {
    const task = this.list[index];
    
    switch (action) {
      case 'start':
        task.finished = false;
        task.started = true;
        break;
      case 'finish':
          task.finished = true;
          task.started = false;
          break;
      case 'goback':
          task.finished = false;
          task.started = true;
          break;
      case 'cancel':
          task.finished = false;
          task.started = false;
          break;
    }

    this.toggle.emit({
      task: { ...task }
    });
  }
}
