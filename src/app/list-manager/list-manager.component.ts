import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../types';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="todo-app">
      <h1>
        {{title}}
      </h1>
      <div class="todo-add">
        <todo-input (submit)="addItem($event)"></todo-input>
      </div>
      <ul>
        <li *ngFor="let item of todoList">
          <todo-item [item]="item"
                    (remove)="removeItem($event)"
                    (changeTitle)="changeItemTitle($event, item)">
          </todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'My Todos';
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item: TodoItem) {
    this.todoList = this.todoListService.removeItem(item);
  }

  changeItemTitle(newTitle: string, item: TodoItem) {
    this.todoListService.changeItemTitle(newTitle, item);
  }
}
