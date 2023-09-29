import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from '../model/cocktail';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

cocktails:Cocktail[]=[]

private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  
  private ingredientApiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

  constructor(private http: HttpClient) {}

  searchCocktail(searchTerm: string): Observable<Cocktail[]> {
    const apiUrl = `${this.apiUrl}${searchTerm}`;
    return this.http.get<any>(apiUrl).pipe(
      map((data: any) => data.drinks as Cocktail[])
    );
  }

 

  searchCocktailsByIngredient(ingredient: string): Observable<Cocktail[]> {
    const apiUrl = `${this.ingredientApiUrl}${ingredient}`;
    return this.http.get<any>(apiUrl).pipe(
      map((data: any) => data.drinks as Cocktail[])
    );
  }
  randomCocktail(): Observable<Cocktail> {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    return this.http.get<any>(apiUrl).pipe(
      map((data: any) => data.drinks[0] as Cocktail)
    );
  }
  
  
}
function next(arg0: (data: Cocktail) => any): import("rxjs").OperatorFunction<Cocktail, any[]> {
  throw new Error('Function not implemented.');
}

