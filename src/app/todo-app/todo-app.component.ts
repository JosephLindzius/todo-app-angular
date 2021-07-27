import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { v4 } from 'uuid';
import {ITodo} from "../types";
import {LocalStorageService} from "../service/local-storage.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],

})
export class TodoAppComponent implements OnInit{
  inputValue: string = 'Learn Angular';
  todos: ITodo[] = [];
  sectionId?: string = ''
  localStorageList: string = "todolist"+this.sectionId

  @ViewChild('inputTodo')
  input!: ElementRef<HTMLInputElement>

  constructor(private LocalStorageService: LocalStorageService) {

  }

  setSectionid(id: string): void{
    this.sectionId = id;
  }


  saveItem(todo: ITodo): void {

    this.todos = this.todos.filter((item) => item !== todo);
      this.todos.push(todo);
      this.LocalStorageService.setLocalS(this.localStorageList, JSON.stringify(this.todos))
      this.input.nativeElement.value = '';
    }

  editItem() {

  }
  drop(event: CdkDragDrop<ITodo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }




  onClick() {
    if (this.input.nativeElement.value){
      const todo: ITodo = {
        uuid: v4().toString(),
        label: this.input.nativeElement.value
      }
      this.todos.push(todo);
      this.LocalStorageService.setLocalS(this.localStorageList, JSON.stringify(this.todos))
      this.input.nativeElement.value = '';
    }
  }

  removeItem(todo: ITodo) {
    this.todos = this.todos.filter((item) => item !== todo);
    this.LocalStorageService.setLocalS(this.localStorageList, JSON.stringify(this.todos))
  }

  savePosition(todo: ITodo){
      this.todos = this.todos.filter((item)=> item.uuid !== todo.uuid)
    this.todos.push(todo)
      this.LocalStorageService.setLocalS(this.localStorageList, JSON.stringify(this.todos))


  }
  ngOnInit():void {
    if (this.LocalStorageService.getLocalS(this.localStorageList)) {
      this.todos = JSON.parse(this.LocalStorageService.getLocalS(this.localStorageList))
      }

}
}
