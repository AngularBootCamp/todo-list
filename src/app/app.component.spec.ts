import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './todo-item/item.component';
import { TodoListService } from './todo-list.service';
import { LocalStorageService } from './local-storage.service';

describe('App: TodoList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputComponent,
        ItemComponent,
        ListManagerComponent
      ],
      providers: [
        TodoListService,
        LocalStorageService
      ]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
