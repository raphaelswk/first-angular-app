import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html'
})
export class ListProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products: Product[];

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        console.log(products);
      },
      error => console.log(error)
    );
  }

}
