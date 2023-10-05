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
    cocktailsByName: Cocktail[] = [];
    ingredientSearchTerm: string = '';
    ingredientCocktails: Cocktail[] = [];
    randomCocktail: Cocktail[] = [];
    showResults: boolean = false;

  constructor(private dataService: DataService, public router: Router) {}

  searchCocktail() {
    this.dataService
      .searchCocktail(this.searchTerm)
      .subscribe((c) => (this.cocktailsByName = c));
      this.showResults = true;
  }

  searchCocktailByIngredient() {
    this.dataService
      .searchCocktailsByIngredient(this.ingredientSearchTerm)
      .subscribe(
        (c) =>
          (this.ingredientCocktails = c)
      );
      this.showResults = true;


  }

  getRandomCocktail() {
    this.dataService
      .randomCocktail()
      .subscribe((rc) => {
       
        this.randomCocktail = [rc];
      });
      this.showResults = true;
  }
}
