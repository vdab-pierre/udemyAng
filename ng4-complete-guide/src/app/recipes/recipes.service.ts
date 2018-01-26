import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.goodfood.com.au/content/dam/images/1/m/3/3/3/image.related.articleLeadwide.620x349.29v57.png/1396639904980.jpg',
      [new Ingredient('Meat', 1), new Ingredient("French fries", 20)]),
    new Recipe('Another Test Recipe',
      'This is simply another test',
      'https://www.goodfood.com.au/content/dam/images/1/m/3/3/3/image.related.articleLeadwide.620x349.29v57.png/1396639904980.jpg',
      [new Ingredient('Buns', 2), new Ingredient('meat', 1)])
  ];
  constructor() { }
  getRecipes() {
    return this.recipes.slice(); // return a new array
  }
}
