import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[]=[
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];
  constructor() { }
  
  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingr:Ingredient){
    this.ingredients.push(ingr);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
