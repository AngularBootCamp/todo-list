import { TestBed, inject } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import { LocalStorageService } from './local-storage.service';

describe('Service: TodoList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
        TodoListService
      ]
    });
  });

  it('should ...', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));
});
