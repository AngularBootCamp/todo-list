import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagerComponent } from './list-manager.component';
import { TodoListService } from '../todo-list.service';
import { InputComponent } from '../input/input.component';
import { ItemComponent } from '../todo-item/item.component';
import { LocalStorageService } from '../local-storage.service';

describe('ListManagerComponent', () => {
  let component: ListManagerComponent;
  let fixture: ComponentFixture<ListManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent,
        ItemComponent,
        ListManagerComponent
      ],
      providers: [
        TodoListService,
        LocalStorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
