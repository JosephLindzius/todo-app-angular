import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TodoAppComponent,
    TodoItemComponent
  ],
  imports: [BrowserModule, DragDropModule],
  bootstrap: [TodoAppComponent],
})
export class AppModule {}
