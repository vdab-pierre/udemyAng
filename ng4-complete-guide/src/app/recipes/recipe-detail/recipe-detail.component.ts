import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private shoppingListService: ShoppingListService) { }
  ingrToShoppingList(){
    this.recipe.ingredients.forEach(
      (ingredient:Ingredient)=>{
        this.shoppingListService.addIngredient(ingredient)
      }
    );
    
  }
  ngOnInit() {
  }
}
