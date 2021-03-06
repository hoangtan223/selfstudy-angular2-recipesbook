import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../recipes/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
    console.log(this.items);
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }
}
