import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input class="todo-input"
           #inputElem
           [value]="title"
           placeholder="Add something to do..."
           (keyup.enter)="changeTitle($event.target.value)"
           (blur)="cancelEdit($event.target)"
           (keyup.esc)="$event.target.blur()">

    <button class="btn" (click)="changeTitle(inputElem.value)">
      Save
    </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() title = '';
  @Output() submit = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

  cancelEdit(inputElem: HTMLInputElement) {
    inputElem.value = this.title || inputElem.value;
    this.cancel.emit();
  }

}
