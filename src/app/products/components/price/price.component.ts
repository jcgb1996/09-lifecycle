import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'products-price',
  standalone: false,

  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

    public interval$?: Subscription;

    ngOnInit(): void {
      console.log('PriceComponent: ngOnInit');
      this.interval$ = interval(1000).subscribe( value => console.log(`tike ${value}`) );

    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log('PriceComponent: ngOnChanges');
      console.log({changes});
    }
    ngOnDestroy(): void {
      this.interval$?.unsubscribe();
      console.log('PriceComponent: ngOnDestroy');
    }

    @Input()
    public price: number = 0;
}
