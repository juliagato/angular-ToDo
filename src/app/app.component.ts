import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  array = [];
  item = '';

  addItem() {
    this.array.push(this.item);
  }

  removeItem(i: number) {
    this.array.splice(i, 1);
  }
}
