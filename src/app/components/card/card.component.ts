import { Component, Input, OnInit } from '@angular/core';
import { ICurrencyData } from '../../model/currency-converter';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() currency!: ICurrencyData;
  @Input() name!: string;

  constructor() {}

  ngOnInit() {
  }

  _convert(value: string): string {
    const formatValue = parseFloat(value);

    const total = formatValue.toFixed(2).replace(".", ",");

    return total;
  }

  _rgb(value: string): string {
    const formatValue = parseFloat(value);

    if(formatValue <= 1) {
      return 'rgbRed'
    }
    if(formatValue <= 5) {
      return "rgbGreen"
    }
    return "rgbBlue"
  }


}
