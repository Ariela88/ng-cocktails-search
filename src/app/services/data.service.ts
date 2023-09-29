import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient){}

  searchCocktail(searchTerm: string) {
    const apiUrl = `https://api.api-ninjas.com/v1/cocktail?name=${searchTerm}`;
    this.http
      .get<any>(apiUrl)
      .pipe(
        map((data) => data.results),

       
      )
      .subscribe((books) => this.allBooks.next(books));
  }
  }
  
  private apiUrl = 'https://api.api-ninjas.com/v1/cocktail';
private apiKey = 'YOUR_API_KEY';

constructor(private http: HttpClient) { }

getCocktailDetails(name: string): Observable<any> {
  const headers = new HttpHeaders({
    'X-Api-Key': this.apiKey
  });

  const url = `${this.apiUrl}?name=${name}`;

  return this.http.get(url, { headers: headers });
}
}
