import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './types';

const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable()
export class TodoListService {

  private todoList: TodoItem[];

  constructor(private storage: LocalStorageService) {
    this.todoList = this.storage.load() || defaultList;
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.storage.save(this.todoList);
    return this.todoList;
  }

  removeItem(targetItem: TodoItem) {
    this.todoList.splice(this.todoList.indexOf(targetItem), 1);
    this.storage.save(this.todoList);
    return this.todoList;
  }

  changeItemTitle(item: TodoItem, title: string) {
    item.title = title;
    this.storage.save(this.todoList);
    return this.todoList;
  }
}
