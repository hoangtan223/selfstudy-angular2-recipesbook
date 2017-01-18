import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Dummy", "Dummy", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",[]),
    new Recipe("Buth", "Buth", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",[])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
