import { Component, OnInit, Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    const ingrName=this.nameInputRef.nativeElement.value;
    const ingrAmount=this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingrName,ingrAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
