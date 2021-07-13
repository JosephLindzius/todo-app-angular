import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    TodoAppComponent,
    TodoItemComponent
  ],
  imports: [BrowserModule],
  bootstrap: [TodoAppComponent],
})
export class AppModule {}
