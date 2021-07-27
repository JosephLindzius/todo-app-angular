import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LocalStorageService {

  private prefix: string = 'ng-todo-'
  private sectionId: string = 'section-1-'

  getLocalS(key: string): string {
    return <string>localStorage.getItem(this.prefix+this.sectionId+key)
  }

  setLocalS(key: string, value: string) {
    localStorage.setItem(<string>this.prefix+this.sectionId+key, value)
  }

  removeFromLocalS(key: string): void {
    localStorage.removeItem(key)
  }

  setSectionId (value: string) : void {
    this.sectionId = value;
  }
}
