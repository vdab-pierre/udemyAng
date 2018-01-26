import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    const ingrName=this.nameInputRef.nativeElement.value;
    const ingrAmount=this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingrName,ingrAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
