import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://www.goodfood.com.au/content/dam/images/1/m/3/3/3/image.related.articleLeadwide.620x349.29v57.png/1396639904980.jpg'),
    new Recipe('Another Test Recipe','This is simply another test','https://www.goodfood.com.au/content/dam/images/1/m/3/3/3/image.related.articleLeadwide.620x349.29v57.png/1396639904980.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
