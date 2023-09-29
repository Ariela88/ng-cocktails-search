import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Cocktail } from 'src/app/model/cocktail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  searchTerm: string = '';
  cocktails: Cocktail[] = [];
  ingredientSearchTerm: string = '';
  ingredientCocktails: Cocktail[] = [];
  randomCocktail?: Cocktail;

  constructor(private dataService: DataService, public router: Router) {}

  searchCocktail() {
    this.dataService
      .searchCocktail(this.searchTerm)
      .subscribe((c) => (this.cocktails = c));
  }

  searchCocktailByIngredient() {
    this.dataService
      .searchCocktailsByIngredient(this.ingredientSearchTerm)
      .subscribe(
        (c) =>
          (this.ingredientCocktails = c)
      );
  }

  getRandomCocktail() {
    this.dataService
      .randomCocktail()
      .subscribe((rc) => (this.randomCocktail = rc));
  }
}
