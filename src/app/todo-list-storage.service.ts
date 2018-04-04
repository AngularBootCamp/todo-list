import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable()
export class TodoListStorageService {
  private todoList: any[];

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  getList() {
    return [...this.todoList]; // returns a copy
  }

  createItem(item: any) {
    this.todoList.push(item);
    return this.updateLocalStorage();
  }

  updateItem(item: any, changes: any) {
    Object.assign(item, changes);
    return this.updateLocalStorage();
  }

  deleteItem(item: any) {
    this.todoList.splice(this.todoList.indexOf(item), 1);
    return this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.getList();
  }

}
