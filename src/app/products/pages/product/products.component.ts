import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-products-page',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnChanges, DoCheck ,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor(){
    console.log('ProductsComponent: constructor');
  }
  ngDoCheck(): void {
    console.log('ProductsComponent: ngDoCheck');
  }

  ngOnInit(): void {
    console.log('ProductsComponent: ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ProductsComponent: ngOnChanges');
  }
  ngAfterContentInit(): void {
    console.log('ProductsComponent: ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ProductsComponent: ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ProductsComponent: ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ProductsComponent: ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ProductsComponent: ngOnDestroy');
  }


  incremetePrice():void {
    this.currentPrice++;
  }

}
