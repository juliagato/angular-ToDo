import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  array = [];
  storage = [];
  item = '';

  addItem() {
    if (this.item !== '') {
      this.array.push(this.item);
      let item_number = this.array.length.toString();
      localStorage.setItem(item_number, this.item);
      this.item = '';
    }
  }

  removeItem(i: number) {
    this.array.splice(i, 1);
  }

  getStored() {
    const items = { ...localStorage };
    let storage = [];
    for (let i in items) {
      if (i !== 'editorLastConnected') {
        storage.push(' ' + localStorage.getItem(i));
      }
    }
    return storage;
  }

  clearStored() {
    localStorage.clear();
  }
}
