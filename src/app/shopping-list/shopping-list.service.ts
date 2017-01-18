import { Ingredient } from './../recipes/ingredient';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];
  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    //push multiple data in 1 line of code
    Array.prototype.push(this.items, items);
  }
}
