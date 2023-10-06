import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [HeaderComponent, CardComponent],

})
export class SharedModule { }
