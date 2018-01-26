import { Component } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ShoppingListService]
})
export class AppComponent {
  menu:string="recipes";
  onHeaderMenuClicked(menu){
    this.menu=menu;
  }
}
