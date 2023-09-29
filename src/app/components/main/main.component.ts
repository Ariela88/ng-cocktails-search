import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Cocktail } from 'src/app/model/cocktail';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  searchTerm: string = '';
  cocktails: Cocktail[] = [];
  ingredientSearchTerm: string = '';
  ingredientCocktails: Cocktail[] = [];
  randomCocktail?: Cocktail;

  constructor(private dataService: DataService) {}

  search() {
    this.cocktails = [];
    this.ingredientCocktails = [];
    this.randomCocktail = undefined;
    
   
    if (this.searchTerm) {
      this.dataService.searchCocktail(this.searchTerm)
        .subscribe(c => this.cocktails = c);
    }

   

    if (this.ingredientSearchTerm) {
      this.dataService.searchCocktailsByIngredient(this.ingredientSearchTerm)
        .subscribe(cocktailsByIngredient => this.ingredientCocktails = cocktailsByIngredient);
    }
  }

  getRandomCocktail() {
    this.dataService.randomCocktail()
      .subscribe(randomCocktail => this.randomCocktail = randomCocktail);
  }
}
