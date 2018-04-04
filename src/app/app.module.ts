import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './todo-item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './todo-list.service';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
