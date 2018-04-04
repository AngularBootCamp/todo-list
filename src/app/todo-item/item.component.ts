import { Component, Input, EventEmitter, Output } from '@angular/core';

import { TodoItem } from '../types';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item" *ngIf="item">
      <input class="todo-checkbox"
             type="checkbox">

      <span class="todo-title"
            [hidden]="editing"
            (click)="editItem()">{{ item.title }}</span>

      <todo-input [hidden]="!editing"
                  [title]="item.title"
                  (submit)="changeItemTitle($event)" (cancel)="cancelEdit($event)">
      </todo-input>

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: TodoItem;
  @Output() remove = new EventEmitter<TodoItem>();
  @Output() changeTitle = new EventEmitter<any>();

  editing = false;

  removeItem() {
    this.remove.emit(this.item);
  }

  editItem() {
    this.editing = true;
  }

  changeItemTitle(newTitle: string) {
    this.editing = false;
    this.changeTitle.emit({
      item: this.item,
      newTitle
    });
  }

  cancelEdit() {
    this.editing = false;
  }

}
