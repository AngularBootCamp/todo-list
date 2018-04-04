import { TodoListPage } from './app.po';

describe('todo-list App', () => {
  let page: TodoListPage;

  beforeEach(() => {
    page = new TodoListPage();
  });

  it('should display application title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My Todos');
  });
});
