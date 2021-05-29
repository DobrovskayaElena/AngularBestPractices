import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  collection = [{id: 1}, {id: 2}, {id: 3}];
  index: number = 0;
  item: number[] = [];

  numbers: number[] = [];  

  constructor() {
    this.collection = this.collection;

    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

  ngOnInit(){
  }

  getItems() {
    this.collection = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  }

  trackByFn(index: number) {
    return index; // or item.id
  }

}
