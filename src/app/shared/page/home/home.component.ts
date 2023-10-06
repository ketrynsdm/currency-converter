import { Component, OnInit, Input } from '@angular/core';
import { ICurrencyConverter } from '../../../model/currency-converter';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  currency!: ICurrencyConverter;
  loading!: {  [x: string]: boolean; };

  constructor( private httpService: HttpService ) {}

  ngOnInit(): void {
    this.getAllCurrency();

    setInterval(() => {
      this.getAllCurrency();
    },180000)
  }

  getAllCurrency(): void {
    this.getCurrency('CAD-BRL');
    this.getCurrency('ARS-BRL');
    this.getCurrency('GBP-BRL');
  }

  getCurrency(code: string): void {
    const replaceCode = code.replace("-", "");
    this.loading = { ...this.loading, [replaceCode]: true }
    this.httpService.getCurrency(code).subscribe({
      next: (resp: ICurrencyConverter) => {
        this.currency = { ...this.currency, [replaceCode]: resp[replaceCode] };
        this.loading = { ...this.loading, [replaceCode]: false };
      },
      error: (err) => {
        this.loading = { ...this.loading, [replaceCode]: false };
      },
    });
  }
}
