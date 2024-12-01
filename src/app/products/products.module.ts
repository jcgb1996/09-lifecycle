import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PriceComponent } from './components/price/price.component';
import { ProductsComponent } from './pages/product/products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
