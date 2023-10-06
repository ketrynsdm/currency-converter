import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrencyConverter } from '../model/currency-converter';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = 'https://economia.awesomeapi.com.br/json/last/';

  constructor(private http: HttpClient) { }

  getCurrency(currency : string): Observable<ICurrencyConverter>{
    return this.http.get<ICurrencyConverter>(`${this.url}/${currency}`);
  }
}
