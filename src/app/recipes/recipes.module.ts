import { recipesRouting } from './recipes.routing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';

import { RecipesComponent }   from './recipes.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        recipesRouting
        ],
    exports: [],
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent
        ],
    providers: [],
})
export class RecipesModule { }
