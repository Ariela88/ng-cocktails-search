import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.api-ninjas.com/v1/cocktail';
  private apiKey = 'YOUR_API_KEY'; 

  constructor(private http: HttpClient) {}

  searchCocktail(searchTerm: string): Observable<any[]> {
    const apiUrl = `${this.apiUrl}?name=${searchTerm}`;
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    return this.http.get<any>(apiUrl, { headers }).pipe(
      map((data: any) => data.results)
    );
  }

  getCocktailDetails(name: string): Observable<any> {
    const url = `${this.apiUrl}?name=${name}`;
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    return this.http.get(url, { headers });
  }
}
