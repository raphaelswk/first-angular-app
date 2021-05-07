import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { TasksStartedComponent } from './components/tasks-started/tasks-started.component';
import { TasksFinishedComponent } from './components/tasks-finished/tasks-finished.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TasksComponent } from "./components/tasks/tasks.component";
import { TasksService } from "./todo.service";
import { Store } from "./todo.store";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        TasksService,
        Store
    ],
    declarations: [
        TodoComponent,
        TasksComponent,
        TasksStartedComponent,
        TasksFinishedComponent,
        TodoListComponent
    ],
    exports: [
        TodoComponent,
        TasksComponent,
        TasksStartedComponent,
        TasksFinishedComponent,
        TodoListComponent
    ]
})
export class TodoModule {}