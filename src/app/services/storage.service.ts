import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService { 
  
  favouritesSubject = new BehaviorSubject<Cocktail[]>([]);


  constructor() {

    if (localStorage.getItem('favourites')) {
      
      this.favouritesSubject.next(JSON.parse(localStorage.getItem('favourites')!))
    }
  }

  savecocktail(cocktail: Cocktail) {
    cocktail.isFavourite = true;
    const actualArray = this.favouritesSubject.value;
    const newArray = [...actualArray, cocktail];
    this.favouritesSubject.next(newArray);
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  removecocktail(cocktail: Cocktail) {
    cocktail.isFavourite = false;
    const actualArray = this.favouritesSubject.value;
    const newArray = actualArray.filter((c) => c.strDrink !== cocktail.strDrink);
    this.favouritesSubject.next(newArray);
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  toggleFavourites(cocktail: Cocktail) {
    if (this.isFavourite(cocktail)) {
      this.removecocktail(cocktail)

    }else{
      this.savecocktail(cocktail)
    }
  }


  isFavourite(cocktail: Cocktail):boolean {
    console.log('is favourite', cocktail);
    return this.favouritesSubject.value.some((c) => c.strDrink===cocktail.strDrink);
  }
}
