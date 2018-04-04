import { Injectable } from '@angular/core';

import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  constructor(private storage: TodoListStorageService) {
  }

  getTodoList() {
    return this.storage.getList();
  }

  addItem(item: any) {
    return this.storage.createItem(item);
  }

  removeItem(item: any) {
    return this.storage.deleteItem(item);
  }

  changeItemTitle(item: any, title: string) {
    return this.storage.updateItem(item, { title });
  }
}
