import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/product/products.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'product', component: ProductsComponent  },
    { path: '**', component: ProductsComponent  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
