import { TestBed, inject } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service';

describe('Service: TodoList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoListStorageService,
        TodoListService
      ]
    });
  });

  it('should ...', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));
});
