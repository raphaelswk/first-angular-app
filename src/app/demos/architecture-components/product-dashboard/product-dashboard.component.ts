import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ProductCardDetailComponent } from '../components/product-card-detail.component';
import { ProductsCountComponent } from '../components/product-count.component';
import { Product } from '../models/product';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styles: [
  ]
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  constructor(private productService: ProductService) { }  

  public products: Product[];

  @ViewChild(ProductsCountComponent, { static: false }) counter: ProductsCountComponent;
  @ViewChild('test', { static: false }) screenMessage: ElementRef;

  @ViewChildren(ProductCardDetailComponent) cards: QueryList<ProductCardDetailComponent>;

  ngOnInit(): void {
    this.productService.getProducts()
        .subscribe(products => {
          this.products = products;
        },
        error => console.log(error));

    // this.products = [
    //   {
    //     id: '1', 
    //     name: 'TEST 1',
    //     value: '100',
    //     onDeal: true,
    //     dealValue: '90',
    //     image: 'celular.jpg'
    //   },
    //   {
    //     id: '2', 
    //     name: 'TEST 2',
    //     value: '100',
    //     onDeal: true,
    //     dealValue: '90',
    //     image: 'celular.jpg'
    //   },
    //   {
    //     id: '3', 
    //     name: 'TEST 3',
    //     value: '100',
    //     onDeal: true,
    //     dealValue: '90',
    //     image: 'celular.jpg'
    //   }
    // ];
  }

  ngAfterViewInit(): void {
    console.log('Counter Object: ', this.counter.products);

    const clickText: Observable<any> = fromEvent(this.screenMessage.nativeElement, 'click');
    clickText.subscribe(() => {
      alert('Clicked on the text!');
      return;
    });

    console.log(this.cards);
    this.cards.forEach(p => {
      console.log(p.product);
    })
  }

  changeOnDeal(event: Product) {
    event.onDeal = !event.onDeal;
  }
}
