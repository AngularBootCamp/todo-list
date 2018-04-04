import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

@Injectable()
export class LocalStorageService {

  load() {
    return JSON.parse(localStorage.getItem(storageName));
  }

  save(data: any) {
    localStorage.setItem(storageName, JSON.stringify(data));
  }

}
