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

  private apiUrl = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  private apiKey = 'YOUR_API_KEY'; 
  private ingredientApiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

  constructor(private http: HttpClient) {}

  searchCocktail(searchTerm: string): Observable<any[]> {
   
  return this.http.get<any>(`${this.apiUrl}?s=${searchTerm}`).pipe(
    map((data: any) => data.drinks as Cocktail[]))
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
