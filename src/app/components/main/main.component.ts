import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from 'src/app/model/cocktail';
import { DataService } from 'src/app/services/data.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  searchTerm: string = '';
  cocktails: Cocktail[] = [];

  constructor(private dataService: DataService) {}

  search() {
    this.dataService.searchCocktail(this.searchTerm)
      .subscribe(cocktails => this.cocktails = cocktails);
  }



}
