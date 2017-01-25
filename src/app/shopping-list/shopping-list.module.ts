import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShoppingListAddComponent,
        ShoppingListComponent
    ],
    imports: [ 
        CommonModule, 
        FormsModule ]
})
export class ShoppingListModule {

}